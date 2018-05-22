
test("when blocking enabled and matches easylist and first party then should not block", function() {

    duckduckgoBlockerData.blockingEnabled = true
    duckduckgoBlockerData.easylist.match = true

    duckduckgoContentBlocking.shouldBlock("/first/party.js", "page", function(url, shouldBlock) {
        assertFalse(shouldBlock)
        console.log("closure arguments: " + JSON.stringify(arguments))
    })

})

test("when blocking enabled and matches easylist then should block", function() {

    duckduckgoBlockerData.blockingEnabled = true
    duckduckgoBlockerData.easylist.match = true

    duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {
        assertTrue(shouldBlock)
        console.log("closure arguments: " + JSON.stringify(arguments))
    })

})

test("when blocking disabled then should not block", function() {

    duckduckgoBlockerData.blockingEnabled = false

    duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {
        assertFalse(shouldBlock)
        console.log("closure arguments: " + JSON.stringify(arguments))
    })

})
