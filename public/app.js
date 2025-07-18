const jokeBox = document.getElementById('jokeBox');
const getJokeBtn = document.getElementById('getJokeBtn');
const hahaBtn = document.getElementById('hahaBtn');
const mehBtn = document.getElementById('mehBtn');

function showToast(message, duration = 2500) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";

  setTimeout(() => {
    toast.className = "toast"; // hide it
  }, duration);
}

async function getJoke() {
  jokeBox.textContent = "Loading joke...";
  fetch('/giveMejoke?haha=1')
  .then(res => res.text())
    .then(msg => {
      jokeBox.textContent = msg;
    })
    .catch(err => {
      jokeBox.textContent = "Error in loading joke";
    });
}


// Reaction handlers
hahaBtn.addEventListener('click', () => {
  fetch('/giveMejoke?haha=1')
    .then(res => res.text())
    .then(msg => {
      jokeBox.textContent = msg;
      showToast("You reacted with Haha 😄");
    })
    .catch(err => {
      showToast("Error recording Haha");
    });
});

mehBtn.addEventListener('click', () => {
  fetch('/giveMejoke?meh=1')
    .then(res => res.text())
    .then(msg => {
      jokeBox.textContent = msg;
      showToast("You reacted with Meh 😐");
    })
    .catch(err => {
      showToast("Error recording Meh");
    });
});


getJokeBtn.addEventListener('click', getJoke);
