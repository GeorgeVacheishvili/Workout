// დავალება 1
const divBox = document.querySelector('.div-box')
const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    divBox.style.display = 'none'
})



// დავალება 2
const lotrCard = document.createElement('div')
lotrCard.id = 'card'

const h2 = document.createElement('h2')
h2.textContent = 'Gandalf'

const lotrLink = document.createElement('a')
lotrLink.href = 'https://en.wikipedia.org/wiki/Gandalf'
lotrLink.textContent = 'Go to profile'

lotrCard.appendChild(h2)
lotrCard.appendChild(lotrLink)

document.body.appendChild(lotrCard)

// დავალება 3

const quiz = document.querySelector('.quiz')
const question = document.createElement('h2')
const btnTrue = document.querySelector('.true')
const btnFalse = document.querySelector('.false')


question.textContent = 'HTML is programming language'

quiz.appendChild(question)

btnTrue.addEventListener('click', (e) => {
    btnTrue.style.background = 'green'

})

btnFalse.addEventListener('click',() => {
    btnFalse.style.background = 'red'
})