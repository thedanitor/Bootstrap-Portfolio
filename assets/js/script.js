$(".photo").mouseover(function() {
      $(this).attr("src", $(this).attr("data-animate"));
  });
$(".photo").mouseout(function() {
      $(this).attr("src", $(this).attr("data-still"));

  });