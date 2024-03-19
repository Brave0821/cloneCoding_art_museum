window.addEventListener("scroll", function () {
    const wrap_header_scroll = document.querySelector(".index_header");
    wrap_header_scroll.classList.toggle("sticky", window.scrollY > 0);
});



/* DOMContentLoaded - > 돔트리 분석이 끝나면 발생 */

const id_checkbox = document.getElementById("id_email_y")
const id_checkbox_label = document.querySelector(".checkbox-label")
console.log(id_checkbox, id_checkbox_label)

/* 실패 */
/* id_checkbox.addEventListener("click",()=>{
    if(id_checkbox.checked) {
        id_checkbox_label.computedStyleMap.backgroundImage = "url('images/icon/check_on.png')"; 
    } else { 
        id_checkbox_label.computedStyleMap.backgroundImage = "url('images/icon/check_on.png')"; 
    }
})

 */

/* 이메일 입력 시 조건 */
/* trim - > 문자열 좌우에서 공백 제거 */
/* https://www.happyjung.com/lecture/90
정규식 가져옴
*/
const login_btn = document.getElementById("login_btn");
const user_email_input = document.getElementById("user_id");
const user_pw_input = document.getElementById("user_pw");
/* / 정규식이라는 의미 */
const email_condition = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const pw_condition = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const error_message_num = document.querySelector(".error_message_num") 

login_btn.addEventListener("click", ()=>{
    const user_email_value = user_email_input.value.trim();
    const user_pw_value = user_pw_input.value.trim();
    if (user_email_value === "") {
        alert("이메일을 입력해주세요")
    } else if (!email_condition.test(user_email_value)) {
      /*   alert("올바른 이메일 형식이 아닙니다.") */
        error_message_num.innerHTML = "※이메일 형식에 맞게 입력해주세요."
    /* pw 비밀번호  최소 8자 1개 이상 문자, 하나의 숫자 및 하나의 특수문자 정규식 */
    } else if(user_pw_value === "") {
        alert("비밀번호를 입력해주세요")
    } else if(!pw_condition.test(user_pw_value)) {
        /* alert("올바른 비밀번호 형식이 아닙니다.") */
        error_message_num.innerHTML = "※ 비밀번호를 최소 8자 1개 이상 문자, 하나의 숫자 및 하나의 특수문자를 포함해서 입력해주세요"
    } else {
        alert("로그인 성공")
        /* 메인 페이지로 이동 */
        window.location.href = "index.html"
    }
})


/* https://www.wrapuppro.com/programing/view/MIw5kPB3ao2YJVx */
/* login_btn.addEventListener("click", ()=>{
    const user_pw_value = user_pw_input.value.trim();

    if (user_pw_value === "") {
        alert("비밀번호를 입력해주세요!!!")
    } else if (!pw_condition.test(user_pw_value)) {
        alert("올바른 비밀번호 형식이 아닙니다.")
    } else {
        alert("로그인 성공")
    }
}) */


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

// close_button을 클릭했을 때의 동작 설정
close_button.addEventListener("click", () => {
    // mob_wrap 요소의 show 클래스를 제거하여 창을 닫기.
    mob_wrap.classList.remove("show");
});

function toggle_mob_wrap(){
    document.querySelector(".mob_wrap").classList.toggle("show");
}

/* close 버튼을 누르면 스크롤바가 다시 생기고 mob_menu를 누르면 스크롤바가 없어진다. */
/* --- */

const wrap = document.querySelector(".wrap")
const index_mob_menu = document.querySelector(".index_mob_menu")
const body = document.querySelector("body")

let isScrollHidden = false;

index_mob_menu.addEventListener("click", () => {
    body.style.overflowY = "hidden";
    isScrollHidden = true;
    /* console.log("성공😊!!!"); */
});

close_button.addEventListener("click", () => {
    if (isScrollHidden) {
        body.style.overflowY = "";
        isScrollHidden = false;
    }
});

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