const calculate = document.getElementById('calculate');
const input = document.getElementById('input');
const negate = document.querySelector('button.negate');
const clear = document.querySelector('button.clear');

function addToInput(operand){
    input.value += operand;
}




negate.addEventListener('click', (e) => {
    // input.value = input.value.slice(-1);
    const loc = []
    loc.push(input.value.lastIndexOf('+'))
    loc.push(input.value.lastIndexOf('-'))
    loc.push(input.value.lastIndexOf('*'))
    loc.push(input.value.lastIndexOf('/'))
    loc.push(input.value.lastIndexOf('%'))
    const index = Math.max(...loc);
    console.log(index);
    console.log(input.value.charAt(index));
    input.value = input.value.replace(input.value.charAt(index), '-');
})

calculate.addEventListener('click', (e) => {
    try{
        const result = eval(input.value);
        input.value = result;
        // console.log(result);
    }catch(e){
        input.value = 'Error';
    }
})

clear.addEventListener('click', (e) => {
    input.value = '';
})
