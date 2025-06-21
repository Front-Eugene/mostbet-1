const table_links = document.querySelectorAll(".table_link")

for ( let link of table_links ) {
    link.addEventListener('click', function(e){
        e.preventDefault()

        const blockID = this.getAttribute('data-href').replace('#', '')

        window.scrollTo({
            behavior: 'smooth',
            top: document.getElementById(blockID).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 70,
         })
    })
}



document.querySelector('.scrollTop').addEventListener('click', () => 
    window.scrollTo({ top: 0, behavior: 'smooth' }))

function openCloseMenu(e){
    e.preventDefault()
    document.getElementById('mobileMenu').toggleAttribute('hidden')
    document.querySelector('.overlay').toggleAttribute('hidden')
}

document.querySelector('.burger').addEventListener('click', openCloseMenu)
document.querySelector('.close').addEventListener('click', openCloseMenu)
document.querySelector('.overlay').addEventListener('click', openCloseMenu)


const copyButton = document.getElementById('copyButton');
for (let b of document.querySelectorAll('button:not(.btn-banner)')) {
    if (b !== copyButton) {
        b.addEventListener('click', function() {
            let goal = this.getAttribute('data-goal');
            console.log(`goal ${goal} reached`);
            let link = 'https://sublinkdir.com/click.php?key=4ov1pz9n2nxb3mqs36mb'
            let split = this.getAttribute('data-split');
            location.href = `${link}&split=${split}`;
        });
    }
}

const handleScroll = () => {
    if ( window.scrollY > 1000) {
        document.querySelector('.scrollTop').style.opacity = '1';
    } else {
        document.querySelector('.scrollTop').style.opacity = '0';
    }
}

window.addEventListener('scroll', handleScroll);

setTimeout( function(){
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(96795189, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });

    let thirdScroll = halfScroll = fullScroll = false

    window.onscroll = function() {
  
        let pageY = window.scrollY
        let innerHeight = document.documentElement.scrollHeight;
        let delta = innerHeight / pageY;
      
        if( delta >= 2 && thirdScroll == false ){
          thirdScroll = true
          ym(96795189,'reachGoal','partsScrollGoal1')
        }
      
        if( delta <= 2 && delta >= 1.5 && halfScroll == false ){
          halfScroll = true
          ym(96795189,'reachGoal','partsScrollGoal2')
        }
      
        if( delta <= 1.5 && fullScroll == false ){
          fullScroll = true
          ym(96795189,'reachGoal','partsScrollGoal3')
        }
      
      }

}, 3000 )


// Cupon
document.getElementById('copyButton').addEventListener('click', function() {
    const promoCodeText = document.getElementById('promoCode').innerText;
    const textArea = document.createElement('textarea');
    textArea.value = promoCodeText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  });
  