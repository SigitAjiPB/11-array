
//========= 12a =========


let add = function () {
  console.log(2 + 3);
};

add();
add();

// ============ 12b =========
function runTwice(fun) {
  fun();
}


runTwice(function() {
  console.log('12b');
  console.log('12b');
});

runTwice(add);

//======== 12c & 12d =========
const  startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click',() => {
  startBtn.innerHTML = 'Loading..';
  setTimeout(() => {
    startBtn.innerHTML = 'Finished!';
  }, 3000);
});

// ============ 12e & f ==========

const addBtn = document.querySelector('.add-btn');
const msg = document.querySelector('.message-text');
let timeoutId;

addBtn.addEventListener('click',() => {
  msg.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    msg.innerHTML = '';
    }, 3000);
});

// ============ 12g , 12 h ============
const adddBtn = document.querySelector('.addd-btn');
const removedBtn = document.querySelector('.remove-btn');


let notif = 2;

let intervalId;

let isDisplayingNotification;

displayNotification();

function displayNotification() {
  if (isDisplayingNotification) {
    return;
  }
  isDisplayingNotification = true;

  intervalId = setInterval(() => {
    if (document.title === '12 Lessons') {
      document.title = `(${notif}) new messages `;
    }else {
      document.title = '12 Lessons';
    }
  
  }, 2000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = '12 Lessons'
};



