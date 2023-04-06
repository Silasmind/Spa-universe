const bgImage= window.document.querySelector('body')



function setUniverseBackground (){
   
   bgImage.classList.add('universebg')
   bgImage.classList.remove('homebg')
   bgImage.classList.remove('explorebg')
    }
    function sethomeBackground (){
   
   bgImage.classList.add('homebg')
   bgImage.classList.remove('universebg')
   bgImage.classList.remove('explorebg')
    }
    function setExploreBackground (){
   
   bgImage.classList.add('explorebg')
   bgImage.classList.remove('universebg')
   bgImage.classList.remove('homebg')
    }
    
const routes={
"/":"/pages/home.html",
"/about":"/pages/about.html",
"/explore":"/pages/explore.html"
}

function route(event){
   event= event|| window.event
   event.preventDefault()
   window.history.pushState({},"",event.target.href)

handle()
}

function handle(){

const {pathname}=window.location
const route= routes[pathname] || routes['/']

if(pathname ==='/explore'){
   setExploreBackground()
}else if(pathname === '/about'){
   setUniverseBackground()
}else{
   sethomeBackground()
}

fetch(route)
.then(data =>data.text())
.then(html =>{
document.querySelector('#app').innerHTML=html}) 

}

handle()
