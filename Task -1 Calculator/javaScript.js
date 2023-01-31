const display = document.getElementById('display');
const buttons = document.getElementsByClassName("btn");
let ValueTodisplay = " ";
for(item of buttons) {
    item.addEventListener('click', (event) => {
        buttonValue = event.target.innerText;
        
        switch (buttonValue)
        {
            case '←':
               ValueTodisplay = display.value.slice(0,-1);
                display.value=ValueTodisplay;
                break;
            
            case '=':
                try {
                      display.value = eval(ValueTodisplay);
                } catch {
                    display.value = 'Invalid Expression !';
                }
            break;
            
            case 'C':
                ValueTodisplay = " ";
                display.value = ValueTodisplay;
                break;

            default:
                ValueTodisplay = ValueTodisplay + buttonValue;
                display.value = ValueTodisplay;
                break;
                
        }
    })
}