let coverHeader = ["Good to See You Again!", "Be Part of Something Bigger."]
let coverSubheading = ["Log in to reconnect and dive back into what you love.","Join to unlock exclusive features and connect with a community that gets you."]

let circleScatter = '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="26" cy="26.5" rx="26" ry="26.5" fill="#12B0AC"/></svg>'


document.addEventListener('DOMContentLoaded', function () {
    const coverScreen = document.querySelector('.cover');
    const passwordRequirements = document.querySelector(".password_validation_container")
    const passwordInput = document.querySelector(".pword_input")
    let headerCover = document.querySelector(".cover_header")
    let subheaderCover = document.querySelector(".cover_subheader")

    headerCover.innerHTML = coverHeader[0]
    subheaderCover.innerHTML = coverSubheading[0]

    CheckCover(coverScreen, headerCover, subheaderCover);
    OpenPasswordContainer(passwordRequirements, passwordInput)
    PasswordCheck(passwordInput);
    ScatterCircles(circleScatter, coverScreen);
});

function CheckCover(coverScreen, headerCover, subheaderCover){
    let buttonCover = document.querySelectorAll(".swap_screens")

    if (coverScreen) {
        buttonCover.forEach(function(item){
            item.addEventListener("click", function(){
                let coverSide = item.getAttribute("data-side")
                let animatiedText = document.querySelector(".text_container")
                
                if(coverSide == "login"){
                    coverScreen.setAttribute("data-covered", "login_covered")
                    animatiedText.setAttribute('data-animation', 'disappear')
                    setTimeout(function(){
                        headerCover.innerHTML = coverHeader[1]
                        subheaderCover.innerHTML = coverSubheading[1]
                        animatiedText.setAttribute('data-animation', "move-left")
                    }, 1000)
                    
                }
                else if(coverSide == "account"){
                    coverScreen.setAttribute("data-covered", "create_covered")
                    animatiedText.setAttribute('data-animation', 'disappear')
                    setTimeout(function(){
                        headerCover.innerHTML = coverHeader[0]
                        subheaderCover.innerHTML = coverSubheading[0]
                        animatiedText.setAttribute('data-animation', "move-right")
                    },1000)
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
    let specialCharacterCheck = document.getElementById("password_special_character")
    let upperCaseCheck = document.getElementById("password_uppercase")

    passwordInput.addEventListener('keyup', function(){

        if(passwordInput.value.length >= 8){
            characterSize.setAttribute("data-status","valid")
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

        let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(passwordInput.value.match(specialCharacters)){
            specialCharacterCheck.setAttribute("data-status", "valid")
        }
        else{
            specialCharacterCheck.setAttribute("data-status", "invalid")
        }

        let upperCase = /[A-Z]/g;

        if(passwordInput.value.match(upperCase)){
            upperCaseCheck.setAttribute('data-status', 'valid')
        }
        else{
            upperCaseCheck.setAttribute('data-status', 'invalid')
        }
    })
}

function ScatterCircles(circles, coverScreen){
    let maxCircles = 0;

    while(maxCircles < 20){
        console.log(maxCircles)
        const circleContainer = document.createElement('div');

        circleContainer.innerHTML = circles;
        circleContainer.setAttribute('id', 'circle-${maxCircles}')

        circleContainer.style.position = 'absolute'
        circleContainer.style.left = maxCircles * Math.floor((Math.random() * 10) + 1) + "%"
        circleContainer.style.top = maxCircles * Math.floor((Math.random() * 10) + 1) + "%"
        
        coverScreen.appendChild(circleContainer);
        maxCircles++;
    }
}