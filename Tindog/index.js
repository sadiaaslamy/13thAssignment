import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
     if(currentDogIndex >2){
       document.body.innerHTML = `<div class="end-message">
                                    <h1>No more Tindogs</h1>
                                    <div>`
    }  
}

function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById('like').style.display = "block";
     setTimeout(()=> getNewDog(), 5000)
}
function no() {
    currentDog.setMatchStatus(true)
    document.getElementById('dislike').style.display = "block";
     setTimeout(()=> getNewDog(), 5000)  
}
