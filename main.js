const _ = require('lodash');
const assert = require('assert');

//Array of Animals
const danceMoves = ['slide-to-the-left', 'slide-to-the-right', 'criss-cross', 'get-down-real-low', 'all-the-way-to-the-floor', 'one-hop', 'two-hops-now', 'five-hops-this-time', 'Freeze!']

//1. _.chunk on array of animals using lodash
// Should print the array of ansimals in three separate chunks.

let chaChaRealSmooth = _.chunk(danceMoves, 3);

console.log('Print 3 separate chunks of animals - Chacha Real Smooth', chaChaRealSmooth)

//2. _.reverse on array of animals using lodash
// Should print the array in reverse order

const reverseReverse = _.reverse(danceMoves);

console.log('Reverse Reverse - chunks' , reverseReverse)

//3. _.without on array of animals using lodash
// Should print a new array without Lion, Tiger, and Ostrich

const charlieBrown = _.without(danceMoves, 'slide-to-the-left', 'slide-to-the-right', 'criss-cross', 'get-down-real-low', 'all-the-way-to-the-floor', 'one-hop', 'two-hops-now', 'five-hops-this-time')

console.log('Print array without the Dance Moves listed in a new array - Do the Charlie Brown' , charlieBrown)

//4. _.myshuffle on array of animals using lodash
// Should print a random shuffle of the array

const chaChaAgain = _.shuffle(danceMoves)

console.log('Shuffling original array to a random array - ChaCha Again!' , chaChaAgain)

//5. _.join on array of animals using loadshash
// Should print the strings back to objects

const nowItsTimeToGetFunky = _.join(chaChaRealSmooth,",")
console.log('Now its Time to get Funky:   ' ,nowItsTimeToGetFunky)






// // // Unit Tests:
//
// if (typeof describe === '_.function') {
//     describe('_.chunk)', () => {
//         it('Should return an array separated into 3 chunks', () => {
//             _.chunk()
//             assert(danceMoves, 3);
//         });
//         describe('_.reverse)', () => {
//             it('Should return an array that is reversed array of Dance Moves', () => {
//                 _.reverse()
//                 assert(danceMoves);
//             });
//
//             describe('_.without)', () => {
//                 it('Should return an array of just Freeze!', () => {
//                     _.without()
//                     assert(danceMoves);
//                 });
//
//                 describe('_.shuffle)', () => {
//                     it('Should shuffle the array', () => {
//                         _.shuffle()
//                         assert(danceMoves);
//                     });
//
//                     describe('_.join(chaChaRealSmooth))', () => {
//                         it('Should change all strings to objects', () => {
//                             _.join()
//                             assert(chaChaRealSmooth);
//                         });
//                     });
//                 }
