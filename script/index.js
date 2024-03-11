/* nav 스크롤 */
window.addEventListener("scroll", function () {
    var wrap_header_scroll = document.querySelector("header");
    wrap_header_scroll.classList.toggle("sticky", window.scrollY > 0);
});

/*  */



/* 전시 탭 변환 */
/* 전체 */
const display_tap_btn1 = document.querySelector(".display_tap_btn1")
const display_tap_btn2 = document.querySelector(".display_tap_btn2")
const display_tap_btn3 = document.querySelector(".display_tap_btn3")
const display_tap_btn4 = document.querySelector(".display_tap_btn4")
const display_tap_btn5 = document.querySelector(".display_tap_btn5")
const display_tap_btn6 = document.querySelector(".display_tap_btn6")


/* 각각 탭 스와이퍼 컨테이너 컨테이너 */
const display_image1 = document.querySelector(".display_image1")
const display_image2 = document.querySelector(".display_image2")
const display_image3 = document.querySelector(".display_image3")
const display_image4 = document.querySelector(".display_image4")
const display_image5 = document.querySelector(".display_image5")
const display_image6 = document.querySelector(".display_image6")

display_image2.style.display = "none"
display_image3.style.display = "none"
display_image4.style.display = "none"
display_image5.style.display = "none"
display_image6.style.display = "none"
/* charging_tap[0].parentElement.classList.add("active") */

/* display_tap_btn1.parentElement.classList.add("active") */

/* display_tap_btn1 - > 전체  */
display_tap_btn1.addEventListener("click", () => {
    display_image1.style.display = "block";
    display_image2.style.display = "none";
    display_image3.style.display = "none";
    display_image4.style.display = "none";
    display_image5.style.display = "none";
    display_image6.style.display = "none";
    event.preventDefault();
    console.log("성공?")
});

/* display_tap_btn2 - 서울 */
display_tap_btn2.addEventListener("click", () => {
    display_image1.style.display = "none";
    display_image2.style.display = "block"
    display_image3.style.display = "none"
    display_image4.style.display = "none"
    display_image5.style.display = "none"
    display_image6.style.display = "none"
    event.preventDefault();
    console.log("성공?")
});

/* display_tap_btn3 - 과천 -  */
display_tap_btn3.addEventListener("click", () => {
    display_image1.style.display = "none";
    display_image2.style.display = "none"
    display_image3.style.display = "block"
    display_image4.style.display = "none"
    display_image5.style.display = "none"
    display_image6.style.display = "none"
    event.preventDefault();
    console.log("성공?")
});

/* display_tap_btn4 - 덕수궁 -  */
display_tap_btn4.addEventListener("click", () => {
    display_image1.style.display = "none";
    display_image2.style.display = "none"
    display_image3.style.display = "none"
    display_image4.style.display = "block"
    display_image5.style.display = "none"
    display_image6.style.display = "none"
    event.preventDefault();
});

/* display_tap_btn5 - 청주 -  */
display_tap_btn5.addEventListener("click", () => {
    display_image1.style.display = "none";
    display_image2.style.display = "none"
    display_image3.style.display = "none"
    display_image4.style.display = "none"
    display_image5.style.display = "block"
    display_image6.style.display = "none"
    event.preventDefault();
    console.log("성공?")
});

/* display_tap_btn6 -어린이미술관-  */
display_tap_btn6.addEventListener("click", () => {
    display_image1.style.display = "none";
    display_image2.style.display = "none"
    display_image3.style.display = "none"
    display_image4.style.display = "none"
    display_image5.style.display = "none"
    display_image6.style.display = "block"
    event.preventDefault();
    console.log("성공?")
});


/* 
Overall,
Cheongju
Children's Art Museum,
Deoksugung Palace,
Gwacheon,
Seoul
*/


/* 전시 a탭 클릭시 색 변환 */
/* display_btn -> a 탭 전체 */
const display_btn = document.querySelectorAll(".display_tap")

/* 초기화 -> 탭을 누르지 않은 a */
const display_btn_reset = () => {
    for (let i of display_btn) {
        i.classList.remove
            ("display_tap_style")
        i.style.color = "initial";
        i.style.border = "initial";
    }

    for (let i of display_btn) {
        i.style.color = "#949494"
    }
}
display_btn_reset()
/* 탭 클릭 시  a*/
display_btn.forEach((t, i) => {
    t.addEventListener("click", (e) => {
        e.preventDefault()
        display_btn_reset()
        t.style.color = "#000"
        t.style.borderBottom = "1px solid #000"

    })
})

