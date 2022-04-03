export const CloseNavmenu = () => {

        let list=document.getElementById("list")
            window.addEventListener("click", (e)=>
            {
                
                if(e.target.className != 'bi bi-list toogle-icon')
                {
                list.classList.remove('show')
                list.classList.add('collapse')
                }
                else
                {
                console.log(e.target.className === 'bi bi-list toogle-icon')
                console.log(list.classList.contains("collapse"))
                if(list.classList.contains("collapse"))
                {
                    list.classList.add('show')
                    list.classList.remove('collapse')
                }
                else
                {
                    console.log("try to collapse")
                    list.classList.add('collapse')
                    list.classList.remove('show')
                }
                }
            }
    )
    }

    
    

