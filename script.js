$(document).ready(function () {
  // let mydata = [
  //   { first_name: "Waqas", last_name: "Mehmood" },
  //   { first_name: "Faraz", last_name: "Mehmood" },
  //   { first_name: "Hashir", last_name: "Ghouri" },
  // ];

  // $.each(mydata, function (i, val) {
  //   $("#tableBody").append(`<tr>
  //     <td>${val.first_name}</td>
  //     <td>${val.last_name}</td>
  //   </tr>`);
  // });

  //adding data with form

  $("#myForm").submit(function (e) {
    e.preventDefault();

    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();

    $("#tableBody").append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    </tr>`);

    $("input#firstName").val("");
    $("input#lastName").val("");
  });

  //using DataTables Plugin

  $("#myTable").DataTable({
    ajax: "data.js",
    columns: [{ data: "firstName" }, { data: "lastName" }],
  });
});
