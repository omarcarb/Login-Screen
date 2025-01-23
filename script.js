document.addEventListener('DOMContentLoaded', function () {
    const coverScreen = document.querySelector('.cover');
    const passwordRequirements = document.querySelector(".password_validation_container")
    const passwordInput = document.querySelector(".pword_input")

    CheckCover(coverScreen);
    OpenPasswordContainer(passwordRequirements, passwordInput)
    PasswordCheck(passwordInput);
});

function CheckCover(coverScreen){
    let buttonCover = document.querySelectorAll(".swap_screens")

    if (coverScreen) {
        buttonCover.forEach(function(item){
            item.addEventListener("click", function(){
                let coverSide = item.getAttribute("data-side")
                
                if(coverSide == "login"){
                    coverScreen.setAttribute("data-covered", "login_covered")
                }
                else if(coverSide == "account"){
                    coverScreen.setAttribute("data-covered", "create_covered")
                }
            })
        })
        
    } else {
        console.error("Element with class 'cover' not found.");
    }
}

function OpenPasswordContainer(passwordRequirements, passwordInput){

    passwordInput.addEventListener('focus', function(){
        passwordRequirements.style.display = "flex"
    })
    passwordInput.addEventListener('blur', function(){
        passwordRequirements.style.display = "none"
    })
}

function PasswordCheck(passwordInput){
    let characterSize = document.getElementById("password_character_size")
    let numberCheck = document.getElementById("password_number_inclusion")

    passwordInput.addEventListener('keyup', function(){
        
        if(passwordInput.value.length >= 8){
            characterSize.setAttribute("data-status", "valid")
        }
        else if(passwordInput.value.length < 8){
            characterSize.setAttribute("data-status","invalid")
        }

        let numbers = /[0-9]/g;

        if(passwordInput.value.match(numbers)){
            numberCheck.setAttribute("data-status","valid")
        }
        else{
            numberCheck.setAttribute('data-status','invalid')
        }
    })
}

console.log(screen.width)