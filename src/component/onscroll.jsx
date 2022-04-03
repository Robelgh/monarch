export const OnscrollDown = () => {

    function handleScroll() {
    
        let navbar=document.getElementById("navbar")
        let lastScrollY = window.pageYOffset;
     
        if(window.scrollY>10)
        {
          navbar.classList.add('bgcolor')
        }
        else
        {
          navbar.classList.remove('bgcolor') 
        }
    }
    window.addEventListener("scroll", handleScroll);
    

}





