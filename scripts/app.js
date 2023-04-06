//1
const arr1 = [`a`, `b`, `c`, `d`]
const result1 = arr1[0] + `+` + arr1 [1] +`;` + arr1 [2] + `+` + arr1 [3]
alert(result1)
//2
const arr2 = [2, 5, 3, 9]
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3]
alert(result2)
//3
const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
const result3 = arr3 [1][0]
alert(result3)
//4
const arr4 = {js:[`jQuery`, `Angular`], php: `hello`, css: `world`}
const result4 = arr4.js[0]
alert(result4)
//5
const arr5 = []
for (let i=1; i <= 100; i++){
    arr5.push (`x`.repeat(i))
}
alert(arr5)
//6
const arr6 = []
for (let i=1; i < 10; i++){
    arr6.push (String(i).repeat(i))
}
alert(arr6)
//7
const x = prompt(`Value`)
const y = prompt(`Length`)
function arreyFill (x, y){
    const arr7 = []
    for (let i=0; i<y;i++){
        arr7.push(x)
    }
    return arr7
}
alert(arreyFill(x, y))
//8
const arr8 = [1, 2, 3, 4, 5, 6]
function sumMore10 (arr8){
    let sum = 0
    for (let i = 0; i < arr8.length; i++){
        sum += arr8[i]
        if (sum > 10){
            return i + 1
        }
    }
}
const result8 = sumMore10(arr8)
alert(result8)
//9
const arr9 =[1, 2, 3, 4, 5]
arr9.reverse()
alert(arr9)
//10
const arr10 = [[1, 2, 3], [4, 5], [6]]
let sum10 = 0
for (let i = 0; i < arr10.length; i++){
    for (let b = 0; b < arr10[i].length; b++){
        sum10 += arr10[i][b]
    }
}
alert(sum10)
//11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let sum11 = 0
for (let i = 0; i < arr11.length; i++) {
    for (let b = 0; b < arr11[i].length; b++) {
        for (let c = 0; c < arr11[i][b].length; c++) {
            sum11 += arr11[i][b][c]
        }
    }
}
alert(sum11)