
// PhantomJS seems to have a bug related to string prototype functions: https://github.com/ariya/phantomjs/issues/14211#issuecomment-214983370

var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg)

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    if (endsWith(msg, " FAILURES") && msg !== "0 FAILURES") {
        phantom.exit(1)
    }

}

var suites = 1
function suiteFinished() {
    suites--
    if (suites <= 0) {
        console.log("All suites finished, exiting...")
        phantom.exit(0)
    }
}

// Content blocking test suite
page.open('test_harness.html', function(status) {

    // Install mocks
    page.injectJs("mock_webkit.js")
    page.injectJs("mock_data.js")
    page.injectJs("mock_abp.js")
    page.injectJs("mock_tlds.js")

    // Install dependencies
    page.injectJs("../Core/messaging.js")
    page.injectJs("../Core/disconnectme.js")

    // Install script under test
    page.injectJs("../Core/contentblocker.js")
    
    // Install test suite
    page.injectJs("contentblocking_tests.js")

    // Run test suite
    page.evaluate(function() { 
        'use strict'; runSuite(); renderResults() 
    })

    suiteFinished()
})
