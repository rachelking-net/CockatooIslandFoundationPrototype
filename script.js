/*Form interactions for paginated donation form*/
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const priceButtons = document.querySelectorAll(".circleButton");

function highlightButton(element) {
  priceButtons.forEach(btn => {
    btn.classList.remove("circle-button-selected");
  })
  element.classList.add("circle-button-selected")
}

priceButtons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    highlightButton(event.target)
  })
})

let formStepsNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  })
})

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  })
})

function updateFormSteps(){

    formSteps.forEach(formStep=> {
      formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
    })

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar(){
  progressSteps.forEach((progressStep, idx) => {
    if(idx < formStepsNum+1){
      progressStep.classList.add("progress-step-active");
  } else {
      progressStep.classList.remove("progress-step-active");
  }
});

const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width = ((progressActive.length-1)/(progressSteps.length-1)) * 70 + "%";
}

  function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }

/*Image slideshow interactions*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

