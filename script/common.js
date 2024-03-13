/* 스크롤 관련해서 */
/* 스크롤 창 내릴 떄 nav 변형 */

window.addEventListener("scroll", function () {

    const index_header = document.querySelector(".index_header")
    const header_nav = document.querySelector(".index_header > nav")
    const header_logo = document.querySelector(".header_first_top")

    const header_first_top = document.querySelector(".header_first_top img")
    const first_top_right = document.querySelector(".first_top_right")
    console.log(header_first_top)

    if (window.scrollY > 0) {
        header_first_top.style.width = '209px'; 
        //headerFirstTop.style.fontSize = '14px'; 
        first_top_right.style.display = "none"
       /*  header_nav.style.justifyContent = "center" */
        header_logo.style.display = "none"
        
} else {
        header_first_top.style.width = '309px'; 
        first_top_right.style.display = "block"
        /* header_nav.style.justifyContent = "" */
        header_logo.style.display = "flex"
        // headerFirstTop.style.fontSize = '16px';
    }
});

/* -------------------------------------------스크롤-nav이벤트끝------------------------------------------ */

/* ---------------------------------관람 & 참여 a click - > ↓ div 열리게.------------------------------ */

/* art_view_lnb.style.display = "none"  */
const art_view_a = document.querySelector(".art_view_a")
const display_a = document.querySelector(".display_a")
const education_a = document.querySelector(".education_a")
const collection_a = document.querySelector(".collection_a")
const art_research_a = document.querySelector(".art_research_a")
const digital_a = document.querySelector(".digital_a")
const exhibition_a = document.querySelector(".exhibition_a")

/* 관람 & 참여 ~ div */
/* (".art_view_lnb ul") */
const art_view_lnb = document.querySelector(".art_view_lnb")
const display_lnb = document.querySelector(".display_lnb")
const education_lnb = document.querySelector(".education_lnb")
const collection_lnb = document.querySelector(".collection_lnb")
const art_research_lnb = document.querySelector(".art_research_lnb")
const digital_lnb = document.querySelector(".digital_lnb")
const exhibition_lnb = document.querySelector(".exhibition_lnb")

/* 같은게 아니니까 각  */
/* title_tap_btn.forEach((t,i)=>{})*/

/* 처음 들어올 때 글자 컬러 nav에 관람·참여 */
window.onload = function() {
    // 페이지로 처음 들어올 떄  .lnb 요소를 숨김
    document.querySelectorAll('.lnb').forEach(lnb => lnb.style.display = 'none');
    art_view_a_black.style.color = "#000";
/*     display_tap_btn1.style.color = "#000"; */

};


/* 실험! 0309  index처럼하면 너무 길어져서 시도 */
const tabs = document.querySelectorAll('.gnb li');
/* 해더 탭 마우스 올렸을 때 바뀌게 */
tabs.forEach(tab => { /* mousemove - */
    tab.addEventListener('mouseover', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.lnb').forEach(lnb => lnb.style.display = 'none');
        const lnb = tab.querySelector('.lnb');
        if (lnb) {
            lnb.style.display = 'block';
        }
    });
    
 
    // 'mouseleave' 이벤트 추가
    /* nav에 마우스를 떄면 숨긴다. */
    tab.addEventListener('mouseleave', () => {
        document.querySelectorAll('.lnb').forEach(lnb => lnb.style.display = 'none');
        // document.querySelector('.lnb-background').style.display = 'none';
    });

});

/* tap click */
// 전시 a탭 클릭시 색 변환 -> wavve 코인충전 팝업창 밑에 참고
/* display_btn -> a 탭 전체 */
const title_tap_btn = document.querySelectorAll(".a")
const art_view_a_black = document.querySelector(".art_view_a")
console.log(art_view_a_black)

/* 초기화 -> 탭을 누르지 않은 a */
const title_tap_btn_reset = () => {
    
    for (let i of title_tap_btn) {
        i.classList.remove
        ("title_tap_style")
        i.style.color = "initial";
        i.style.border = "initial";
    }
    /*    for (let i of art_view_a_black){
        i.style.color = "#000"
    }
    art_view_a_black.style.color = "#000";
    */
    for (let i of title_tap_btn) {
        i.style.color = "#949494"
    }

}
title_tap_btn_reset()

/* 탭 클릭 시  a*/
title_tap_btn.forEach((t, i) => {
    t.addEventListener("mousemove", (e) => {
        e.preventDefault()
        title_tap_btn_reset()
        t.style.color = "#000"
        /*  t.style.borderBottom = "1px solid #000" */
    })
})
/* title_tap_btn() */
/* ------------------------------------- */