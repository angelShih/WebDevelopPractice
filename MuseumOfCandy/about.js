document.addEventListener('scroll',function(){ 
    const mainNav = document.querySelector('#mainNavbar');
    if(parseInt(this.documentElement.scrollTop)>parseInt(mainNav.scrollHeight)){
        mainNav.classList.add('scrolled');
    }else{
        mainNav.classList.remove('scrolled');
    }
})