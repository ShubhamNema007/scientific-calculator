var screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenValue = '';
for (item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        if (buttonText == '*') {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText =='+/-'){
            if(screen.value.substring(0, 1) == "-")
		    screen.value = screen.value.substring(1, screen.value.length)
            else
            screen.value = "-" + screen.value
        }
        else if (buttonText == 'Cl') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText =='del'){
            screenValue = screen.value.slice(0,-1);
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText=='x2'){
            screen.value = eval(screen.value) * eval(screen.value)
        }
        else if(buttonText=='EXP'){
            screen.value = Math.exp(screen.value)
        }
        else if(buttonText=='log'){
            screen.value = Math.log10(screen.value)
        }
        else if(buttonText=='In'){
            screen.value = Math.log(screen.value)
        }
        else if(buttonText=='e'){
            screen.value += 'e^';
        }
        else if(buttonText=='PI'){
            screen.value = (screen.value * Math.PI)
        }
        else if(buttonText=='sq'){
            screen.value = Math.pow(screen.value, 1/2);
        }
        else if(buttonText=='n!'){
            var i, num, f;
            f=1
            num=screen.value;
            for(i=1; i<=num; i++)
            {
                f=f*i;
            }
            i=i-1;
            screen.value=f;
        }
        else if(buttonText=='xy'){
            screen.value +='^';
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
