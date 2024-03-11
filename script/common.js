/* nav 탭 js */

/* 관람 & 참여 a click - > ↓ div 열리게. */
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
/* title_tap_btn.forEach((t,i)=>{
    
})
 */
/* 실험! */
const tabs = document.querySelectorAll('.gnb li');

tabs.forEach(tab => {
    tab.addEventListener('mousemove', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.lnb').forEach(lnb => lnb.style.display = 'none');
        const lnb = tab.querySelector('.lnb');
        if (lnb) {
            lnb.style.display = 'block';
        }
    });
    
 // 'mouseleave' 이벤트 추가
 tab.addEventListener('mouseleave', () => {
    document.querySelectorAll('.lnb').forEach(lnb => lnb.style.display = 'none');
});


});



/* tap click */
/* 전시 a탭 클릭시 색 변환 */
/* display_btn -> a 탭 전체 */
const title_tap_btn = document.querySelectorAll(".a")

/* 초기화 -> 탭을 누르지 않은 a */
const title_tap_btn_reset = () => {
    for(let i of title_tap_btn)
    {
        i.classList.remove
        ("title_tap_style")
        i.style.color = "initial";
        i.style.border = "initial";
    }

    for(let i of title_tap_btn){
        i.style.color = "#949494"
    }
}
title_tap_btn_reset()

/* 탭 클릭 시  a*/
title_tap_btn.forEach((t,i)=>{
    t.addEventListener("mousemove",(e)=>{
        e.preventDefault()
        title_tap_btn_reset()
        t.style.color = "#000"
       /*  t.style.borderBottom = "1px solid #000" */
    })
})

/* ------------------------------------- */

