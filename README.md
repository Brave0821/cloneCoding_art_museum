# <클론코딩 시작> 
## HTML main 작업중 23/12/19 ~ 
## - > 메인페이지 23/12/26 기한
## 내용 최신화 날짜 : 23/12/22 PM 4시52분
-----------------------------------------------------------------------------------
## 문제발생 Ctrl + f로 이동 ex) 이동명령단어 move1 ~ 4
* 반응형 메뉴 구조 어디로 올려야할지? 23/12/20 - > ctrl + f - > move1 으로 반응형 작업장으로 이동.
-> 이거 그 메뉴 눌렀을때 페이지 별개의 페이지로 봐야한다. 돋보기 눌었을때 서치했던 페이지도 - > 해결
* 오른쪽 회원가입 등 div a로할지 ul li로 할지 고민중. - >  ctrl + f - > move2로 이동
* ---------------------------------------------------------------------------------
* 메뉴 ul>li>a>ulclass>li>a 이렇게할지
* 메뉴 ul>li>a>div class>ul>li로 할지 고민 - > 선생님께 여쭤보고 이걸로 선택. 23/12/22
* 최대고민 ctrl + f - > move3!로 이동. 매우 고민중 밑 구조가 비슷해서 여기가 중요!
* - > 그림그려주셔서 그 구조대로 하면 될 것 같다.
------------------------------------------------------------------------------------
## 작업진도 23/12/22 - AM 12/26 최신화.
* 데스크탑은 소장품위 전시까지 작업 - > move3
* 태블릿은 전시 작업중 - > move4
## index.html 작업페이지 주석들 여기로 정리 예정 23/12/22 ~ ing
------------------------------------------------------------------------------------
### 1차 점검 결과사항
* 
* 빈공간 지우기 맨 위 - > 해결 
* -선이 있는 공간은 div class로 주기 top 배너에 ul만이 아니라 div로 묶은 이유 
* ex) 전시에 - > 과거전시까지가 ul이고 그 뒤로 전부 공간이 div
* 전시쪽이랑 태블릿 형태에 top 메뉴바 페이지 만들기. - > 옮기는건 다음.
* 태블릿용 html 만들어서
*  top_bnr_000 (데탑) - > 000_hidden_menu (반응형) 클레스명 차이 12/25
* 
### 2차 점검 결과사항 
* 로그인이나 얇은 글씨에 class를 줬는데 - > 로그인 class는 삭제 일반 글씨는 보류
* top_bnr에 class명 lnb로 통일시킴. - > 바꾸기 전 원본은 메모장으로 따로 보관.
* -> 반응형 페이지에도 적용하기 ex) respon_lnb
* 검색 눌렸을 때 열리는 페이지 입력되므로 input txt주기 
* x 닫기 버튼에 클래스주기 
* 이미지 넣거나 경로 변경하기 아니면 차라리 닫기
* 
### 새로운 수정사항. 
* 햄버거바 눌렀을 때 나오는 페이지 - > respon_menu_click 따로 만듬. - > 나중에 어디에 배치해야할지?
* 햄버거바를 안눌었을때 반응형 페이지 - > respon_page 제작 
* join, login, menu html 당장 쓰지않기에 삭제 - > 사유 복잡해보여서 
---------------------------------------------------------------------------------------------------------------------