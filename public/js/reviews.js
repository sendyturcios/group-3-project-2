// I will need to grab user input from their selection in the form
//I will need to then take those values and post them by creating a route to the example.handlebars page





$("#submitForm").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  



  //create avariable to hold each ids 
//ex:
    let cleanliness = parseInt(
      $("#stars li.selected")
        .last()
        .data("value"),
      10
    );
    let name = $("#locationName").val().trim();
    let addr = $("#inputAddress").val().trim();
    let singleStall = parseInt($("#inputType option:selected").val());
    let handicapAccess = parseInt($("#inputHandicap option:selected").val());
    let famBath = parseInt($("#inputFamily option:selected").val());
    let ChangeTable = parseInt($("#inputChanging option:selected").val());
    let Unisex = parseInt($("#inputUnisex option:selected").val());
    let keyRequired = parseInt($("#inputKeyReq option:selected").val());
    let id = parseInt($("#id").text())

  

  var newReviewVals = {
    cleanliness: cleanliness,
    name: name,
    addr: addr,
    singleStall: singleStall,
    handicapAccess: handicapAccess,
    famBath: famBath,
    ChangeTable: ChangeTable,
    Unisex: Unisex,
    keyRequired: keyRequired,
    id: id

  }

  console.log(newReviewVals);
  console.log(cleanliness)

  //Send POST request
  $.ajax("/api/potties/:id", {
    type: "PUT",
    data: newReviewVals
  }).then(function() {
    console.log("created new review values");
    let href = $("#goback").attr("href")
    window.location.href = href
    //location.reload();
  });

  

});
