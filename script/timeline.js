const timeline = document.querySelector(".timeline");
var ele = document.getElementsByTagName("input");
const imageTimeline = document.querySelector("#imageTimeline");
const buttonArrow = document.querySelectorAll(".buttonArrow");
const timelineButtons = document.getElementsByTagName('p');
var buttonArrowL;
var buttonArrowR;

timeline.addEventListener("click", function () {
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked)
        if (ele[i].value == "2000") {
          imageTimeline.setAttribute("src", "../imagens/image.jpg");
        } else if (ele[i].value == "2001") {
          imageTimeline.setAttribute("src", "../imagens/ifrj.jpg");
        }
    }
  }
});

for (i = 0; i < buttonArrow.length; i++) {
  if (i == 0) {
    buttonArrowL = buttonArrow[i];
  } else {
    buttonArrowR = buttonArrow[i];
  }
}

buttonArrowR.addEventListener("click", function () {
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      let id = parseInt(ele[i].getAttribute("id"));
      ele[i].setAttribute("id", id + 5);
      ele[i].setAttribute("value", id + 5);
    }
  }
  for(i = 0; i<timelineButtons.length; i++){
      //timelineButtons[i] = parseInt(timelineButtons[i].textContent)+5;
      timelineButtons[i].innerHTML = parseInt(timelineButtons[i].textContent)+5
  }
});
