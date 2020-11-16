var arr = [
    { a: 1, b: 'a' },
    { a: 2, b: 'b' },
    { a: 3, b: 'c' },
    { a: 1, b: 'a' }
];
var uniqueArr = arr.filter(function (item, pos, self) { return self.findIndex(function (v) { return v.a === item.a; }) === pos; });
console.log(uniqueArr);
