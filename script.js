let inputs = document.querySelectorAll(".form-btn input");
let submit_btn = document.getElementById("submit-btn") 
let icon = document.querySelectorAll(".icon")

// check of value in inputs
function firsandlanstname() {

    const firstName = document.getElementById('firstname').value.trim();
    window.localStorage.setItem('firstname', firstName);
    const lastName = document.getElementById('lastname').value.trim();
    window.localStorage.setItem('lastname', lastName);
    const email = document.getElementById("email").value.trim()
    window.localStorage.setItem('email', email);
    const password = document.getElementById("password").value.trim();
    window.localStorage.setItem('password', password);
    var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filter2 = /^()/;

    // firstName
    if (firstName === '' || firstName.length <= 2) {
        document.querySelector('.icon-firstname').style.opacity = '1';
        document.querySelector('.msg-firstname').style.display = 'block';
    } else {
        let none = document.querySelector('.icon-firstname').style.opacity = '0';
        let nones = document.querySelector('.msg-firstname').style.display = 'none';
    }
    
    
    // lastName
    if (lastName === '' || lastName.length <= 2) {
        document.querySelector('.msg-lastname').style.display = 'block';
        document.querySelector('.icon-lastname').style.opacity = '1';
    } else {
        document.querySelector('.msg-lastname').style.display = 'none';
        document.querySelector('.icon-lastname').style.opacity = '0';
    }   
    // email
    if (!filter1.test(email) ) 
    { 
        document.querySelector('.icon-email').style.opacity = '1';
        document.querySelector('.msg-email').style.display = 'block';
    }
        else{
        document.querySelector('.icon-email').style.opacity = '0';
        document.querySelector('.msg-email').style.display = 'none';
    }
    // password
    if (password === '' ) {
        document.querySelector('.icon-password').style.opacity = '1';
        document.querySelector('.msg-password').style.display = 'block';
    } 
    else if(password.length <= 7  ) {
        document.querySelector('.icon-password').style.opacity = '1';
        document.querySelector('.msg-password-eightcharcter').style.display = 'block';
    }
    else if(password.charAt(0) !== password.charAt(0).toUpperCase()){
        document.querySelector('.icon-password').style.opacity = '1';
        document.querySelector('.msg-password-uppercase').style.display = 'block';
    }
    else if(!/^[A-Za-z0-9#@$%&!]{7,15}$/.test(password)) {
        document.querySelector('.icon-password').style.opacity = '1';
        document.querySelector('.msg-password-numbers').style.display = 'block';
    }
    else {
        document.querySelector('.icon-password').style.opacity = '0';
        document.querySelector('.msg-password').style.display = 'none';
        document.querySelector('.msg-password-eightcharcter').style.display = 'none';
        document.querySelector('.msg-password-uppercase').style.display = 'none';
        document.querySelector('.msg-password-numbers').style.display = 'none';
    }  
}


// alert 
window.addEventListener('beforeunload', function (event) {
       const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Check if any input has value
    if (firstName !== '' || lastName !== '' || email !== '' || password !== '') {
        // Display a confirmation dialog
      
        event.preventDefault();
        this.confirm("Are you sure you want to leave this page?");
        

        return ''; // For other browsers
    } 
});        


// succssful 
let box_alerts = document.querySelector(".box-alert")
let btn =document.getElementById("btn")

function alerts() {
    // Show the alert box
    box_alerts.style.display = "block";

    // Clear input fields
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
btn.addEventListener("click",function(){
    box_alerts.style.display = "none"
})


// confirm("lasdfj;lasjdkfasjdf")s
submit_btn.addEventListener("click", ()=>{
    // checkmail()
    // firstname()
    // lastname()
    firsandlanstname()
    const isValid = (
        document.querySelector('.icon-firstname').style.opacity === '0' &&
        document.querySelector('.icon-lastname').style.opacity === '0' &&
        document.querySelector('.icon-email').style.opacity === '0' &&
        document.querySelector('.icon-password').style.opacity === '0'
    );

    // If all inputs are valid, show the alerts
    setTimeout({
        
    })
    if (isValid) {
        setTimeout(() => {
            alerts();
            // Clear input fields
            document.getElementById('firstname').value = '';
            document.getElementById('lastname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        }, 100);
    }

    })


    document.getElementById('showAlert').addEventListener("click", function () {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        );
    });



// //submit btn
function submit() {

    inputs.forEach(input => {

            if(input.value === ""){
                msg.forEach(msg => {
                    msg.style.display = "block";
                });
                icon.forEach(icon => {
                    icon.style.opacity = 1;
                });

                return false;
            }else{
                msg.forEach(msg => {
                    msg.style.display = "none";
                });
                icon.forEach(icon => {
                    icon.style.opacity = 0  ;
                });

            }
            
           
        });
        
    };
    
    


function checkmail(msg,icon) 

{



 
    


}

function firstname(){

    let firstname = document.getElementById("firstname").value

    if(firstname == '' || firstname.length <= 2 ) {
        msg.style.display = "block"; // Show the message
        icon.style.opacity = "1";     // Show the icon
    } else {
        msg.style.display = "none";  // Hide the message
        icon.style.opacity = "0";    // Hide the icon
        return; // Exit the function
    }
}

document.querySelector('.signup-form').addEventListener('submit', firsandlanstname);



