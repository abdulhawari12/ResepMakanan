const Location = location.href;
  const items = document.querySelectorAll('.items');
  const menuLength = items.length;
  for (let i = 0; i < menuLength; i++) {
    if(items[i].href === Location){
      items[i].classList.add('active');
    }
  }
  const toggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menuitems');
  toggle.addEventListener("click", function(){
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
  })
  
  window.addEventListener('scroll', function(){
    const value = window.scrollY;
    const var1 = document.querySelector('.var1');
    const var2 = document.querySelector('.var2');
    const var3 = document.querySelector('.var3');
    const var4 = document.querySelector('.var4');
    const var5 = document.querySelector('.var5');
    const var6 = document.querySelector('.var6');
    
    var1.style.left = 40 - value / 8 + "px";
    var1.style.top = 150 - value / 8 + "px";
    
    var2.style.top = 130 - value / 8 + "px";
    
    var3.style.top = 50 - value / 8  + "px";
    var3.style.right = 40 - value / 8 + "px";
   
    var4.style.bottom = 40 - value / 12  + "px";
    var4.style.left = 50 - value / 12 + "px";
    
    var5.style.bottom = 60 - value / 8  + "px";
    var5.style.right = 30 - value / 8 + "px";
   
    var6.style.bottom = 50 - value / 15  + "px";
  })