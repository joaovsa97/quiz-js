const questions = [
    {
        question: 'Qual a capital da França?',
        anwser: [{a: 'Paris', correct: true}, {b: 'Brasília', correct: false}, {c: 'Roma', correct: false}, {d: 'Toquio', correct: false}]
    },
    {
        question: 'Qual a capital do Brasil?',
        anwser: [{a: 'Paris', correct: false}, {b: 'Brasília', correct: true}, {c: 'Roma', correct: false}, {d: 'Toquio', correct: false}]
    },
    {
        question: 'Qual a capital do Japão?',
        anwser: [{a: 'Paris', correct: false}, {b: 'Brasília', correct: false}, {c: 'Roma', correct: false}, {d: 'Toquio', correct: true}]
    },
]

//set timer
let time = document.getElementById("time")

//questions and answers
const question = document.getElementsByClassName('questions')
const questionA = document.getElementById('a')
const questionB = document.getElementById('b')
const questionC = document.getElementById('c')
const questionD = document.getElementById('d')
const questionOption = document.querySelectorAll("input[type='radio']")

//get buttons
const submitBtn = document.getElementById('btn-submit')
const nextBtn = document.getElementById('btn-next')
const resetBtn = document.getElementById('btn-reset')


//set points
const modal = document.getElementsByClassName('modal')
const points = document.getElementById('points')

//set timer
let timeLeft = 10
const setTime = () => {
    timeLeft--
    time.textContent = timeLeft

    if(timeLeft <= 0){
        timeLeft = 10
    }
}

showTime = setInterval(setTime, 1000)

//pick a question number on array
const pickQuestion = () => {
    i = Math.floor(Math.random() * questions.length)

    return i
}

//show the question on screen
const showQuestion = () => {
    i = pickQuestion()

    obj = questions[i].anwser

    return question.textContent = obj.map(
    `<ul id="option-list">
        <li><input type="radio" name="answer" value="a" id="a">${obj[0].a}</li>
        <li><input type="radio" name="answer" value="b" id="b">${obj[1].b}</li>
        <li><input type="radio" name="answer" value="c" id="c">${obj[2].c}</li>
        <li><input type="radio" name="answer" value="d" id="d">${obj[3].d}</li>
    </ul>`
    )
}

submitBtn.addEventListener("click", () => {showQuestion()})