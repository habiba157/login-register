
// var signupName = document.getElementById('signupName');
// var signupEmail = document.getElementById('signupEmail');
// var signupPassword = document.getElementById('signupPassword');
// var signinEmail = document.getElementById('signinEmail');
// var signinPassword = document.getElementById('signinPassword');
// var signupDiv = document.getElementById("signupDiv");
// var signinDiv = document.getElementById("signinDiv");
// var homeSection = document.getElementById("home");
// var users = [];
// var username = localStorage.getItem('sessionUsername')
// if (username != null) {
//   document.getElementById('username').innerHTML = "Welcome " + username;
// }
// if (localStorage.getItem('users') == null) {
//   users = []
// } else {
//   users = JSON.parse(localStorage.getItem('users'))
// }


// function signUp() {
//   if (isEmpty() == false) {
//     document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//     return false
//   }
//   var signUp = {
//     name: signupName.value,
//     email: signupEmail.value,
//     password: signupPassword.value,
//   }
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailRegex.test(signupEmail.value)) {


//     if (users.length == 0) {

//       users.push(signUp);
//       localStorage.setItem('users', JSON.stringify(users));
//       document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
//       showSigninDiv();
//       return true
//     }
//     if (isEmailExist() == true) {
//       document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

//     } else {
//       users.push(signUp);
//       localStorage.setItem('users', JSON.stringify(users));
//       document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
//       showSigninDiv();

//     }



//   } else {
//     document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Wrong format of email</span>'

//   }





// }

// function isEmpty() {

//   if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
//     return false
//   } else {
//     return true
//   }
// }





// // for check email is exist
// function isEmailExist() {
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
//       return true;
//     }
//   }
// }


// function showSigninDiv() {
//   if (signinDiv.classList.contains("d-none")) {
//     signinDiv.classList.replace("d-none", "d-block");
//     signupDiv.classList.replace("d-block", "d-none");
//     homeSection.classList.replace("d-block", "d-none");
//   }
// }
// function showSignupDiv() {
//   if (signupDiv.classList.contains("d-none")) {
//     signinDiv.classList.replace("d-block", "d-none");
//     signupDiv.classList.replace("d-none", "d-block");
//     homeSection.classList.replace("d-block", "d-none");
//   }
// }
// function showHomeDiv() {
//   if (homeSection.classList.contains("d-none")) {
//     signinDiv.classList.replace("d-block", "d-none");
//     signupDiv.classList.replace("d-block", "d-none");
//     homeSection.classList.replace("d-none", "d-block");
//   }
// }

// function isLoginEmpty() {

//   if (signinPassword.value == "" || signinEmail.value == "") {
//     return false
//   } else {
//     return true
//   }
// }

// function login() {
//   if (isLoginEmpty() == false) {
//     document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
//     return false
//   }
//   var password = signinPassword.value;
//   var email = signinEmail.value;
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase()) {
//       localStorage.setItem('sessionUsername', users[i].name);
//       showHomeDiv();
//     } else {
//       document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
//     }
//   }

// }
var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');
var signupDiv = document.getElementById("signupDiv");
var signinDiv = document.getElementById("signinDiv");
var homeSection = document.getElementById("home");
var users = [];
var username = localStorage.getItem('sessionUsername')
if (username) {
  document.getElementById('username').innerHTML = "Welcome " + username;
}

if (localStorage.getItem('users') == null) {
  users = []
} else {
  users = JSON.parse(localStorage.getItem('users'))
}


function signUp() {
  if (isEmpty() == false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
  }
  var signUp = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(signupEmail.value)) {
    if (users.length == 0) {
      users.push(signUp);
      localStorage.setItem('users', JSON.stringify(users));
      document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
      // window.location.href = "index.html"
      return true
    }
    if (isEmailExist() == true) {
      document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
      users.push(signUp);
      localStorage.setItem('users', JSON.stringify(users));
      document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>';
      window.location.href = "index.html"
    }
  } else {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Wrong format of email</span>'

  }





}

function isEmpty() {

  if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
    return false
  } else {
    return true
  }
}





// for check email is exist
function isEmailExist() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return true;
    }
  }
}

/*
function showSigninDiv() {
  if (signinDiv.classList.contains("d-none")) {
    signinDiv.classList.replace("d-none", "d-block");
    signupDiv.classList.replace("d-block", "d-none");
    homeSection.classList.replace("d-block", "d-none");
  }
}
function showSignupDiv() {
  if (signupDiv.classList.contains("d-none")) {
    signinDiv.classList.replace("d-block", "d-none");
    signupDiv.classList.replace("d-none", "d-block");
    homeSection.classList.replace("d-block", "d-none");
  }
}
function showHomeDiv() {
  if (homeSection.classList.contains("d-none")) {
    signinDiv.classList.replace("d-block", "d-none");
    signupDiv.classList.replace("d-block", "d-none");
    homeSection.classList.replace("d-none", "d-block");
  }
}
*/
function isLoginEmpty() {

  if (signinPassword.value == "" || signinEmail.value == "") {
    return false
  } else {
    return true
  }
}

function login() {
  if (isLoginEmpty() == false) {
    document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    return false
  }
  var password = signinPassword.value;
  var email = signinEmail.value;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == email.toLowerCase() && users[i].password.toLowerCase() == password.toLowerCase()) {
      localStorage.setItem('sessionUsername', users[i].name);
      window.location.href = "home.html";
    } else {
      document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
  }

}



function logout() {
  localStorage.removeItem('sessionUsername')
}


// function logout() {
//   localStorage.removeItem('sessionUsername')
// }
// all inputs
/*
var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
    
// to say welcome in home page
var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}




//for check inputs is empty or not
function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}





// for check email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}





function signUp() {
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    // to store all value as object
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        window.location.href="index.html"
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        window.location.href="index.html"


    }


}




// ============= for login================
//for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name)
           
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}

*/


