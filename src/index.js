// import { solution, data } from './training/1-binary-gap'
// data.map((d, idx) => {
//   const res = solution(d.in)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/2-odd-occurences-array'
// testData.map((d, idx) => {
//   const res = solution(d.in)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/3-cyclic-rotation'
// testData.map((d, idx) => {
//   const res = solution(d.in.a, d.in.k)
//   log(`${idx}. ${JSON.stringify(res) == JSON.stringify(d.out) ? 'good' : 'bad'}`)
// })


// import { solution, testData } from './training/4-reverse-array'
// testData.map((d, idx) => {
//   const res = solution(d.in)
//   console.log(d.in)
//   log(`${idx}. ${JSON.stringify(res) == JSON.stringify(d.out) ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/5-frog-jump'
// testData.map((d, idx) => {
//   const res = solution(d.in.x, d.in.y, d.in.d)
//   console.log(res)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/6-perm-missing-element'
// testData.map((d, idx) => {
//   const res = solution(d.in)
//   // console.log(res)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/7-tape-equilibrum'
// testData.map((d, idx) => {
//   const res = solution(d.in)
//   // console.log(res)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/8-array-perm'
// testData.map((d, idx) => {
//   const res = solution(d.in)
//   // console.log(res)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/9-frog-river-one'
// testData.map((d, idx) => {
//   const res = solution(d.in.x, d.in.a)
//   // console.log(res)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/10-missing-integer'
// testData.map((d, idx) => {
//   const res = solution(d.in)
//   // console.log(res)
//   log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
// })

// import { solution, testData } from './training/11-max-counters'
// testData.map((d, idx) => {
//   const res = solution(d.in.n, d.in.a)
//   // console.log(res)
//   log(`${idx}. ${JSON.stringify(res) == JSON.stringify(d.out) ? 'good' : 'bad'}`)
// })

import { solution, testData } from './training/12-passing-cars'
testData.map((d, idx) => {
  const res = solution(d.in)
  // console.log(res)
  log(`${idx}. ${res == d.out ? 'good' : 'bad'}`)
})


function log(msg) {
  if (typeof msg === 'object') {
    console.log(JSON.stringify(msg, null, 2), '\n')
  } else {
    console.log(msg)
  }
}
