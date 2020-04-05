const assert = require('assert')
let sum = require('../SummaDel2')

describe('SummaDel2.js', function () {
     it('defines sum of the type Function', function () {
         let result = typeof (sum)
         assert.equal(result, result)
     })

    it('has a container sum such that sum(1, 2, 3) returns 6', function () {
        let result = sum(1, 2, 3)
        assert.equal(result, 6)
    })

    it('has a container sum such that sum(1, 2, 3, 4) returns 10', function () {
        let result = sum(1, 2, 3, 4)
        assert.equal(result, 10)
    })

    it('has a container sum such that sum() returns 0', function () {
        let result = sum()
        assert.equal(result, 0)
    })
})