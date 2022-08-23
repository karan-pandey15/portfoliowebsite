
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents')
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

//               ----------menu code start here----------- 

var sidemenu = document.getElementById('sidemenu')

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

// form code start here 

var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var messageError = document.getElementById('message-error')
var emailError = document.getElementById('email-error')
var submitError = document.getElementById('subit-error')

function validatename() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required"
        return false;
    }
    // if(!name.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    // {
    //     nameError.innerHTML  = "Write Full name"
    //     return false;
    // }
    nameError.innerHTML = '<i class="fas fa-check-circle" ></i>'
    return true;
}


// phoneError code start here

function validatephone() {

    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0 || phone.length <= 9) {
        phoneError.innerHTML = "phone number is required"
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = "number is missing"
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digit please"
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle" ></i>'
    return true;

}

// emailError code start here

function validateemail() {

    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        email.innerHTML = "E-mail is required"
        return false;
    }
    if (!email.match(/^[A-Za-z]*[0-9]*@[A-Za-z]*.com*$/)) {
        emailError.innerHTML = "wrong email"
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle" ></i>'
    return true;


}

function validatemessage() {

    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.left;

    // if(message.length==0){
    //     messageError.innerHTML = "message is required"
    // }


    if (left > 0) {
        messageError.innerHTML = "More character required";
        return false;

    }

    messageError.innerHTML = '<i class="fas fa-check-circle" ></i>'

}


function validateform() {
    if (!validatename() || !validatephone() || !validateemail() || !validatemessage()) {
        submitError.innerHTML = " Please full-fill all the option"
    }
}


