const subnames = document.querySelectorAll('.menu_name');
const submenu = document.querySelectorAll('.submenu');

submenu.forEach(function(menu){
    let name = menu.parentElement;
    name.addEventListener('mouseover',function(){
            menu.classList.add('over');
    })
    name.addEventListener('mouseout',function(){
        menu.classList.remove('over');
    })  
});


const closeBtn = document.querySelector('.close');
const all = document.querySelector('.allmenu');
const bugger = document.querySelector('.btn_allmenu');

bugger.addEventListener('click',function(){
    all.classList.add('on2');
})

closeBtn.addEventListener('click',function(){
    all.classList.remove('on2');
})

const titles = document.querySelectorAll('.news_h3');

titles.forEach(function(title){
    title.addEventListener('click',function(e){
        let ta = e.currentTarget;
        ta.classList.add('active')
        $('.news_h3').not(ta).removeClass('active');
    })
});

const snstop = document.querySelector('.sns_top_txt');

    snstop.addEventListener('mouseover',function(){
        snstop.classList.add('sns_on')
    })
    snstop.addEventListener('mouseout',function(){
        snstop.classList.remove('sns_on');
    })

const snstxt = document.querySelectorAll('.sns_txt>p');

snstxt.forEach(function(txt){
    txt.addEventListener('mouseover',function(){
        txt.classList.add('active2');
    })
    txt.addEventListener('mouseout',function(){
        txt.classList.remove('active2');
    })
})



let rel = document.querySelector(".relate_site");
let relsub = document.querySelector(".relate_submenu");


rel.addEventListener('click',function(){
    let actsub = document.querySelector('.relate_site.active3');

    if(this == actsub){
        this.classList.remove('active3');
        relsub.classList.remove("on");
    }else if(this == rel){
        this.classList.add('active3');
        relsub.classList.add("on");
        
    }   
})


const scrollBtns = document.querySelectorAll('.scroll_btn');

scrollBtns.forEach(function(scrollBtn){
    scrollBtn.addEventListener('click',function(e){
        let t = e.currentTarget; 

        if(t == scrollBtns[0]){

            let location = document.querySelector('#main').offsetTop;
            window.scrollTo({top: location, behavior: 'smooth'});
            
            if(location == 0){
                scrollBtns[0].classList.add('scroll_active');
                $('.scroll_btn').not(t).removeClass('scroll_active2');
            }     

        }   
        if(t == scrollBtns[1]){

            let location = document.querySelector('#section01').offsetTop;
            window.scrollTo({top: location, behavior: 'smooth'});

            t.classList.add('scroll_active2');

            if(location == 1028){
                scrollBtns[0].classList.remove('scroll_active');
                $('.scroll_btn').not(t).removeClass('scroll_active2');
            }     
        }
        if(t == scrollBtns[2]){
            let location = document.querySelector('#section02').offsetTop;
            window.scrollTo({top: location, behavior: 'smooth'});
    
            t.classList.add('scroll_active2');
            
            if(location == 2203){
                scrollBtns[0].classList.remove('scroll_active');
                $('.scroll_btn').not(t).removeClass('scroll_active2');
            }     
        } 
        if(t == scrollBtns[3]){
            let location = document.querySelector('#section03').offsetTop;
            window.scrollTo({top: location, behavior: 'smooth'});
            
            t.classList.add('scroll_active2');

            if(location == 3303){
                scrollBtns[0].classList.remove('scroll_active');
                $('.scroll_btn').not(t).removeClass('scroll_active2');
            }     
        } 
        if(t == scrollBtns[4]){
            let location = document.querySelector('#section04').offsetTop;
            window.scrollTo({top: location, behavior: 'smooth'});
            t.classList.add('scroll_active2');
            
            if(location == 4283){
                scrollBtns[0].classList.remove('scroll_active');
                $('.scroll_btn').not(scrollY >= 950).removeClass('scroll_active2');
            }     
        }

    })
})

