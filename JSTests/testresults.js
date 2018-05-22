
function renderResults() {

    var resultsHolder = document.getElementById("test-results") 

    var passesTitle = document.createElement("h2")
    passesTitle.innerHTML = "Passes"
    resultsHolder.appendChild(passesTitle)

    for (result in testResults) {
        var test = testResults[result]

        var output = document.createElement("span")
        output.innerHTML = test.name
        resultsHolder.appendChild(output)

        if (test.error == null) {
            console.log("TEST `" + test.name + "` PASS")
            output.setAttribute('class', 'test-result-pass')
        } else {
            console.log("TEST `" + test.name + "` FAIL")
            console.log("\t" + test.error)
            output.setAttribute('class', 'test-result-fail')
        }

    }

}
