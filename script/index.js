/*  display_btm_container */
/* 전시 쪽 스와이프 */
const my_swiper = new Swiper('.display_full_container', { 
    autoplay:{delay:3000},
    slidesPerView: 5, //슬라이드 한번에 1개씩 보이기
    spaceBetween:10, // 슬라이드 여백
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
/*     pagination:{
        el:'.swiper-pagination'
    }, */
    navigation:{
        nextEl:'.display_full_container .swiper-button-next',
        prevEl:'.display_full_container .swiper-button-prev',
    },
    breakpoints:{
        1240: {
            slidesPerView: 1.5,
        },
    },
    
})

const news_swiper = new Swiper('.news_container', { 
    autoplay:{delay:3000},
    slidesPerView: 2, //슬라이드 한번에 1개씩 보이기
    spaceBetween:10, // 슬라이드 여백
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
/*     pagination:{
        el:'.swiper-pagination'
    }, */
    navigation:{
        nextEl:'.news_container .swiper-button-next',
        prevEl:'.news_container .swiper-button-prev',
    },
    breakpoints:{
        1240: {
            slidesPerView: 1.5,
        },
    },
    
})