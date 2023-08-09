const duckNav = document.querySelector('#duck-nav')
const nameDisplay = document.getElementById('duck-display-name')
const imageDisplay = document.getElementById('duck-display-image')
const button = document.getElementById('duck-display-likes')
const inputForm = document.getElementById('new-duck-form')


fetch('http://localhost:3000/ducks')
.then(response => response.json())
.then(duckList => {
    duckList.forEach(eachDuck => {
       duckDisplay(eachDuck)
    })
    displayDuckDetail(duckList[0])
    likeButton()
})

function duckDisplay(eachDuck){
    const image =  document.createElement('img')
    image.src = eachDuck.img_url
    duckNav.append(image)
    image.addEventListener('click', () => displayDuckDetail(eachDuck))
}

function displayDuckDetail(eachDuck){
    nameDisplay.textContent = eachDuck.name
    imageDisplay.src = eachDuck.img_url
    button.textContent = eachDuck.likes
}

function likeButton(){
    button.addEventListener('click', () => button.textContent++)
}

inputForm.addEventListener('submit', e => {
    e.preventDefault()
    const newDuckName = document.querySelectorAll('#new-duck-form input')[0].value
    const newDuckImage = document.querySelectorAll('#new-duck-form input')[1].value

    let newDuck = {
        name: newDuckName,
        img_url: newDuckImage,
        likes: 0
    }
    duckDisplay(newDuck)
})