window.addEventListener("scroll",function(){
    let scrollY = this.scrollY;
        console.log(scrollY)
    if(scrollY < 950){
        scrollBtns[0].classList.add('scroll_active');
        scrollBtns[1].classList.remove('scroll_active2');
        scrollBtns[2].classList.remove('scroll_active2');
        scrollBtns[3].classList.remove('scroll_active2');
        scrollBtns[4].classList.remove('scroll_active2');
    } 
    
    if(scrollY >= 950){
        scrollBtns[0].classList.remove('scroll_active');
        scrollBtns[1].classList.add('scroll_active2');
        scrollBtns[2].classList.remove('scroll_active2');
        scrollBtns[3].classList.remove('scroll_active2');
        scrollBtns[4].classList.remove('scroll_active2');
    }     
    if(scrollY >= 2000){
        scrollBtns[0].classList.remove('scroll_active');
        scrollBtns[1].classList.remove('scroll_active2');
        scrollBtns[2].classList.add('scroll_active2');
        scrollBtns[3].classList.remove('scroll_active2');
        scrollBtns[4].classList.remove('scroll_active2');
    }    
    if(scrollY >= 3100){
        scrollBtns[0].classList.remove('scroll_active');
        scrollBtns[1].classList.remove('scroll_active2');
        scrollBtns[2].classList.remove('scroll_active2');
        scrollBtns[3].classList.add('scroll_active2');
        scrollBtns[4].classList.remove('scroll_active2');
    }    
    if(scrollY >= 4283){
        scrollBtns[0].classList.remove('scroll_active');
        scrollBtns[1].classList.remove('scroll_active2');
        scrollBtns[2].classList.remove('scroll_active2');
        scrollBtns[3].classList.remove('scroll_active2');
        scrollBtns[4].classList.add('scroll_active2');
    } 

});





const bluedot = document.querySelector('.bluedot');
const l_bluedot = document.querySelector('.layer_bluedot');
const c_btn = document.querySelector('.btn_close');
const items = document.querySelectorAll('.q_i');
let i = 0;



bluedot.addEventListener('click',function(){
    
    l_bluedot.classList.add('show');
    items.forEach(function(item){
        item.classList.remove('active3')
     i=0;
    })
    // activeFunc();
    addActive;
})
    
c_btn.addEventListener('click',function(){
    l_bluedot.classList.remove('show');
    // items.classList.remove('active3');
    // items[i].classList.remove('active3');
   
})    

let addActive = setInterval(activeFunc, 300);
// console.log(items[3])

function activeFunc(){
    // console.log(items.length)
    if(i < 5){
        items[i].classList.add('active3');
        i++;
    }
}
    
let re= document.querySelector(".reservation");
let resub = document.querySelector(".reservation_submenu");


re.addEventListener('click',function(){
    let actsub = document.querySelector('.reservation.active3');
    if(this == actsub){
        this.classList.remove('active3');
        resub.classList.remove('active4');
    }else if(this == re){
        this.classList.add('active3');   
        resub.classList.add('active4');
    }   
})




const balls = document.querySelectorAll('.signal_ball');

balls.forEach(function(ball){
    ball.addEventListener('click',function(){
        let location = document.querySelector('.reservation').offsetTop;
        window.scrollTo({top: location-450, behavior: 'smooth'});
    })
})


const reli = document.querySelectorAll('.re_li');

reli.forEach(function(li){
    li.addEventListener('click',function(e){
        let ta = e.currentTarget;
        console.log(ta)
        ta.classList.add('ul_on');
        $('.re_li').not(ta).removeClass('ul_on');
    })
})

let re2s= document.querySelectorAll(".reservation2");
let resub2 = document.querySelector(".reservation_submenu2");


re2s.forEach(function(re2){
    re2.addEventListener('click',function(){
        let actsub = document.querySelector('.reservation2.active3');
        var next = this.nextElementSibling ;
        console.log(next);
        if(this == actsub){
            this.classList.remove('active3');
            next.classList.remove('active5');
        }else if(this == re2){
            this.classList.add('active3'); 
            next.classList.add('active5');  
        }   
    })    
})

let rall = document.querySelector('.re_li.ul_on')
let rall2 = document.querySelector('.re_li.r4')
let rall3 = document.querySelector('.re_li.r5')
let rall4 = document.querySelector('.re_li.r6')
let r1 = document.querySelector('.r1');
let r2 = document.querySelector('.r2');
let r3 = document.querySelector('.r3');
let r2_1 = document.querySelector('.r2_1');
let r2_2 = document.querySelector('.r2_2');
let r2_3 = document.querySelector('.r2_3');

rall.addEventListener('click',function(){
    $('.reservation2').removeClass('r_hide');
})
rall2.addEventListener('click',function(){
    $('.reservation2').removeClass('r_hide');
})
rall3.addEventListener('click',function(){
    $('.reservation2').removeClass('r_hide');
})
rall4.addEventListener('click',function(){
    $('.reservation2').removeClass('r_hide');
})
r1.addEventListener('click',function(){
    $('.reservation2').not('r1').removeClass('r_hide');
    r2_2.classList.add('r_hide');
    r2_3.classList.add('r_hide');
})
r2.addEventListener('click',function(){
    $('.reservation2').not('r2').removeClass('r_hide');
    r2_1.classList.add('r_hide');
    r2_3.classList.add('r_hide');
})
r3.addEventListener('click',function(){
    $('.reservation2').not('r3').removeClass('r_hide');
    r2_1.classList.add('r_hide');
    r2_2.classList.add('r_hide');
})

