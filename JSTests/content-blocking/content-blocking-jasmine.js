
describe('content-blocking', function() {

    it('when blocking enabled and matches easylist with no protocol then should block', function() {
        
        duckduckgoBlockerData.blockingEnabled = true
        duckduckgoBlockerData.easylist.match = true

        duckduckgoContentBlocking.shouldBlock("//cnn.com", "page", function(url, shouldBlock) {
            expect(shouldBlock).toBe(true)
        })

    })

    it('when blocking enabled and matches easylist and first party url then should not block', function() {
        
        duckduckgoBlockerData.blockingEnabled = true
        duckduckgoBlockerData.easylist.match = true

        duckduckgoContentBlocking.shouldBlock("/first/party.js", "page", function(url, shouldBlock) {
            expect(shouldBlock).toBe(false)
        })

    })

    it('when blocking enabled and matches easylist then should block', function() {
        
        duckduckgoBlockerData.blockingEnabled = true
        duckduckgoBlockerData.easylist.match = true

        duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {
            expect(shouldBlock).toBe(true)
        })

    })

    it('when blocking enabled and no easylist match then should not block', function() {
        
        duckduckgoBlockerData.blockingEnabled = true
        duckduckgoBlockerData.easylist.match = false

        duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {        
            expect(shouldBlock).toBe(false)
        })

    })

    it('when blocking disabled then should not block', function() {
        
        duckduckgoBlockerData.blockingEnabled = false

        duckduckgoContentBlocking.shouldBlock("http://cnn.com", "page", function(url, shouldBlock) {        
            expect(shouldBlock).toBe(false)
        })

    })

});
