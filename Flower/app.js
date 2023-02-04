let heading = document.querySelector('.text');
let myBtn1 = document.querySelector('.btn1');
let myBtn2 = document.querySelector('.btn2');
let myImage = document.querySelector('.img1');

myBtn2.addEventListener('click', function(){
    myImage.classList.add('img1new')
})

myBtn1.addEventListener('click', function(){
    myImage.classList.remove('img1new')
})

myBtn2.addEventListener('click', function(){
    if(heading.innerHTML === 'Hii! GeeksforGeeks people'){
        heading.innerHTML = 'Bye! GeeksforGeeks people'
    } 
})

myBtn1.addEventListener('click', function(){
    if(heading.innerHTML === 'Bye! GeeksforGeeks people'){
        heading.innerHTML = 'Hii! GeeksforGeeks people'
    }
})