//Header toggle

let menubtn=document.getElementById("MenuBtn")
menubtn.addEventListener("click" ,function(e)
{
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed=new Typed(".auto-input",{
    strings:['Full-Stack Web Developer.','Programmer.'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
});