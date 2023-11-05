const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.field-group input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(inputs =>{
        if(!inputs.value){
            inputs.parentElement.classList.add('error');
        }else{
            inputs.parentElement.classList.remove('error');
        }
    })
});