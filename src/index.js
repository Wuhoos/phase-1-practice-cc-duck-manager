fetch('http://localhost:3000/ducks')
.then(response => response.json())
.then(ducks => {
   renderDuckImage(ducks)
})

function renderDuckImage(ducks){
    ducks.forEach(duck => {
        const imageDisplay = document.getElementById('duck-nav')
        const duckImage = document.createElement('img')
        duckImage.src = duck.img_url
        imageDisplay.appendChild(duckImage)
        duckImage.addEventListener('click', () => {
            const nameDisplay = document.querySelector('#duck-display-name')
            const mainDuckImage = document.querySelector('#duck-display-image')
            const likeButton = document.querySelector('#duck-display-likes')
            likeButton.textContent = duck.likes
            nameDisplay.textContent = duck.name
            mainDuckImage.src = duck.img_url
        })
    })
}

// function likedsButton(){
//     const likeButton = document.querySelector('#duck-display-likes')
//     likeButton.addEventListener('click', () => {
//     likeButton.textContent++
//     })
// }
const likeButton = document.querySelector('#duck-display-likes')
likeButton.addEventListener('click', () => {
    likeButton.textContent++
})

const duckForm = document.getElementById('new-duck-form')
const imageDisplay = document.getElementById('duck-nav')
duckForm.addEventListener('submit', e => {
    e.preventDefault()
    const duckUrl = duckForm.elements[1].value
    const newImage = document.createElement('img')
    const newName = document.createElement('h2')
    likeButton.textContent = 0

    newImage.src = duckUrl
    imageDisplay.append(newImage, newName)
    newImage.addEventListener('click', e => {
        console.log(e)
        const newDuckName = duckForm.elements[0].value
        const duckUrl = duckForm.elements[1].value
        const nameDisplay = document.querySelector('#duck-display-name')
        const duckDisplay = document.querySelector('#duck-display-image')
        nameDisplay.textContent = newDuckName
        duckDisplay.src = duckUrl

    })
})