const input = document.getElementById('input-text');
const list = document.getElementById('list');

// Get the input element and the button element
const into = document.getElementById('list');
const button = document.getElementById('btn');

// Add an event listener to the input element
input.addEventListener('keyup', function(event) {
  // Check if the Enter key was pressed (key code 13)
  if (event.keyCode === 13) {
    // Trigger the button click event
    button.click();
  }
});


// function toggle() {
//   const check = document.getElementsByClassName('checked')[0];
//   if (check.style.display === 'none') {
//     check.style.display = 'block';
//   } else {
//     check.style.display = 'none';
//   }
// }


function logic() {
  if (input.value === '') {
    alert("Please add some task");
  } else {
    console.log('list appended');
    let li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);

    let span = document.createElement('span');
    span.innerText = '\u00d7';
    li.appendChild(span);

    
  }
  input.value = '';
  savedata();
}

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    savedata();

  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    savedata();
  }
}, false);


function savedata(){
  localStorage.setItem('data',list.innerHTML);
}

function showtask(){
  list.innerHTML = localStorage.getItem('data');

}


showtask();