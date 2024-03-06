/* 전시 탭 변환 */
/* 전체 */
display_tap_btn1 = document.querySelector(".display_tap_btn1")
display_tap_btn2 = document.querySelector(".display_tap_btn2")
display_tap_btn3 = document.querySelector(".display_tap_btn3")
display_tap_btn4 = document.querySelector(".display_tap_btn4")
display_tap_btn5 = document.querySelector(".display_tap_btn5")
display_tap_btn6 = document.querySelector(".display_tap_btn6")
console.log(display_tap_btn1,display_tap_btn2,display_tap_btn3,display_tap_btn4)

display_image1 = document.querySelector(".display_image1")
display_image2 = document.querySelector(".display_image2")
display_image3 = document.querySelector(".display_image3")
display_image4 = document.querySelector(".display_image4")
display_image5 = document.querySelector(".display_image5")
display_image6 = document.querySelector(".display_image6")
console.log(display_image1)

display_image2.style.display = "none"

/* display_tap_btn2 - > 서울  */
display_tap_btn1.addEventListener("click", (event)=> {
    event.preventDefault();
    display_image1.style.display = "flex";
    display_image2.style.display = "none";
    display_image3.style.display = "none";
    display_image4.style.display = "none";
    display_image5.style.display = "none";
    display_image6.style.display = "none";
})


display_tap_btn2.addEventListener("click", (event)=>{
    event.preventDefault();
    display_image1.style.display = "none";
    display_image2.style.display = "flex";
    display_image3.style.display = "none";
    display_image4.style.display = "none";
    display_image5.style.display = "none";
    display_image6.style.display = "none";
})


/* 전시 쪽 스와이프 */
const my_swiper = new Swiper('.display_btm_container', { 
/*     autoplay:{delay:5000}, */
    slidesPerView: 4, //슬라이드 한번에 1개씩 보이기
    /* spaceBetween:10, // 슬라이드 여백 */
    /* centeredSlides:true, */ // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
/*     pagination:{
        el:'.swiper-pagination'
    }, */
    navigation:{
        nextEl:'.display_btm_container .swiper-button-next',
        prevEl:'.display_btm_container .swiper-button-prev',
    },
/*    breakpoints:{
        1240: {
            slidesPerView: 1.5,
        },
    }, */
    
})



/* 소장품 */
/* 전시 쪽 스와이프 */
const my_swiper_collection = new Swiper('.collection_container', { 
    /*     autoplay:{delay:5000}, */
        slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
        /* spaceBetween:20,  // 슬라이드 여백
        /* centeredSlides:true, */ // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
        loop:true,
    /*     pagination:{
            el:'.swiper-pagination'
        }, */
        navigation:{
            nextEl:'.collection_container .swiper-button-next',
            prevEl:'.collection_container .swiper-button-prev',
        }    
    })

/* 뉴스레터 */
/* 소장품 */
/*  display_btm_container */
/* 전시 쪽 스와이프 */
const my_swiper_news = new Swiper('.news_container', { 
    /*     autoplay:{delay:5000}, */
        slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
        /* spaceBetween:30, */ // 슬라이드 여백
        /* centeredSlides:true, */ // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
        loop:true,
    /*     pagination:{
            el:'.swiper-pagination'
        }, */
        navigation:{
            nextEl:'.news_container .swiper-button-next',
            prevEl:'.news_container .swiper-button-prev',
        }    
    })


