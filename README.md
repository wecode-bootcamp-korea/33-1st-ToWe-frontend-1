# 33기 1차 프로젝트 6팀 ToWe



![KakaoTalk_Photo_2022-05-28-22-53-59 001](https://user-images.githubusercontent.com/93895746/172115466-3caf6857-746e-4436-9184-a49d6006a035.png)

## 프로젝트 선정이유


- 깔끔하고 아기자기한 UI로 보기 좋게 레이아웃을 잡고, 기능 구현에 중점을 두어 개발할 수 있다.
- 커머스 사이트로써 기본적인 페이지 구성이 잘 되어 있다.

<br><br>

## 프로젝트 소개


한정된 기간동안 기획과 디자인보다는 개발에 집중하기 위해서 일부를 (무직타이거)을 참조하여 학습목적으로 제작하였습니다. <br>
코드 및 이미지를 남용 및 악용할 경우 법적으로 문제될 수 있습니다. <br>
이 프로젝트에서 사용되고 있는 로고 및 배너는 해당 프로젝트 팀 소유이므로 외부인이 허가없이 사용할 수 없습니다.

<br><br>

## 1. 프로젝트 기간 및 인원


**프로젝트 기간**
22.05.23 ~ 22.06.03 (약2주)

<br><br>

## 2. 개발 인원


#### Front-end : 김형석, 김슬비, 김정준, 노해리, 유지후

#### Back-end : 정치영, 정병휘

<br><br>

## 3. 구현 항목

### 필수구현

#### 회원가입 / 로그인, 메인페이지, 상품 리스트, 상품 상세, 장바구니, Nav / Footer, 마이페이지

### 추가 구현

#### 베스트10, 주문하기(포인트결제), 리뷰 / 게시판

<br><br>

## 4. 기술 스택

### Front-end

: HTML/CSS, JavaScript, React.js, React-Router, Sass

### Back-end

: Python, Django

<br><br>

## 5. 협업도구


### (1) Trello

![](https://velog.velcdn.com/images/seul06/post/278a77fb-8985-45c4-b809-763545d0b289/image.png)

- 팀원간 프로젝트 협업도구로는 Trello를 활용했다.

<br>

### (2)Slack

![스크린샷 2022-06-06 오후 4 44 42](https://user-images.githubusercontent.com/93895746/172118267-98978164-f17e-44ae-b36d-ef1fed4518f4.png)

<br>
<br>

## 6. Front-end 기능 구현
![](https://velog.velcdn.com/images/seul06/post/36b01045-84da-4e2f-ad8e-5bf95d3199a5/image.gif)


### 1. 회원가입 페이지

```
• id, pw 유효성 검사
• Back-end DB에 유저정보 저장하기
```

### 2. 로그인 페이지

```
id, pw 유효성 검사
로그인시 토큰 발급 후 저장
```

### 3. 메인 페이지

```
• 메인 페이지 상단 자동 무한 캐러셀 애니메이션
• 메인 페이지 하단 무한 슬라이더 애니메이션
• 스크롤 이벤트 애니메이션
• 메인화면 레이아웃 작업
```

### 4. 제품 리스트 페이지

```
• Query String 을 이용한 카테고리별 제품 다중 필터 기능 구현
• 가격순, 연령순 정렬 기능 구현
• 제품 이미지 호버 시에 이미지 변경
• 각 제품 좋아요 버튼 구현
• 더보기 기능
```

### 5. 제품 상세 페이지

```
• 작은 이미지 클릭시 큰 이미지로 변환
![이미지변환기능](https://user-images.githubusercontent.com/102506443/172135726-42d23b01-6274-4bd0-b1c1-1724b4e61829.gif)

• 색상별 장바구니 담기 기능
 ![색상별담기](https://user-images.githubusercontent.com/102506443/172135794-929a15be-c318-4346-9a2e-6676e4f24358.gif)


• 후기작성
 ![후기작성](https://user-images.githubusercontent.com/102506443/172135806-dd36185a-b810-4b50-bec1-a1ea6b94e910.gif)


• 질문작성
 ![질문작성](https://user-images.githubusercontent.com/102506443/172135813-afdb063e-b58c-4d0d-bc1f-b6e17dcf6bd1.gif)

```

### 6. 제품 상세 페이지

```

```

### 7. 마이페이지

```

```

### 8. 장바구니 페이지

```

```

### 9. 주문관리 페이지

```
• GET 호출을 통해서 백엔드로부터 데이터를 받아온 뒤 여러개의 데이터를 setState 함수를 통해 렌더링 작업
• POST 호출을 통해 로그인시 발급받은 토큰을 localStorage에서 가져와 headers에 담아서 보낸뒤 페이지 이동
```

### 10. 베스트10 페이지

```
• 컴포넌트 재사용, 폼에 맞도록 조정
• fetch()를 통해 DB로 부터 이미지 데이터를 받아온 뒤 렌더링 작업
```

### 11. 게시판 페이지

```

```

### 12. Nav / Footer

```
• 상수데이터를 만든 후 map method를 사용하여 Navigation bar 정리
• 조건부 렌더링을 사용하여 token을 받았을 때와 받지 못했을 때 마이페이지 및 장바구니 클릭 시 로그인 페이지 이동
• 각 항목에 맞는 quary parameter를 설정하여 클릭시 상품에 맞는 query parameter인 상품리스트 페이지 이동
```

<br>
<br>

## 7. Back-end 기능 구현

