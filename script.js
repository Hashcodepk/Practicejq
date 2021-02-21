//Dummy Data

let jsonData = [
  {
    id: "1",
    firstName: "Waqas",
    lastName: "Mehmood",
  },
  {
    id: "2",
    firstName: "Faraz",
    lastName: "Mehmood",
  },
  {
    id: "4",
    firstName: "George",
    lastName: "Bluth",
  },
  {
    id: "5",
    firstName: "Janet",
    lastName: "Weaver",
  },
  {
    id: "6",
    firstName: "Emma",
    lastName: "Wong",
  },
  {
    id: "7",
    firstName: "Charles",
    lastName: "Morris",
  },
];

// SaveData Function

const saveData = function () {
  let firstName = $("input#firstName");
  let lastName = $("input#lastName");
  if (firstName && lastName) {
    alert(firstName.val() + " " + lastName.val() + " Saved!");
    firstName.val("");
    lastName.val("");
  } else {
    alert("Please fill the form");
  }
};

// getData Function

const getData = function (data) {
  return data;
};

// renderData Function

let dataCols = [{ data: "firstName" }, { data: "lastName" }];

const renderData = function () {
  $("#myTable").DataTable({
    data: getData(jsonData),
    columns: dataCols,
  });
};

// function to populate form

$.fn.fillForm = function (data) {
  $("input#firstName").val(data.firstName);
  $("input#lastName").val(data.lastName);
};

$(document).ready(function () {
  renderData();

  $("#btnSubmit").on("click", () => saveData());

  let table = $("#myTable").DataTable();
  let resetBtn = $("button#btnReset");

  $("#myTable tbody").on("click", "tr", function () {
    let clickedData = table.row(this).data();
    $.fn.fillForm(clickedData);
    resetBtn.show();
  });

  resetBtn.on("click", function () {
    $("input#firstName").val("");
    $("input#lastName").val("");
    resetBtn.hide();
  });
});
