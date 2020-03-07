// This is a single-line comment.

/* Here's a
multi-line
comment. Just to add a comment*/

// console.log('This code is no longer active')

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;
