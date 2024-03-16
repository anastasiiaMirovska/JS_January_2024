// Тут я виконала додаткове завдання по відео. Цей код потрібно вставити в консоль сторінки https://mixkit.co/free-stock-music/
let audioList = document.querySelectorAll('.audio-player__wave audio')
let titleList = document.querySelectorAll('.item-grid-card__meta>h2')
let authorList = document.querySelectorAll('.item-grid-card__meta>p')
let objectsArray = []

//Перевірку на рівну кількість елементів у масивах я не робила, бо ми
// точно впевнені, що на сайті одинакова кількість авторів, загогловків і посилань, але якби ми не були впевненими,
// то потрібно було б також написати перевірку на рівність:
// if(audioList.length !== titleList.length ||audioList.length!== authorList.length){
//      варіант що робити коли не рівні
// }
// else{
//.....те що прописано нижче:
//}

for(let i = 0; i < audioList.length; i++){
    let object ={
        title: titleList[i].outerText,
        author: authorList[i].outerText.replace('by ', ''),
        mp3: audioList[i].src
    }
    objectsArray.push(object)
}
console.log(objectsArray);
