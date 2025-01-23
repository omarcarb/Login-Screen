document.addEventListener('DOMContentLoaded', function () {
    const coverScreen = document.querySelector('.cover');
    const passwordRequirements = document.querySelector(".password_validation_container")

    CheckCover(coverScreen);
    OpenPasswordContainer(passwordRequirements)
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

function OpenPasswordContainer(passwordRequirements){
    let passwordInput = document.querySelector('.pword_input')

    passwordInput.addEventListener('focus', function(){
        passwordRequirements.style.display = "flex"
    })
    passwordInput.addEventListener('blur', function(){
        passwordRequirements.style.display = "none"
    })
}

console.log(screen.width)