let moon = document.getElementById('moon');
if (localStorage.getItem('mode')!=null) {
    document.body.classList.add('dark-theme')
    moon.src='imagesC/sun.png'
}
moon.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        moon.src='imagesC/sun.png'
        localStorage.setItem('mode','dark-them')
    }else{
        moon.src='imagesC/moon.png'
        localStorage.clear('mode')
    }
    console.log(document.body.classList)
})
