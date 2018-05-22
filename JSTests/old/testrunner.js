
var testResults = []
var tests = []

function assertTrue(isTrue) {

    if (isTrue !== true) {
        throw Error("expected true")
    }

}

function assertFalse(isFalse) {

    if (isFalse !== false) {
        throw Error("expected false")
    }

}

function assertEquals(expected, actual) {

    if (expected !== actual) {
        throw Error("expected <em>" + JSON.stringify(expected) + "</em> but was <em>" + JSON.stringify(actual) + "</em>")
    }

}

function test(name, func) {
    tests.push({name: name, func: func})
}

function runTest(name, func) {
    try {
        func()
        testResults.push({"name": name, "error": null})
    } catch(error) {
        testResults.push({"name": name, "error": error})
    }
}

function runSuite() {

    for (index in tests) {
        var test = tests[index]
        runTest(test.name, test.func)
    }

}