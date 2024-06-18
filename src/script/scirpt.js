window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 550) {
    document.getElementById("day-night").style.position = "fixed";
    document.getElementById("day-night").style.background = "#17152F";
    document.getElementById("day-night").style.boxShadow = "0 0 1em -.3em #17152F";
  }
  else {
    document.getElementById("day-night").style.position = "absolute";
    document.getElementById("day-night").style.background = "unset";
    document.getElementById("day-night").style.boxShadow = "unset";
  }
}

function darkMode() {
    var main = document.getElementById("main");
    var gradient = document.getElementById("gradient");
    var switcher = document.getElementById("switch");
    
    var sun = document.getElementById("sun");
    var moon = document.getElementById("moon");

    sun.src = 'src/icons/sun02.svg';
    moon.src = 'src/icons/moon02.svg';

    var switch_bg = document.getElementById("switcher");
    var d3ployCustom = document.getElementById("d3ploy-light-custom");
    var win = document.getElementById("win");
    var ten = document.getElementById("ten-k");
    
    var zig_zag = document.getElementById("zig-zag");
    var zig_2 = document.getElementById("zig-2");


    zig_zag.src = 'src/icons/zig-zag-dark.svg';
      zig_2.src = 'src/icons/zig-zag-2-dark.svg';

           switch_bg.style.background = '#C7D2FE';

    var girl = document.getElementById("girl");
    var man_fire = document.getElementById("man-fire");

    var guy = document.getElementById("guy");
    var guyFoundation = document.getElementById("foundation-guy");

    var alien = document.getElementById("alien");
    var alienFoundation = document.getElementById("foundation-alien");



          win.style.background = '#3e1c96';
          guy.src = 'src/icons/ltr-guy-dark.svg';
          guyFoundation.src = 'src/icons/foundation-guy-dark.svg';

          alien.src = 'src/icons/rtl-alien-dark.svg';
          alienFoundation.src = 'src/icons/foundation-alien-dark.svg';

          
          girl.src = 'src/icons/girl-dark.svg';
          man_fire.src = 'src/icons/man-fire-dark.svg';


          d3ployCustom.src = 'src/icons/d3ploy-light-custom.svg';
    switcher.style.marginLeft = '45%';
gradient.style.visibility = 'visible';
gradient.style.opacity = '1';
gradient.style.boxShadow = '0 0 260em 15em #1128f9cb';
main.style.background = '#131220';


const elements = document.querySelectorAll('.dark-text');

elements.forEach(element => {
  element.style.color = 'white';
});

const background = document.querySelectorAll('.dark-bg');

background.forEach(element => {
  element.setAttribute('style', 'background:#17152F !important');
});

const d3ploy = document.querySelectorAll('.d3ploy-light');

d3ploy.forEach(element => {
  element.src = 'src/icons/d3ploy-light.svg';
});

const btn_dark = document.querySelectorAll('.dark-btn');

btn_dark.forEach(element => {
  element.style.background = 'linear-gradient(to right, #1128F9, #6B0DFF)';
  element.style.color = 'white';
});


const pending = document.querySelectorAll('.pending-dark');

pending.forEach(element => {
  element.setAttribute('style', 'background:#201D47 !important');
});

const twitLight = document.querySelectorAll('.twit-light');

twitLight.forEach(element => {
    element.style.color = '#d5d9eb';
  });

  const linear = document.querySelectorAll('.linear');

linear.forEach(element => {
    element.style.background = 'linear-gradient(to right, #d7d8ff, #e2d3fe)';
  });
  
  const lin_grad = document.querySelectorAll('.lin-grad');

  lin_grad.forEach(element => {
      element.style.background = 'linear-gradient(to right, #b1acff, #bea8ff)';
    });

  const puple_col = document.querySelectorAll('.puple-col');

  puple_col.forEach(element => {
      element.style.color = '#3c1eea';
    });

    const puple_bg = document.querySelectorAll('.purple-bg');

    puple_bg.forEach(element => {
        element.style.background = '#3c1eea';
      });

      const new_text = document.querySelectorAll('.dark-text-news');

      new_text.forEach(element => {
          element.style.color = 'white';
        });

        const new_letter = document.querySelectorAll('.newser');

        new_letter.forEach(element => {
          element.setAttribute('style', 'background:#382167 !important');
          });

          const new_bg = document.querySelectorAll('.news-bgs');

          new_bg.forEach(element => {
            element.style.background = '#101828';
            });
  

document.getElementById('switch').onclick = sunlight;
}







