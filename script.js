const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});
  

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.getElementById('mahm');
    const video2 = document.getElementById('habibn');

    video1.addEventListener('ended', function() {
        this.controls = false; // إخفاء عناصر التحكم عند انتهاء الفيديو الأول
    });

    video2.addEventListener('ended', function() {
        this.controls = false; // إخفاء عناصر التحكم عند انتهاء الفيديو الثاني
    });
});