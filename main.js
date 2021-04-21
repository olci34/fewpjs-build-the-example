// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorDiv = document.getElementById('modal')
errorDiv.className = 'hidden'
let heart = document.querySelector('span.like-glyph')

heart.addEventListener('dblclick', function(e){
  mimicServerCall().then(function(resp){
    alert(resp)
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.className = 'activated-heart'
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = 'like-glyph'
    }
  }).catch(function(error){
    let errorP = document.getElementById('modal-message')
    errorP.innerText = error
    errorDiv.className = null
    setTimeout(function() {
      errorDiv.hidden = true
    }, 5000)
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
