"use strict"
let target = document.querySelector(".cursor")

let i = 0;
//커서 깜빡이게 하기
function blink() {
    target.classList.toggle('active');
}
setInterval(blink, 500)


//변수 값 저장
function randomString() {
    let stringArr = []
    const first_Word = "재미없는 설명,\n재밌게 정리하는";
    const second_Word = "제이쿼리 재미없다!\nJS 파고드는";
    const third_Word = "이론 이해안되면,\n타이핑부터 해보는";
    first_Word.replace(/\n/g, '<br/>');
    second_Word.replace(/\n/g, '<br/>');
    third_Word.replace(/\n/g, '<br/>');
    stringArr[0] = first_Word
    stringArr[1] = second_Word
    stringArr[2] = third_Word
    let selectString = stringArr[i]
    let selectStringArr = selectString.split('');
    i++
    if (i >= stringArr.length) {
        i = 0
    }
    return selectStringArr;

}


//타이핑 리셋
function resetTyping() {
    target.textContent = "";

    dynamic(randomString())

}

//글자 하나씩 택스트 출력
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift()

        setTimeout(function () {
            dynamic(randomArr)
        }, 150)

    } else {
        setTimeout(resetTyping, 1300)

    }


}
dynamic(randomString())