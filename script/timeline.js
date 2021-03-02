const timeline = document.querySelector(".timeline");
var ele = document.getElementsByTagName("input");
const imageTimeline = document.querySelector("#imageTimeline");
const textTimeline = document.querySelector("#k");
const buttonArrow = document.querySelectorAll(".buttonArrow");
const timelineButtons = document.getElementsByTagName("p");
var buttonArrowL;
var buttonArrowR;
var windowWidth = document.documentElement.clientWidth;

/* 
todo: por title em todas as imagens
todo: por alt em todas as imagens
*/
/*
!Adicionar os textos
!Deixar responsivo
*/

timeline.addEventListener("click", function () {
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked)
        switch (ele[i].value) {
          case "2000":
            imageTimeline.setAttribute("src", "../imagens/1.jpg");
            imageTimeline.setAttribute("title", "barata deitada");
            textTimeline.innerHTML = text2000;
            break;
          case "2001":
            imageTimeline.setAttribute("src", "../imagens/2.jpg");
            imageTimeline.setAttribute("title", "escola");
            textTimeline.innerHTML = text2001;
            break;
          case "2002":
            imageTimeline.setAttribute("src", "../imagens/3.jpg");
            textTimeline.innerHTML = text2002;
            break;
          case "2003":
            imageTimeline.setAttribute("src", "../imagens/4.jpeg");
            textTimeline.innerHTML = text2003;
            break;
          case "2004":
            imageTimeline.setAttribute("src", "../imagens/5.jpeg");
            textTimeline.innerHTML = text2004;
            break;
          case "2005":
            imageTimeline.setAttribute("src", "../imagens/6.jpeg");
            textTimeline.innerHTML = text2005;
            break;
          case "2006":
            imageTimeline.setAttribute("src", "../imagens/7.jpeg");
            textTimeline.innerHTML = text2006;
            break;
          case "2007":
            imageTimeline.setAttribute("src", "../imagens/8.jpeg");
            textTimeline.innerHTML = text2007;
            break;
          case "2008":
            imageTimeline.setAttribute("src", "../imagens/9.jpeg");
            textTimeline.innerHTML = text2008;
            break;
          case "2009":
            imageTimeline.setAttribute("src", "../imagens/10.jpeg");
            textTimeline.innerHTML = text2009;
            break;
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

function windowSizeR() {
  if (windowWidth > 780) {
    if (parseInt(ele[5].getAttribute("id")) >= 2020) {
      alert("Ainda não temos novos anos no acervo.");
    } else {
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id + 5);
          ele[i].setAttribute("value", id + 5);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) + 5;
      }
    }
  } else if (windowWidth <= 780 && windowWidth > 669) {
    if (parseInt(ele[4].getAttribute("id")) >= 2020) {
      alert("Ainda não temos novos anos no acervo.");
    } else {
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id + 4);
          ele[i].setAttribute("value", id + 4);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) + 4;
      }
    }
  } else if (windowWidth <= 669 && windowWidth > 598) {
    if (parseInt(ele[3].getAttribute("id")) >= 2020) {
      alert("Ainda não temos novos anos no acervo.");
    } else {
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id + 3);
          ele[i].setAttribute("value", id + 3);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) + 3;
      }
    }
  } else if (windowWidth <= 598 && windowWidth > 400) {
    if (parseInt(ele[2].getAttribute("id")) >= 2020) {
      alert("Ainda não temos novos anos no acervo.");
    } else {
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id + 2);
          ele[i].setAttribute("value", id + 2);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) + 2;
      }
    }
  } else if (windowWidth <= 400) {
    if (parseInt(ele[1].getAttribute("id")) >= 2020) {
      alert("Ainda não temos novos anos no acervo.");
    } else {
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id + 1);
          ele[i].setAttribute("value", id + 1);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) + 1;
      }
    }
  }
}

function windowSizeL() {
  if(parseInt(ele[0].getAttribute("id")) <= 2000){
    alert('O acervo começa nos anos 2000')
  }else {
    if(windowWidth > 780){
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id - 5);
          ele[i].setAttribute("value", id - 5);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) - 5;
      }
    }else if(windowWidth <= 780 && windowWidth > 669){
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id - 4);
          ele[i].setAttribute("value", id - 4);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) - 4;
      }
    }else if(windowWidth <= 669 && windowWidth > 598){
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id - 3);
          ele[i].setAttribute("value", id - 3);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) - 3;
      }
    }else if(windowWidth <= 598 && windowWidth > 400){
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id - 2);
          ele[i].setAttribute("value", id - 2);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) - 2;
      }
    }else if(windowWidth <= 400){
      for (i = 0; i < ele.length; i++) {
        if ((ele[i].type = "radio")) {
          let id = parseInt(ele[i].getAttribute("id"));
          ele[i].setAttribute("id", id - 1);
          ele[i].setAttribute("value", id - 1);
        }
      }
      for (i = 0; i < timelineButtons.length; i++) {
        timelineButtons[i].innerHTML =
          parseInt(timelineButtons[i].textContent) - 1;
      }
    }
  }
}


buttonArrowR.addEventListener("click", windowSizeR);

buttonArrowL.addEventListener("click", windowSizeL);

const text2000 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d" +
  "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Etia" +
  "mdignissim diam quis enim lobortis scelerisque. Elit ullamcorpe" +
  "rdignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellu" +
  "scras adipiscing enim eu turpis egestas. Egestas sed sed risus pretiu" +
  "mquam vulputate dignissim suspendisse.";
const text2001 = "x";
const text2002 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d" +
  "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Etia" +
  "mdignissim diam quis enim lobortis scelerisque. Elit ullamcorpe" +
  "rdignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellu" +
  "scras adipiscing enim eu turpis egestas. Egestas sed sed risus pretiu" +
  "mquam vulputate dignissim suspendisse.";
const text2003 = "y";
const text2004 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d" +
  "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Etia" +
  "mdignissim diam quis enim lobortis scelerisque. Elit ullamcorpe" +
  "rdignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellu" +
  "scras adipiscing enim eu turpis egestas. Egestas sed sed risus pretiu" +
  "mquam vulputate dignissim suspendisse.";
const text2005 = "z";
const text2006 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d" +
  "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Etia" +
  "mdignissim diam quis enim lobortis scelerisque. Elit ullamcorpe" +
  "rdignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellu" +
  "scras adipiscing enim eu turpis egestas. Egestas sed sed risus pretiu" +
  "mquam vulputate dignissim suspendisse.";
const text2007 = "k";
const text2008 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d" +
  "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Etia" +
  "mdignissim diam quis enim lobortis scelerisque. Elit ullamcorpe" +
  "rdignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellu" +
  "scras adipiscing enim eu turpis egestas. Egestas sed sed risus pretiu" +
  "mquam vulputate dignissim suspendisse.";
const text2009 = "w";
const text2010 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d" +
  "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Etia" +
  "mdignissim diam quis enim lobortis scelerisque. Elit ullamcorpe" +
  "rdignissim cras tincidunt lobortis feugiat vivamus. Sit amet tellu" +
  "scras adipiscing enim eu turpis egestas. Egestas sed sed risus pretiu" +
  "mquam vulputate dignissim suspendisse.";
