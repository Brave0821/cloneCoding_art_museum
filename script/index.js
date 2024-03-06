/*  display_btm_container */
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
/*  display_btm_container */
/* 전시 쪽 스와이프 */
const my_swiper_collection = new Swiper('.collection_container', { 
    /*     autoplay:{delay:5000}, */
        slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
        spaceBetween:30, // 슬라이드 여백
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
      /*   spaceBetween:30, // 슬라이드 여백 */
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


