$("#dog").ready(function() {
  $("#dog").click(function() {
    console.log("This is a picture of a very cute dog.")
    $("#p_below").html("This is a picture of a very cute dog!")
    $("#p_below").toggle("img")
  })
})



//
