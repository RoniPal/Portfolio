//copyright year change
let currentyear = document.getElementById("autoYear")
actualYera = new Date()
currentyear.innerHTML = actualYera.getFullYear()

//check button customize
let checkBtn = document.getElementById("check")  //checkbox
let nav_links = document.getElementsByClassName("nav_links") //li

Array.from(nav_links).forEach(link => {
    link.addEventListener('click', () => {
        checkBtn.checked = false;  // uncheck the checkbox
    });
});

//Name Customization
let text = document.getElementById("name_2nd");
        let textLoad = () => {
            setTimeout(() => {
                text.textContent = "Roni Pal";
            }, 0);
            setTimeout(() => {
                text.textContent = "A FrontEnd Dev";
            }, 4000);
            setTimeout(() => {
                text.textContent = "A Learner";
            }, 8000);  //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);