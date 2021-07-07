# vislab-web

<h3>6/28</h3>

- VISLAB Research 부분 제작 중 (추후에 research 이미지 수정) - table 이용!

  - (고민 : research가 많아지면 나중에 코드가 길어질텐데, research 하나하나를 객체처럼 찍어낼 수는 없을까?? )
  <br><br>=> 해결 : research-list component를 따로 하나 만들어서 research component에 입력 시켰다.

  - (고민 : 2021 년 하나에 대한 research component 덩어리는 만들었는데, 각 년도별로 다른 매개변수들을 입력하면서 값만 다르고 구조는 같은 덩어리들을 찍어낼 수는 없을까?? 마치 객체에서 생성자 함수처럼!) 
  <br><br>=> 해결 : Research 클래스 배열을 만들어서 해결!

<br>
<h3>6/30</h3>

- (교수님의 피드백 : app-research-list 안에 section까지 포함시켜서 하드코딩을 피하기) 
- 교수님 피드백에 따라 section tag 까지 한번에 research-list 컴포넌트에 포함시킴!<br><br>
  - (고민 : 각각의 정보들인 <b>(year/title/obliqueDesc/members/image..)</b> 들은 년도마다 다르다. 
    <br>즉 년도마다의 정보들을 매개변수 전달하듯이 전달을 해야한다. 어떻게 해야하지?? ) 
    <br><br>=> 해결 : 같은 app-research-list 컴포넌트를 찍어낼 때, 각각 다른 매개변수를 전달하는 방법을 배웠다! <br>
    <app-research-list <b>[받는 곳에서의 변수 이름]='전달할 때의 변수 이름'</b> ></app-research-list> 과 같은 식으로 하고, <br><b>'전달할 때의 변수 이름'</b>을 각각 다르게 설정했다.
    <br><br>
    이때 research-list.ts 파일에서는 모든 년도의 research 정보들을 배열에다가 기록하고,
    <br>research-component.ts 파일에서 slice 기능을 이용하여 '전달할 때의 변수 이름'에다가 슬라이싱해서 값을 할당하였다
      <br>

    ![캡처](https://user-images.githubusercontent.com/59140182/123925762-2efcbf00-d9c6-11eb-9dfd-922a8ef276f0.PNG)

    이런 느낌으로! 자세한 코드는 소스코드 참고
    
     <br><br>
   - (고민 : 그럼 section 별로 어떻게 header background 색깔을 바꾸지? 
  <br>scss 파일에서 @include 와 @if, 그리고 @mixin 을 사용하면 될 것 같긴 한데, research-list.component.html 파일에서 사용하는 <b>receivedList[0].year</b> 라는 이름의 변수를 가져       와서 research-list.component.scss의 @mixin 의 매개변수로 이용하고 싶은데 안되네...)

<br>
<h3>7/5</h3>

- (교수님의 피드백 : research 배열을 일일히 slicing 하지 말고 map과 filter를 이용하여 한번에 깔끔하게 처리하기) 
- map과 filter를 이용하여 깔끔하게 다듬는데에 성공! <br><br>
  
  ![캡처](https://user-images.githubusercontent.com/59140182/124434176-84621300-ddae-11eb-91a2-6e44d9549937.PNG)
  ![캡처2](https://user-images.githubusercontent.com/59140182/124434180-84faa980-ddae-11eb-81ee-cad9e8e80119.PNG)

    - (고민 : 아직도 section별 다르게 색깔 넣는건 구현 못했다.. 나중에)

- 당분간 정민님과 해야 할 일 : 현재 있는 static 데이터(임의의 데이터)를 apps 서버에 있는 data들로 교체하는 작업과 research 부분 다듬는 것을 위주로 진행
