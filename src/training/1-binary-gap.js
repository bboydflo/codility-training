/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros
that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of
length 2. The number 529 has binary representation 1000010001 and contains two
binary gaps: one of length 4 and one of length 3.
The number 20 has binary representation 10100 and contains one binary gap of length 1.
The number 15 has binary representation 1111 and has no binary gaps.
The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

int solution(int N);

that, given a positive integer N, returns the length of its longest binary gap.The
function should return 0 if N doesn 't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary
representation 10000010001 and so its longest binary gap is of length 5.
Given N = 32 the function should return 0, because N has binary representation '100000'
and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range[1 - 2147483647]
*/

export const solution = (n) => {
  let binaryRepr = n.toString(2)
  // console.log(binaryRepr)
  const zeroGapRegex = /(0)+/g
  const matchResult = binaryRepr.match(zeroGapRegex)
  // console.log(matchResult)
  if (!matchResult || (matchResult &&matchResult.length ===1)) {
    return 0
  }
  let biggestMatch = '0'
  for(let i=0; i<matchResult.length; i++) {
    if (matchResult[i].length > biggestMatch.length) {
      biggestMatch = matchResult[i]
    }
  }
  return biggestMatch.length
}

export const data = [
  {
    in: 1041,
    out: 5
  },
  {
    in: 32,
    out: 0
  },
  {
    in: 15,
    out: 0
  },
  {
    in: 1,
    out: 1
  }
]

function binaryGaps(n) {
  let b = n.toString(2)
  for(let i=b.length-1; i>0; i--) {
    if (b.indexOf(`1${'0'.repeat(i)}1`) > -1) {
      return i
    }
  }
  return 0
}

function padZero(len) {
  // let s = '';
  // for (var i = 0; i < len; i++) {
  //   s = s + '0';
  // }
  // return '1' + s + '1';
  return `1${'0'.repeat(len)}1`
}