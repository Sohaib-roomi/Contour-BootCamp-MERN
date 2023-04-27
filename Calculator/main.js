
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-ac');
    let del = document.querySelector('.btn-del');
    let equal = document.querySelector('.btn-equal');
    let string = "";


    buttons.forEach((button)=>{

        button.addEventListener('click', (e)=>{
            console.log(button);
            buttonText = e.target.innerText; 
            //console.log("button text is ", buttonText);
            //let value = e.target.dataset.num;

        if(buttonText === "AC"){
            string = "";
            screen.value = string;
            
        }
        else if(buttonText === "DEL"){
            
            string = string.slice(0, -1);
            screen.value = string;
        
        }
        else if(buttonText === "=")
        {
            
            if(screen.value === ''){
                screen.value = "Please Enter";
            }
            else{        
                    let ans;
                    ans = eval(screen.value);
                    screen.value = ans;
                }
        }
        else{
            string += buttonText;
            screen.value = string;
        }
            

        })
        
       
    });



    
