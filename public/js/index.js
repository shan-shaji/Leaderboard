// Will only run after the page loads

$(document).ready(function () {
  $("#tableSearch").keyup(function () {
    var name = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      console.log($(this).text().toLowerCase().indexOf(name));
      $(this).toggle($(this).text().toLowerCase().indexOf(name) > -1);
    });
  });
});
