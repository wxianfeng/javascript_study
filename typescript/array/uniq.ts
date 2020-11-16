// ts-node uniq.ts
const arr = [
    {a: 1, b: 'a'},
    {a: 2, b: 'b'},
    {a: 3, b: 'c'},
    {a: 1, b: 'a'}
]

let uniqueArr = arr.filter((item, pos, self) => self.findIndex(v => v.a === item.a) === pos)

// [ { a: 1, b: 'a' }, { a: 2, b: 'b' }, { a: 3, b: 'c' } ]
console.log(uniqueArr)
