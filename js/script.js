// Create tabs

function openPage(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();





//Test button
var popup = document.querySelector('.popData');
function openPopup(){
  popup.classList.toggle("isActive");
  opacityDiv.classList.toggle("appear");
  console.log('ça marche');
}


// Ouverture popup progression
var opacityDiv = document.querySelector('.black');
var openProgress = document.querySelector('.progress_bar');
var popupProgress = document.querySelector('.integration');

openProgress.addEventListener('click', function() {
  console.log("je marche");
  popupProgress.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});


//Ouverture preview MAIL
var mail_preview = document.querySelector('.mail_preview');
var mail_button = document.querySelector('.mail_button');
var mail_remove = document.querySelector('.go_mail');

mail_button.addEventListener('click', function() {
  mail_preview.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});

mail_remove.addEventListener('click', function() {
  mail_preview.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});

var livret_preview = document.querySelector('.livret_preview');
var livret_button = document.querySelector('.livret_button');
var livret_remove = document.querySelector('.go_livret');

livret_button.addEventListener('click', function() {
  livret_preview.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});

livret_remove.addEventListener('click', function() {
  livret_preview.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});

var sport_preview = document.querySelector('.sport_preview');
var sport_button = document.querySelector('.sport_button');
var sport_remove = document.querySelector('.go_sport');

sport_button.addEventListener('click', function() {
  sport_preview.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});

sport_remove.addEventListener('click', function() {
  sport_preview.classList.toggle("appear");
  opacityDiv.classList.toggle("appear");
});

// Fermeture avec Div noire
opacityDiv.addEventListener('click', function() {
  if (popupProgress.classList.contains("appear")){
      popupProgress.classList.remove("appear");
  }

  if (sport_preview.classList.contains("appear")){
      sport_preview.removeClass("appear");
  }
  if (mail_preview.classList.contains("appear")){
      mail_preview.classList.remove("appear");
  }
  if (livret_preview.classList.contains("appear")){
      livret_preview.classList.remove("appear");
  }

  if (popup.classList.contains("isActive")){
      popup.classList.remove("isActive");
  }

  if (popupProgress.classList.contains("appear")){
      popupProgress.classList.remove("appear");
  }

  opacityDiv.classList.toggle("appear");
});

// Animation progress bar
$(".meter > span").each(function() {
	$(this)
		.data("origWidth", $(this).width())
		.width(0)
		.animate({
			width: $(this).data("origWidth")
		}, 1200);
});

//Progression et checkbox
var checkbox = document.querySelectorAll("input[type=checkbox]");
var progress = document.querySelector('.integration_progress');

function advanceProgression() {
    if(this.checked) {
        $(progress).width('+=25%');
        $(".integration_progress").each(function() {
        	$(this)
        		.data("origWidth", $(this).width())
        		.width(0)
        		.animate({
        			width: $(this).data("origWidth")
        		}, 1200);
        });
    } else {
      $(progress).width('-=25%');
      $(".integration_progress").each(function() {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate({
            width: $(this).data("origWidth")
          }, 1200);
      });
    }
};

$(checkbox).on('change', advanceProgression);

//MESSAGERIE
  $(document).ready(function() {
    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li").click(function() {
      $("ul.tabs li").removeClass("active"); //Remove any "active" class
      $(this).addClass("active"); //Add "active" class to selected tab
      $(".tab_content").hide(); //Hide all tab content
      var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
      $(activeTab).fadeIn(); //Fade in the active content
      return false;
    });
  });


  $(document).ready(function(){
    $('.slideshow').slick({
      variableHeight: true,
      centerMode: true
    });
  });


  //enlever mail_notification
  $(".toolbar_mail").click(function(){
      $(".mail_notification").remove();
  });

  //Checkbox switch Team One POINT
  $('.toggle').click(function() {
    $('.mateam').toggleClass('disappear');
    $('.lateam').toggleClass('appear');
});

var toggle = document.getElementById('container');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = 'rgba(117, 181, 232)';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = 'rgba(250, 219, 143)';
	}
});
