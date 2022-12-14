const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V', 
    'B',
    'N',
    'M',
    '«',
]

// const guessRows = [
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', '']
// ]

const guessRows = 
Array(6).fill(Array(5).fill(''))
    

    
function handleClick(){
    console.log('clicked')
}
guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' +  guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key) 
    buttonElement.addEventListener('click', ()  => handleClick(key)) 
    keyboard.append(buttonElement) 
})
handleClick();