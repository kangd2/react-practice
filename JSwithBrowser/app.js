// const h1 = document.querySelector(".hello h1"); //querySelector 첫번째 값만 가져옴 모두가저오게 하려면 querySelectorAll 사용

// const title2 = document.querySelector("#hello");
// const title3 = document.getElementById("#hello"); // 두 코드는 같은 역할을 함


// function handleTitleClick(){
//   h1.style.color = "blue";
// }

// function handleMouseEnter(){
//   h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave(){
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize(){
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//   alert("copier!")
// }

// function handleWindowOffline(){
//   alert("SOS No WIFI")
// }

// function handleWindowOnline(){
//   alert("All good")
// }

// h1.onclick = handleTitleClick;
// h1.addEventListener("click", handleTitleClick); //addEventListener("감지할 행동", 실행할 함수);

// h1.onmouseenter = handleMouseEnter;

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


const h1 = document.querySelector(".hello h1");


function handleTitleClick(){
//1:
//   const clickedClass = "clicked";
//   if(h1.classList.contains(clickedClass)){
//   h1.classList.remove(clickedClass);
// }
//   else {
//   h1.classList.add(clickedClass); 
// }
//2:
  // let newColor;
  // const currentColor = h1.style.color;
  // if(currentColor.color ==="blue"){
  //   newcColor = "tomato";    
  // }
  // else{
  //   newColor = "blue";
  // }
  // h1.style.color = newColor;
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

