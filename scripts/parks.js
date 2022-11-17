"use strict";

window.onload = init;




function init() {
    //FillDropDown
    fillDropdownForLocation()
    fillDropdownForParkType()

    //Select Button
    //    const selectParkTypebtn = document.getElementById("selectParkTypebtn");
    //    selectParkTypebtn.onclick = selectParkTypebtnOnClick;

    //Hide and Show Selected Search Options
}




function fillDropdownForLocation() {

    const searchLocationList = document.getElementById("searchLocationList");
    let selectLocationOption = document.createElement("option");
    selectLocationOption.value = "";
    selectLocationOption.textContent = "Select State/Territory ..";
    searchLocationList.appendChild(selectLocationOption);


    let locationLength = locationsArray.length;
    for (let i = 0; i < locationLength; i++) {
        let locationNewOption = document.createElement("option");
        locationNewOption.value = locationsArray[i];
        locationNewOption.textContent = locationsArray[i];

        searchLocationList.appendChild(locationNewOption);
    }
}

function fillDropdownForParkType() {
    const searchParkTypeList = document.getElementById("searchParkTypeList");
    let selectParkTypeOption = document.createElement("option");
    selectParkTypeOption.value = "";
    selectParkTypeOption.textContent = "Select Park Type ..";
    searchParkTypeList.appendChild(selectParkTypeOption);


    let parkTypeLength = parkTypesArray.length;
    for (let i = 0; i < parkTypeLength; i++) {
        let parkTypeNewOption = document.createElement("option");
        parkTypeNewOption.value = parkTypesArray[i];
        parkTypeNewOption.textContent = parkTypesArray[i];

        searchParkTypeList.appendChild(parkTypeNewOption);
    }


}


let searchLocationRadio = document.getElementById("searchlocationradio");
let searchParkTypeRadio = document.getElementById("searchparktyperadio");

searchLocationRadio.onchange = selectedSearchType;
searchParkTypeRadio.onchange = selectedSearchType;

//Create a function to display list of options selected by the radio button 
function selectedSearchType() {
    let searchParkTypeList = document.getElementById("searchParkTypeList");
    let searchLocationList = document.getElementById("searchLocationList");

    if (searchLocationRadio.checked == true) {
        searchLocationList.classList.replace("hide","show");
        searchParkTypeList.classList.replace("show","hide");
        fillDropdownForParkType();
    }
    if (searchParkTypeRadio.checked == true) {
        searchParkTypeList.classList.replace("hide","show")
        searchLocationList.classList.replace("show","hide");
        fillDropdownForLocation();

    }
}







// Output Park Information 

function displayparksinResults() {

}

function displayparkinResults() {

}

