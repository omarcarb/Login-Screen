document.addEventListener('DOMContentLoaded', function () {
    const coverScreen = document.querySelector('.cover');
    CheckCover(coverScreen);
});

function CheckCover(coverScreen){
    if (coverScreen) {
        // Listen for keydown events
        document.addEventListener('keydown', function (event) {
            if (event.key === "ArrowRight") { // Right arrow key
                coverScreen.setAttribute("data-covered", "create_covered");
            } else if (event.key === "ArrowLeft") { // Left arrow key
                coverScreen.setAttribute("data-covered", "login_covered");
            }
            
        });
    } else {
        console.error("Element with class 'cover' not found.");
    }
}