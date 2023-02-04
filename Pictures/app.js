let poster = document.querySelector('.poster');
let imgs = document.querySelectorAll('.photo');

for (let img of imgs){

    img.addEventListener('click', function(){
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active')
        let src  = this.src;
        poster.src = src;
    })
}