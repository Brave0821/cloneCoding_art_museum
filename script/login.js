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



login_btn.addEventListener("click", ()=>{
    const user_email_value = user_email_input.value.trim();
    const user_pw_value = user_pw_input.value.trim();
    if (user_email_value === "") {
        alert("이메일을 입력해주세요")
    } else if (!email_condition.test(user_email_value)) {
        alert("올바른 이메일 형식이 아닙니다.")
    /* pw 비밀번호  최소 8자 1개 이상 문자, 하나의 숫자 및 하나의 특수문자 정규식 */
    } else if(user_pw_value === "") {
        alert("비밀번호를 입력해주세요")
    } else if(!pw_condition.test(user_pw_value)) {
        alert("올바른 비밀번호 형식이 아닙니다.")
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

