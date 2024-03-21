/* const main_header = document.querySelector(".index_header") */

/* 스크롤 내릴 때 nav탭 보이게 */
window.addEventListener("scroll", function () {
    const wrap_header_scroll = document.querySelector(".index_header");
    wrap_header_scroll.classList.toggle("sticky", window.scrollY > 0);
});

/* 모바일 클릭 시 숨겨진 탭 열림-------------------------------------- */
// Get all elements with class 'mob_plus_a'
const mobPlusAs = document.querySelectorAll('.mob_plus_a');

// Loop through each element and attach click event listener
mobPlusAs.forEach(mobPlusA => {
    mobPlusA.addEventListener('click', toggleResponLnb);
});

// Function to toggle respon_lnb visibility
function toggleResponLnb(event) {
    // Find the closest respon_gnb_tab parent
    const responGnbTab = event.target.closest('.respon_gnb_tab');

    // Find the next sibling element with class 'respon_lnb'
    const responLnb = responGnbTab.nextElementSibling;

    // Toggle the display style of responLnb
    if (responLnb.style.display === 'none') {
        responLnb.style.display = 'block';
    } else {
        responLnb.style.display = 'none';
    }

}


// /* 부드럽게 열림. */
// // Function to toggle respon_lnb visibility
// function toggleResponLnb(event) {
//     // Find the closest respon_gnb_tab parent
//     const responGnbTab = event.target.closest('.respon_gnb_tab');

//     // Find the next sibling element with class 'respon_lnb'
//     const responLnb = responGnbTab.nextElementSibling;

//     // Toggle the active class of responLnb
//     responLnb.classList.toggle('active');
// }

/* 모바일 클릭 시 숨겨진 탭 열림----------------------------------------- */

/* 
const display_lnb = document.querySelector(".display_lnb")
const art_view_a = document.querySelector(".art_view_a") */

// /* 일단 보류 0313 */
// /* 처음 들어올 때 글자 컬러 전시에 전체 #000 */
// window.onload = function() {
//     // 페이지로 처음 들어올 떄  .lnb 요소를 숨김
//     document.querySelectorAll('.lnb').forEach(lnb => lnb.style.display = 'none');
//    /*  art_view_a_black.style.color = "#000"; */
//    /*  art_view_a.style.color = "#000"; */

// };

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
});


/* 
Overall,
Cheongju
Children's Art Museum,
Deoksugung Palace,
Gwacheon,
Seoul
*/

/* 무지개색 배너 클릭 시 위로 x  */

const member_bnr = document.querySelector(".member_bnr")

member_bnr.addEventListener("click", (event) => {
    event.preventDefault();
})

window.onload = function () {
    display_tap_btn1.style.color = "#000"
}




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

/* 전시 탭에 전체 초기 스타일 지정 */
// display_tap_btn1 초기 스타일 적용
display_tap_btn1.style.color = "#000";
display_tap_btn1.style.borderBottom = "1px solid #000";

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

        972: {
            slidesPerView: 4,
        },

        0: {
            slidesPerView: 1,
        },
    },
})


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

/* display_bnr_list */
const display_overall_ = document.querySelector(".display_tap_btn1")




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

        972: {
            slidesPerView: 3,
        },

        0: {
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

        972: {
            slidesPerView: 3,
        },

        0: {
            slidesPerView: 1,
        },
    },
})




/* 실험! 0314 mob창 열기 */
// JavaScript 코드
const close_button = document.querySelector(".mob_close_button")
const mob_wrap = document.querySelector(".mob_wrap")

document.addEventListener('DOMContentLoaded', function () {
    // 메뉴 아이콘을 클릭했을 때의 동작 설정
    document.querySelector('.index_mob_menu').addEventListener('click', function () {
        // mob_wrap 요소에 show 클래스를 추가하여 보이게 만듬.
        document.querySelector('.mob_wrap').classList.toggle('show');
    });
});



console.log(close_button, mob_wrap)

// close_button을 클릭했을 때의 동작 설정
close_button.addEventListener("click", () => {
    // mob_wrap 요소의 show 클래스를 제거하여 창을 닫기.
    mob_wrap.classList.remove("show");
});

function toggle_mob_wrap() {
    document.querySelector(".mob_wrap").classList.toggle("show");
}

/* close 버튼을 누르면 스크롤바가 다시 생기고 mob_menu를 누르면 스크롤바가 없어진다. */
/* --- */

const wrap = document.querySelector(".wrap")
const index_mob_menu = document.querySelector(".index_mob_menu")
const body = document.querySelector("body")

/* close_button.addEventListener("click",()=>{
    wrap.style.overflowY="hidden"
    console.log("성공??????????")
})
 */

/* index_mob_menu.addEventListener("click",()=>{
    body.style.overflowY = "hidden";
    console.log("성공😊!!!")
})  */

let isScrollHidden = false;

index_mob_menu.addEventListener("click", () => {
    body.style.overflowY = "hidden";
    isScrollHidden = true;
    console.log("성공😊!!!");
});

close_button.addEventListener("click", () => {
    if (isScrollHidden) {
        body.style.overflowY = "";
        isScrollHidden = false;
    }
});



/* 이제 여기서 close_button을 클릭하면 hidden으로 숨겨졌던게 다시 나오게 if문으로 작성하면?

 */


/* ------------------------------ */
/* 실험! */
// 브라우저 창의 크기가 변경될 때마다 실행되는 함수
window.addEventListener('resize', () => {
    // 현재 브라우저 창의 너비를 확인합니다.
    const window_width = window.innerWidth;
    /* 940px 가 지나면 닫히기 */
    /* 940px 이상이면 window_width가 remove*/
    if (window_width > 940) {
        document.querySelector('.mob_wrap').classList.remove("show");
    }

});

/* 실험! 0314 끝 */
