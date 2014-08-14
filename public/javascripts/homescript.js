$(document).ready(function() {
  $(".concertDate").mouseover(function() {
    $(this).css("background", "rgba(0, 255, 0, .65)");
    $(this).find(".textArea").css("color", "black");
    $(this).css("cursor", "pointer");
  });

  $(".concertDate").mouseout(function() {
    $(".concertDate").css("background", "rgba(0, 0, 0, .65)");
    $(this).find(".textArea").css("color", "white");
  });

  $(".concertDate").click(function() {
    window.location.href = "june" + $(this).children("div").attr("id");
  });

});