function sunlight() {
  
  var main = document.getElementById("main");
  var gradient = document.getElementById("gradient");
  var switcher = document.getElementById("switch");
  var switch_bg = document.getElementById("switcher");
  var d3ployCustom = document.getElementById("d3ploy-light-custom");
  var win = document.getElementById("win");
  var ten = document.getElementById("ten-k");


  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");

  sun.src = 'src/icons/sun.svg';
  moon.src = 'src/icons/moon.svg';
    
  var zig_zag = document.getElementById("zig-zag");
  var zig_2 = document.getElementById("zig-2");


  zig_zag.src = 'src/icons/zig-zag.svg';
    zig_2.src = 'src/icons/zig-zag2.svg';

         switch_bg.style.background = '#e8ebf0';

  var girl = document.getElementById("girl");
  var man_fire = document.getElementById("man-fire");

  var guy = document.getElementById("guy");
  var guyFoundation = document.getElementById("foundation-guy");

  var alien = document.getElementById("alien");
  var alienFoundation = document.getElementById("foundation-alien");
  var news_letter = document.getElementById("news-letter");


  news_letter.style.background = 'white';
        win.style.background = '#ebe9fe';
        guy.src = 'src/icons/ltr-guy.svg';
        guyFoundation.src = 'src/icons/foundation-guy.svg';

        alien.src = 'src/icons/rtl-alien.svg';
        alienFoundation.src = 'src/icons/foundation-alien.svg';

        
        girl.src = 'src/icons/girl.svg';
        man_fire.src = 'src/icons/man-fire.svg';

  d3ployCustom.src = 'src/icons/d3ploy-dark-custom.svg';
  switcher.style.marginLeft = '3px';
gradient.style.visibility = 'hidden';
gradient.style.opacity = '0';
gradient.style.boxShadow = 'unset';
main.style.background = '#F7F9FD';



const elements = document.querySelectorAll('.dark-text');

elements.forEach(element => {
element.style.color = '#293056';
});

const background = document.querySelectorAll('.dark-bg');

background.forEach(element => {
element.style.background = 'white';
});

const d3ploy = document.querySelectorAll('.d3ploy-light');

d3ploy.forEach(element => {
element.src = 'src/icons/d3ploy-dark.svg';
});

const btn_dark = document.querySelectorAll('.dark-btn');

btn_dark.forEach(element => {
element.style.background = '#afcef62e';
element.style.color = '#3538CD';
});


const pending = document.querySelectorAll('.pending-dark');

pending.forEach(element => {
element.setAttribute('style', 'background:#d4d8f6 !important');
});

const twitLight = document.querySelectorAll('.twit-light');

twitLight.forEach(element => {
  element.style.color = '#293056';
});

const linear = document.querySelectorAll('.linear');

linear.forEach(element => {
  element.style.background = '#f8e177';
});

const lin_grad = document.querySelectorAll('.lin-grad');

lin_grad.forEach(element => {
    element.style.background = '#ffbbbb';
  });

const puple_col = document.querySelectorAll('.puple-col');

puple_col.forEach(element => {
    element.style.color = 'red';
  });

  const puple_bg = document.querySelectorAll('.purple-bg');

  puple_bg.forEach(element => {
      element.style.background = 'red';
    });

  
    const new_text = document.querySelectorAll('.dark-text-news');

    new_text.forEach(element => {
        element.style.color = '#7f56d9';
      });


      const new_letter = document.querySelectorAll('.newser');

      new_letter.forEach(element => {
        element.setAttribute('style', 'background:#white !important');
        });

        const new_bg = document.querySelectorAll('.news-bgs');

        new_bg.forEach(element => {
          element.style.background = 'white';
          });

setTimeout(glyt, 0)


    document.getElementById('switch').onclick = darkMode;
}

function glyt() {
      
  document.getElementById("restore-w70").style.color = '#3e4784d5';
  document.getElementById("restore-blue-grey").style.color = '#4e5ba6d5';
}