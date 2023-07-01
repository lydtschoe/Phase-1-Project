fetch('http://localhost:3000/friends')
.then(res=>res.json())
.then(friendZodiacData => friendZodiacData.forEach(friends => displayMenu(friends)))

function displayMenu(friends){
    const friendMenu = document.querySelector('#friend-menu')
    const friendImage = document.createElement('img')
    friendImage.src = friends.image 
    friendMenu.appendChild(friendImage)

    friendImage.addEventListener('click',()=>{
        displayFriendDetails(friends)

    })

}

function displayFriendDetails(friends){
    const friendImage = document.querySelector('.friend-image')
    const friendName = document.querySelector('.name')
    const friendSun = document.querySelector('.sun')
    const friendMoon = document.querySelector('.moon')
    const friendRising = document.querySelector('.rising')
    const friendColor = document.getElementById("friend-detail")


    friendImage.src = friends.image 
    friendName.textContent = friends.name 
    friendSun.textContent = friends.sun 
    friendMoon.textContent = friends.moon 
    friendRising.textContent = friends.rising 
    friendColor.style.background = friends.color
}
const newFriendForm = document.querySelector('#new-friend')
newFriendForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    newFriend ={
        image: e.target['new-image'].value,
        name: e.target['new-name'].value,
        sun: e.target['new-sun'].value,
        moon: e.target['new-moon'].value,
        rising: e.target['new-rising'].value
    }
    displayMenu(newFriend)
    displayFriendDetails(newFriend)
})
//on form submit i want a popup telling me new friend added or something
const submitButton = document.querySelector('#submitForm')
submitButton.addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello New Friend!");
}


