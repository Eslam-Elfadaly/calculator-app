let keys = document.querySelectorAll(".container .keys .btn");
let display = document.querySelector(".container .display");
let body = document.body;
let container = document.querySelector(".container");
let themes = document.querySelectorAll(".container header .controls .numbers span")

// Display with click
let expression = "";
keys.forEach(btn=> {
    btn.addEventListener("click", function(){
        calculatorListener(btn.innerHTML)
    });
});

    function calculatorListener(value){
        if(value === "RESET"){
            expression = "";
            display.innerHTML = 0;
            return;
        };
        if(value === "DEL" ){
             expression = expression.slice(0 , -1);
             display.innerHTML = expression|| 0;
             return;
            }
        if(value === "="){
             expression = eval(expression).toString();
             display.innerHTML = expression;
             return;
            }

            let operators = ["+", "-", "*", "/"];
            let lastElement = expression.slice(-1);
            
            if(operators.includes(lastElement) && operators.includes(value)){
                expression = expression.slice(0, -1) + value;
            }
            else if(lastElement === "." && value === "."){
                expression = expression.slice(0, -1) + value;
            }
            else{
                expression += value;
            }

            display.innerHTML = expression;
}

// display with keydown

document.addEventListener("keydown", function(e){
    if (!isNaN(e.key) || e.key === "."){
        calculatorListener(e.key);
    }

    if (e.key === "Enter"){
        calculatorListener("=")
    }

    if(e.key === "Backspace"){
        calculatorListener("DEL")
    }
    if(e.key === "Delete"){
        calculatorListener("RESET")
    }
    if(["+", "-", "*", "/"].includes(e.key)){
        calculatorListener(e.key);
    }
})


// change theme 
themes.forEach(t => {
    t.addEventListener("click", function(){
        if(t.innerHTML === "1"){
            removeClasses();
            addClass_theme1();
        }
        else if(t.innerHTML === "2"){
            removeClasses();
            addClass_theme2();
        }
        else if(t.innerHTML === "3"){
            removeClasses();
            addClass_theme3();
        }
    })
})

// remove classes
function removeClasses(){
    body.classList.remove("theme-1","theme-2", "theme-3");
    container.classList.remove("theme-1","theme-2", "theme-3");
}
// theme 1
function addClass_theme1(){
    body.classList.add("theme-1");
    container.classList.add("theme-1");
}

// theme 2
function addClass_theme2(){
    body.classList.add("theme-2");
    container.classList.add("theme-2");
}

// theme 3
function addClass_theme3(){
    body.classList.add("theme-3");
    container.classList.add("theme-3");
}
