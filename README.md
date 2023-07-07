# 📕LMS

## 프로젝트 소개

1인 공부방 및 소규모 학원을 위한 LMS 웹 어플리케이션 프로젝트입니다. </br>

~~웹 사이트 : https://snclearning.kro.kr ~~
~~api 서버 : https://example-back.shop ~~
현재 배포 중단

frontend repo : https://github.com/doongeon/snc-react/tree/main

## 개발 기간

2023.05.01 ~ 2023.06.30

## 개발 환경

### Frontend

<section>
<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white"/> 
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=Bootstrap&logoColor=white"/>

</section>

### Backend

<section>
<img src="https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?logo=Express&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=Sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon RDS-339933?logo=Amazon RDS&logoColor=white"/>


</section>

### Server

<section>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?logo=Amazon EC2&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white"/>

</section>

### Common
<section>
<img src="https://img.shields.io/badge/Amazon Codedeploy-232F3E?logo=Amazon AWS&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon S3-569A31?logo=Amazon S3&logoColor=white"/>
<img src="https://img.shields.io/badge/Github%20Actions-2088FF?logo=GithubActions&logoColor=white" />
<img src="https://img.shields.io/badge/Swagger-85EA2D?logo=Swagger&logoColor=black" />
<img src="https://img.shields.io/badge/Postman-FF6C37?logo=Postman&logoColor=white" />
<img src="https://img.shields.io/badge/Notion-000000?logo=Notion&logoColor=white" />
<img src="https://img.shields.io/badge/Slack-4A154B?logo=Slack&logoColor=white" />
</section>


## 구현 기능

### 🔐로그인/회원가입
- Google OAuth 2.0을 사용한 소셜로그인으로 간편하게 회원가입이 가능합니다.
- 이후 학생/교사 여부를 결정하여 역할에 맞는 서비스를 이용할 수 있습니다.


### 학생 페이지
* 알림장
    - 학생이 속한 반의 현재 알림을 확인할 수 있습니다.
* 강의 수강
    - 학생이 속한 반의 현재 진도에 맞춘 유투브 강의를 수강할 수 있습니다.


### 교사 페이지
* 반 관리
    - 교사가 담당하고 있는 반에 학생을 추가할 수도, 제외할 수도 있습니다.

* 강의 등록
    - 교사가 담당하고 있는 반에 유투브 링크를 업로드하여, 강의를 등록할 수 있습니다.
    - 강의의 마감기한을 설정하여, 정해진 기간 동안에만 수강이 가능하도록 설정합니다.


### 관리자 페이지
* 회원 관리
    - 해당 학원의 교사와 학생 정보를 관리할 수 있습니다.
