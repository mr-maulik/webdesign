var barList = document.getElementById("bar");

function removeClass() {
    var barList = document.getElementById("bar");
    barList.style.display = "none";
}
function addClass(){
    var barList = document.getElementById("bar");
    barList.style.display = "block";
}



// scroll button 

const scrollBtn = document.querySelector(".scroll_btn");

window.addEventListener('scroll' , () => {

    if(window.pageYOffset  ){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener('click' , () => {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
});

// scroll button 


 


