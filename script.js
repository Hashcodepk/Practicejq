//Dummy Data

let jsonData = [
  {
    id: "1",
    firstName: "Waqas",
    lastName: "Mehmood",
    designation: "CEO",
  },
  {
    id: "2",
    firstName: "Faraz",
    lastName: "Mehmood",
    designation: "Director",
  },
  {
    id: "3",
    firstName: "Hashir",
    lastName: "Ghouri",
    designation: "Employee",
  },
  {
    id: "4",
    firstName: "George",
    lastName: "Bluth",
    designation: "Manager",
  },
  {
    id: "5",
    firstName: "Janet",
    lastName: "Weaver",
    designation: "Employee",
  },
  {
    id: "6",
    firstName: "Emma",
    lastName: "Wong",
    designation: "Employee",
  },
  {
    id: "7",
    firstName: "Charles",
    lastName: "Morris",
    designation: "Employee",
  },
];

let resetBtn = $("button#btnReset");

// SaveData Function

const saveData = function () {
  let firstName = $("input#firstName");
  let lastName = $("input#lastName");

  let designationText = $("#designation option:selected").text();
  let designation = $("#designation");

  if (firstName.val() && lastName.val()) {
    alert(
      firstName.val() + " " + lastName.val() + " " + designationText + " Saved!"
    );
    firstName.val("");
    lastName.val("");
    designation.val("Select Designation");
    resetBtn.hide();
  } else {
    alert("Please fill the form");
  }
};

// getData Function

const getData = function (data) {
  return data;
};

// renderData Function

let dataCols = [
  { data: "firstName" },
  { data: "lastName" },
  { data: "designation" },
];

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
  $("#designation").val(data.designation); //stuck here
};

// All onClick Events in 1 Function

const bindEvents = function () {
  //save btn event
  $("#btnSubmit").on("click", () => saveData());

  //table on Click
  let table = $("#myTable").DataTable();

  $("#myTable tbody").on("click", "tr", function () {
    let clickedData = table.row(this).data();
    $.fn.fillForm(clickedData);
    console.log(clickedData);
    resetBtn.show();
  });

  //clear form btn
  resetBtn.on("click", function () {
    $("input#firstName").val("");
    $("input#lastName").val("");
    $("#designation").val("Select Designation");
    resetBtn.hide();
  });
};

// Function to fill Designation dropdown with json data
let dropdown = $("#designation");

const fillDesignation = function (data) {
  var filterDesignation = [];

  if (!data.length) {
    dropdown.append(
      $("<option></option>")
        .attr("value", "No designation found")
        .text("No designation found")
    );
  } else {
    dropdown.append(
      $("<option></option>")
        .attr("value", "Select Designation")
        .text("Select Designation")
    );

    $.each(data, function (i, val) {
      if (filterDesignation.indexOf(val.designation) == -1) {
        dropdown.append(
          $("<option></option>")
            .attr("value", val.designation)
            .text(val.designation)
        );

        filterDesignation.push(val.designation);
      }
    });
  }
};

$(document).ready(function () {
  renderData();
  bindEvents();
  fillDesignation(jsonData);
});
