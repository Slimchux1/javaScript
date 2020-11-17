
let myList = [
    ['Pants', 4],
    ['Apple', 6],
    ['DSTV', 3],
    ['Macbook', 3],
    ['Frozen fish', 12],
    ['Television set', 3],
    ['Iphone', 1],
    ['Fridge', 2],
    ['Radio', 3],
    ['Benz', 2],
    ['Rice', 3]
];

//console.log(myList)
console.table(myList)

 firstRemove = myList.pop()
thirdRemove = myList.splice(2,1)
const replacethird =   myList[2] = ['Orange Juice', 17]

console.table(myList)

let newArray = []

newArray.push(firstRemove)
newArray.push(thirdRemove[0])
console.log(newArray)
console.table(newArray)