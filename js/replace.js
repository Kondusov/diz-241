//alert('123')
let text = prompt('Введите текст')
// let text = 'Ёто такоЁ тёкст мё получили'
function replace(text){
    console.log(text.length)
    if(text.indexOf('ё')){
        for(i=0; i <= text.length;i++){
            //console.log(i)
            text = text.replace('Ё','Е')
            text = text.replace('ё','е')
        }
        console.log(text)
    }
}
replace(text)