/*
    author : 최신우
    * 기능
        - 스크롤을 내렸을때 상단헤터가 작아짐
*/

// 전역변수 및 상수 선언
const header = document.querySelector("header");
const headerTitle = document.querySelector(".header__title");

// 함수선언

// 현재 header가 small형태인지 확인하는 함수
function isSmallHeader(){
    if(header.classList.contains("small-header")){
        return true;
    }
    return false;
}

// header를 large형태로 변경
function showLargeHeader(){
    header.classList.remove("small-header");
    headerTitle.classList.remove("hidden");
}

// header를 small형태로 변경
function showSmallHeader(){
    header.classList.add("small-header");
    headerTitle.classList.add("hidden");
}

// 현재 스크롤위치가 최상단인지 확인하는 함수
function isScrollTop(){
   if(window.scrollY < 100){
       return true;
   } 
   return false;
}

// 스크롤 이벤트 발생시 실행하는 함수
function handleScroll(){
    if(isScrollTop() && isSmallHeader()){
            showLargeHeader();
    }else if(!isScrollTop() && !isSmallHeader()){
            showSmallHeader();
    }
}

// 최초 실행함수, 이벤트등록 및 세팅 초기화함수
function indexInit(){
    isScrollPosTop = false;
    window.addEventListener("scroll", handleScroll);
}


// 초기화함수 실행
indexInit();

