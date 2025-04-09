let arr1 = []
let arr2 = ['первый', 'второй','третий','последний']
console.log(arr1)
console.log(arr2)
console.log(arr2[2])
arr2[2] = 'новый третий'
console.log(arr2)
console.log(arr2.length)
console.log(arr2[arr2.length -1]); // напечатает 'последний элемент'
console.log(arr2[arr2.length -1].length); // напечатает количество символов последнего элемента
arr2.push('пятый','шестой')
arr2.unshift('перед-первым')
console.log(arr2)
arr2.shift()
arr2.pop()
console.log(arr2)