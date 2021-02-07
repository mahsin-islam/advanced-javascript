const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Mannaaaaa'},
    {id: 41, name: 'Mouri'},
    {id: 71, name: 'DeepJol'},
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
console.log(ids);
console.log(names);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);
console.log('bigger-->',bigger);
console.log('biggerOne-->',biggerOne);
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
// }