const assert = require('assert')
const { solution, testData } = require('../../src/training/13-genomic-range-query')

describe.only('13. genomic range query', () => {
  testData.map((d, idx) => {
    it(`${idx}. in: ${JSON.stringify(d.in)} -> out: ${d.out}`, () => {
      assert.equal(solution(d.in), d.out)
    })
  })
})
