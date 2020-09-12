// for the achievements section... count up numbers

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".achievements-section")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2500,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}

// for the portfolio section's images

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementsByClassName("portfolio--image");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < img.length; i++) {
    (function(index) {
        img[index].addEventListener("click", function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
          })
    })(i);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function close_dropdown(){
  document.getElementById("hamburger-layer1").style.display = "block";
  document.getElementById("hamburger-layer2").style.transform = "rotate(0)";
  document.getElementById("hamburger-layer2").style.marginTop = "3.5px";
  document.getElementById("hamburger-layer3").style.transform = "translate(0, 0)";
  document.getElementById("navbar").style.display = "none";
}

function open_dropdown(){
  document.getElementById("hamburger-layer1").style.display = "none";
  document.getElementById("hamburger-layer2").style.transform = "rotate(90deg)";
  document.getElementById("hamburger-layer2").style.marginTop = "10px";
  document.getElementById("hamburger-layer3").style.transform = "translate(0, -9px)";
  document.getElementById("navbar").style.display = "flex";
}

var clicked = false;
function show_menu(){
  if (!clicked){
    clicked = true;
    open_dropdown();
    return;
  }
  if (clicked){
    clicked = false;
    close_dropdown();
    return;
  }
}

function check_viewport(x) {
  if (x.matches) {
    close_dropdown();
  } else {
    document.getElementById("navbar").style.display = "flex";
  }
}

var x = window.matchMedia("(max-width: 1024px)")
check_viewport(x)
x.addListener(check_viewport)

