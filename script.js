
let coverHeader = ["Good to See You Again!", "Be Part of Something Bigger."]
let coverSubheading = ["Log in to reconnect and dive back into what you love.","Join to unlock exclusive features and connect with a community that gets you."]

let circleScatter = '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_887_2299)"><circle cx="30" cy="30" r="26" fill="url(#paint0_radial_887_2299)"/><circle cx="30" cy="30" r="26" fill="url(#paint1_radial_887_2299)" fill-opacity="0.5"/><circle cx="30" cy="30" r="26.25" stroke="#FCFCFC" stroke-opacity="0.4" stroke-width="0.5"/></g><defs><filter id="filter0_f_887_2299" x="0.5" y="0.5" width="59" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_887_2299"/></filter><radialGradient id="paint0_radial_887_2299" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42 41) rotate(-137.726) scale(22.2991)"><stop offset="0.025" stop-color="#91D3DB" stop-opacity="0.73"/><stop offset="0.18" stop-color="#CC9CDF" stop-opacity="0.67525"/><stop offset="0.335" stop-color="#FBA5DF" stop-opacity="0.6351"/><stop offset="1" stop-color="#CF9494" stop-opacity="0"/></radialGradient><radialGradient id="paint1_radial_887_2299" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5 9.5) rotate(57.9946) scale(28.3019)"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient></defs></svg>'


document.addEventListener('DOMContentLoaded', function () {
    const coverScreen = document.querySelector('.cover');
    const passwordRequirements = document.querySelector(".password_validation_container")
    const passwordInput = document.querySelector(".pword_input")
    let headerCover = document.querySelector(".cover_header")
    let subheaderCover = document.querySelector(".cover_subheader")
    let sections = document.querySelectorAll("section")
    let screenSize = window.innerWidth;

    console.log(screenSize)

    headerCover.innerHTML = coverHeader[0]
    subheaderCover.innerHTML = coverSubheading[0]

    if(screenSize > 786){
        CheckCover(coverScreen, headerCover, subheaderCover);
    }
    else{
        MoveSections(sections)
    }
    
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
function MoveSections(sections){
    let switchScreenButton = document.querySelectorAll('.swap_screens')
    if (sections) {
        switchScreenButton.forEach(function(item){
            item.addEventListener("click", function(){
                let coverSide = item.getAttribute("data-side")
                let loginSide = document.querySelector(".login_screen")
                let accountside = document.querySelector(".create_account_screen")
                if(coverSide == "login"){                
                    loginSide.style.display = "none"
                    accountside.style.display = 'flex'
                }
                else if(coverSide == "account"){
                    loginSide.style.display = "flex"
                    accountside.style.display = 'none'
                }
            })
        })
    } else{
        console.log("element is invalid")
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
        let numbers = /[0-9]/g;
        let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let upperCase = /[A-Z]/g;
        if(passwordInput.value.length >= 8){
            characterSize.setAttribute("data-status","valid")
        }
        else if(passwordInput.value.length < 8){
            characterSize.setAttribute("data-status","invalid")
        }
        if(passwordInput.value.match(numbers)){
            numberCheck.setAttribute("data-status","valid")
        }
        else{
            numberCheck.setAttribute('data-status','invalid')
        }
        if(passwordInput.value.match(specialCharacters)){
            specialCharacterCheck.setAttribute("data-status", "valid")
        }
        else{
            specialCharacterCheck.setAttribute("data-status", "invalid")
        }
        if(passwordInput.value.match(upperCase)){
            upperCaseCheck.setAttribute('data-status', 'valid')
        }
        else{
            upperCaseCheck.setAttribute('data-status', 'invalid')
        }
    })
}
function ScatterCircles(circles, coverScreen){
    let maxCircles = 1;
    let minSize = 50;
    while(maxCircles < 30){
        let circle = CreateCircles(circles,maxCircles)
        const randomMidY = -Math.floor(Math.random() * 300 + 500);
        const randomEndY = randomMidY + -Math.floor(Math.random() * 50 + 100)
        console.log(randomEndY)
        circle.style.setProperty('--endY', `${randomEndY}px`);  
        circle.style.setProperty('--midY', `${randomMidY}px`)      
        const svgElement = CreateCircles().querySelector('svg');
        if (svgElement) {
            let newSize = maxCircles * Math.floor((Math.random() * 10) + 1);

            if (newSize < minSize) {
                newSize = minSize;
            }
            svgElement.setAttribute('width', `${newSize}px`);
            svgElement.setAttribute('height', `${newSize}px`);
        }
        coverScreen.appendChild(circle);
        maxCircles++;
    }
}
function CreateCircles(circles, maxCircles){
    const circleContainer = document.createElement('div');
    circleContainer.innerHTML = circles;
    circleContainer.setAttribute('class', 'circle_item')
    circleContainer.setAttribute('id', `circle-${maxCircles}`)
    Object.assign(circleContainer.style, {
        position: 'absolute',
        left: `${maxCircles * (Math.random() * 10 + 1)}%`, 
        top: '100%',
        animationDelay: `${maxCircles * 200}ms`,
        rotate: `${maxCircles * 10}deg`
    });

    return circleContainer;
}