
$( document ).ready(function() {
    /*
    $(function (){

    //if($(window).width() > 1023){
    $( "#countdown-container" ).hide();
    $(".landing-text").hide();
    $( "#left-pic" ).animate({
        width: "50%",
        marginLeft: 0
        }, {
            duration: 1500, 
            queue: false 
            });
    $( "#right-pic" ).animate({
         width: "50%",
          }, {
            duration: 1500, 
            queue: false, 
            complete: function(){

                $("#countdown-container").show().addClass('animated bounceInDown');
                $(".landing-text").show().addClass('animated slideInUp');
            }});
    //}
    });
    */
    /*
    // set the date we're counting down to
    var target_date = new Date("Oct 28, 2016").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown = document.getElementById("countdown");
    //var countdown_mobile = document.getElementById("countdown-mobile");
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
    // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         

        //format countdown string + set tag value
        countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";  
        //countdown.innerHTML = days; 
    }, 1000);
    */
    $( "#food-header" ).click(function() {
      $( "#food-form" ).slideToggle();
      $( "#food-header > .button-expand" ).toggle();
      $( "#food-header > .button-minus" ).toggle();



    });

    $( "#music-header" ).click(function() {
      $( "#music-form" ).slideToggle();
      
      $( "#music-header > .button-expand" ).toggle();
      $( "#music-header > .button-minus" ).toggle();
       

    });
    $( "#ar-header" ).click(function() {
      $( "#ar-form" ).slideToggle();
      
      $( "#ar-header > .button-expand" ).toggle();
      $( "#ar-header > .button-minus" ).toggle();
       

    });
    $('.answer').hide();
    var arr = [ true, true, true, true, true, true, true ];
    $('.q').click(function () {
        //$( ".answer" ).slideToggle();
        var anum = $(this).attr('target');
       
        if(arr[anum] === false){
            $('#icon' + $(this).attr('target')).addClass('rotated-undo');
            $('#icon' + $(this).attr('target')).removeClass('rotated');
           
        }
        else{
            $('#icon' + $(this).attr('target')).addClass('rotated');
            $('#icon' + $(this).attr('target')).removeClass('rotated-undo');
        }
        $('#ans' + $(this).attr('target')).slideToggle();
        arr[anum] = !arr[anum];        
    });

    $('.mobile-attire-grid .tabcontent').hide();
    
    $('.m-tablinks').click(function () {
          
        $('#attire' + $(this).attr('target')).slideToggle();
           
    });


});

function openDetail(evt, occasion) {
        
    // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            tablinks[i].style.opacity = ".5";
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementsByClassName("attire-info-grid")[0].style.display = "block";
        document.getElementById(occasion).style.display = "block";
        evt.currentTarget.style.opacity = "1";
        evt.currentTarget.className += " active";
    }

