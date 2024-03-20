let moon = document.getElementById('moon');
moon.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        moon.src='imagesC/sun.png'
    }else{
        moon.src='imagesC/moon.png'
    }
})