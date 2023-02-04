let input = document.querySelector('.input');
let icon = document.querySelector('.icon');

icon.addEventListener('click', function(){
    if(input.type == 'password'){
        input.type = 'text'
    } else{
        input.type = 'password'
    }
});

icon.addEventListener('click', function(){
    if(icon.firstElementChild.classList.contains('fa-eye')){
        icon.firstElementChild.classList.replace( 'fa-eye', 'fa-eye-slash')
    }else{
        icon.firstElementChild.classList.replace( 'fa-eye-slash', 'fa-eye' ) 
    }
});