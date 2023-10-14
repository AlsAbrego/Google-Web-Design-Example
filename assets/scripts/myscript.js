$(function() {
  //var clicks = 0;
  const button = $("#lower-health");
  const reset = $("#reset-health");
  const health = $(".health");

  

  function lowerHealth(){
    let permitClicks = 5
    let porcent = 100/ permitClicks;
    height = height-porcent;
    health.width(`${height}%`);
    if(height >= 0){
      let count = $(`#counterClick${pageID}`);
      count.html(height/porcent);
      //console.log(`#counterClick${pageID}`)
    }  
  if(height >= 80){
      health.removeClass("danger")
      health.addClass("sucess")
    }else  if (height >= 60 && height < 80) {
      health.removeClass("sucess")
      health.addClass("warning")
    } else if(height >= 40 && height < 60) {
      health.removeClass("warning")
      health.addClass("warning2")
    } else{
      health.removeClass("warning2")
      health.addClass("danger")
    }  
  }
  
  imag = $("#imag1, #imag2")


  
  let box;
  let cliqueAqu;
  let crossedFinger;
  

  imag.on('click', () => {
    lowerHealth();
    console.log(clicks);
    box = $(`#boxCorrect${pageID}`);
    cliqueAqui = $(`#cliqueAqui${pageID}`);
    crossedFinger = $(`#crossedFinger${pageID}`);
    clicks += 1;
    if (clicks == 2) {
      crossedFinger.css("visibility", "visible");
     
    } else if (crossedFinger.is(":visible")) {
      setTimeout(() => {
        crossedFinger.css("visibility", "hidden");
      }, 2000);      
    }
    if (clicks >= 5) {
      box.css('border', ' 3px solid green');
      cliqueAqui.css("visibility", "visible");
    }
  });
  
  
  
  
});