/* 전시 스와이퍼 */

/* 전시 전체 */
const my_swiper_overall = new Swiper('.display_image1', {
    /*     autoplay:{delay:5000}, */
    /* spaceBetween:10, // 슬라이드 여백 */
    /* centeredSlides:true, */ // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    /*     pagination:{
        el:'.swiper-pagination'
    }, */
    slidesPerView: 4, //슬라이드 한번에 1개씩 보이기
    loop: true,
    navigation: {
        nextEl: '.display_image1 .swiper-button-next',
        prevEl: '.display_image1 .swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4, //레이아웃 2열
        },

        940: {
            slidesPerView: 4,
        },

        768: {
            slidesPerView: 1,
        },
    },
})

// /* 페이지 새로고침????? 실패 */
// function updateSlidesPerView() {

//     // 미디어 쿼리를 사용하여 화면 너비에 따라 slidesPerView를 변경
//     if (window.matchMedia('(max-width: 940px)').matches) {
//         my_swiper_overall.params.slidesPerView = 1;
//     } else {
//         my_swiper_collection.params.slidesPerView = 4;
//     }
//     my_swiper_collection.update(); // Swiper 업데이트
//     }
//     // 페이지 로드될 때 업데이트 실행
//     updateSlidesPerView();

//     // 창 크기 변경 시 slidesPerView 업데이트
//     window.addEventListener('resize', my_swiper_overall);



/* 전시 서울 */
const my_swiper_seoul = new Swiper('.display_seoul_container', {
    slidesPerView: 4, //슬라이드 한번에 1개씩 보이기
    navigation: {
        nextEl: '.display_seoul_container .swiper-button-next',
        prevEl: '.display_seoul_container .swiper-button-prev',
    },
})

/* 전시 과천 */
const my_swiper_gwacheon = new Swiper('.display_gwacheon_container', {
    slidesPerView: 4, //슬라이드 한번에 1개씩 보이기
    navigation: {
        nextEl: '.display_gwacheon_container .swiper-button-next',
        prevEl: '.display_gwacheon_container .swiper-button-prev',
    },
})

/* 전시 덕수궁 */
const my_swiper_deoksugung = new Swiper('.display_deoksugung_container', {
    slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
    loop: true,
    navigation: {
        nextEl: '.display_deoksugung_container .swiper-button-next',
        prevEl: '.display_deoksugung_container .swiper-button-prev',
    },
})

/* 전시 청주 */
const my_swiper_cheongju = new Swiper('.display_cheongju_container', {
    slidesPerView: 4, //슬라이드 한번에 1개씩 보이기
    loop: true,
    navigation: {
        nextEl: '.display_cheongju_container .swiper-button-next',
        prevEl: '.display_cheongju_container .swiper-button-prev',
    },
})

/* 전시 어린이미술관 */
const my_swiper_children = new Swiper('.display_children_container', {
    slidesPerView: 1, //슬라이드 한번에 1개씩 보이기
    loop: true,
    navigation: {
        nextEl: '.display_children_container .swiper-button-next',
        prevEl: '.display_children_container .swiper-button-prev',
    },
})

/* 전시 끝 ------------------------------------------------------------------------------- */

/* 소장품 */
const my_swiper_collection = new Swiper('.collection_container', {
    slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
    loop: true,
    navigation: {
        nextEl: '.collection_container .swiper-button-next',
        prevEl: '.collection_container .swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3, //레이아웃 2열
        },

        940: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 1,
        },
    },
})

// // 미디어 쿼리를 사용하여 화면 너비에 따라 slidesPerView를 변경
// if (window.matchMedia('(max-width: 940px)').matches) {
//     my_swiper_collection.params.slidesPerView = 1;
//     my_swiper_collection.update(); // Swiper 업데이트

// }
// // 창 크기 변경 시 slidesPerView 업데이트
// window.addEventListener('resize', my_swiper_collection);




/* 뉴스레터 */
const my_swiper_news = new Swiper('.news_container', {
    slidesPerView: 3, //슬라이드 한번에 1개씩 보이기
    loop: true,
    navigation: {
        nextEl: '.news_container .swiper-button-next',
        prevEl: '.news_container .swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 3, //레이아웃 2열
        },

        940: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 1,
        },
    },
})

