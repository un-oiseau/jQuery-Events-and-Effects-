$(document).ready(function(){
    $(".card-1").click(function(){
        $(this).hide();
    });

    $(".card-2").dblclick(function(){
        $(this).hide();
    });

    $(".card-3").mouseenter(function(){
        $('.l-bg-green-dark').css("opacity", ".3");
    });

    $(".card-3").mouseleave(function(){
        $('.l-bg-green-dark').css({
            "background" : "greenyellow",
            "opacity": "1"
        });
      });

    $(".card-4").mousedown(function(){
      $(this).addClass("l-bg-orange-dark");
      setTimeout(function() {
          $(".card-4").mouseup(function(){
              $(this).removeClass("l-bg-orange-dark");
              $(this).addClass("l-bg-cherry");
          });
      }, 2000);
    });

    $(".card-5").hover(function(){
      $(this).animate({
          fontSize: '+=2px'
        });
    });

    $(".card-6 input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $(".card-6 input").blur(function(){
      $(this).css("background-color", "gray");
    });
    $(".card-6 input").change(function(){
      alert("I can see someone is filling in this field.")
    });


    $(".card-7 p, .card-7 button, .card-7 h4").click(function(event){
      $(".card-7").html("Triggered by a " + event.target.nodeName + " element.")
      .css({
        "width": "300px",
        "height": "170px",
        "color": "black"
      });
    });

    $(".card-8").on("click dblclick mouseover mouseout",function(event){
      $(".card-8").html("Event: " + event.type)
      .css({
        "width": "300px",
        "height": "170px",
        "color": "black",
        "font-size": "30px"
      });
    });


    $(".card-9 button").click(function(){
      $(".card-9 input").select();
    });  

    $(".card-10").on("mouseover mouseout", function(){
      $(this).toggleClass("intro");
    });


    $(".card-11 input").keydown(function(){
      $(this).css("background-color", "yellow");
    });
    $(".card-11 input").keyup(function(){
      $(this).css("background-color", "pink");
    });


    // Hide / Show, Toggle

    $(".btn-1a").click(function(){
      $(".row-1").hide();
    });

    $(".btn-1b").click(function(){
      $(".row-1").show();
    });

    $(".btn-1c").click(function(){
      $(".row-1 .card-3").toggle(2000);
    });

    // Fade In, Fade Out, Fade To

    $(".btn-2a").click(function(){
      $(".row-2").fadeOut(1000);
    });
    $(".btn-2b").click(function(){
      $(".row-2").fadeIn(3000);
    });

    $(".btn-2c").click(function(){
      $(".row-2 .card-6").fadeTo(1000, 0.4);
    });

    // Slide Upn , Slide Down, Slide Toggle

    $(".btn-3a").click(function(){
      $(".row-3").slideDown("slow");
    });

    $(".btn-3b").click(function(){
      $(".row-3").slideUp("slow");
    });

    $(".btn-3c").click(function(){
      $(".row-3 .card-9").slideToggle("slow");
    });
});

