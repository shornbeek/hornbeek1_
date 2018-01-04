
// Start Apple Button 

// Get the modal
var modal1 = document.getElementById('myModal1');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// Get the button that opens the modal
var btn = document.getElementById('apple');

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

// Start Android Button 


// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById('android');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}



// Start Microsoft Button 


// Get the modal
var modal = document.getElementById('myModal3');

// Get the button that opens the modal
var btn = document.getElementById('microsoft');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal3.style.display = "none";
    }
}




