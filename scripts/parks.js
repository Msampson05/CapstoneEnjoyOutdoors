"use strict";

window.onload = init;




function init() {
    //FillDropDown
    fillDropdownForLocation()
    fillDropdownForParkType()

    //Select Button

    const searchbtn = document.getElementById("searchbtn");
    searchbtn.onclick = searchbtnOnClick;

    //Create a function to display list of options selected by the radio button 
    let searchLocationRadio = document.getElementById("searchlocationradio");
    let searchParkTypeRadio = document.getElementById("searchparktyperadio");

    searchLocationRadio.onchange = selectedSearchType;
    searchParkTypeRadio.onchange = selectedSearchType;

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


function selectedSearchType() {

    let selectedSearchTypeValue = getSelectedSearchTypeValue();

    if (selectedSearchTypeValue == "location") {
        searchLocationList.classList.replace("hide", "show");
        searchParkTypeList.classList.replace("show", "hide");
    }
    if (selectedSearchTypeValue == "parktype") {
        searchParkTypeList.classList.replace("hide", "show")
        searchLocationList.classList.replace("show", "hide");
    }
}

function getSelectedSearchTypeValue() {

    let searchLocationRadio = document.getElementById("searchlocationradio");
    let searchParkTypeRadio = document.getElementById("searchparktyperadio");

    if (searchLocationRadio.checked == true) {
        return "location";
    }
    if (searchParkTypeRadio.checked == true) {
        return "parktype";
    }
}


// function to display results on search btn clicked
// note* When search button is selected cards display parks based on selectedsearch type
function searchbtnOnClick() {



    let selectedSearchTypeValue = getSelectedSearchTypeValue();

    let filteredResults;

    if (selectedSearchTypeValue == "location") {
        let locationType = getCurrentlySelectedLocationFromDropdown();
        filteredResults = findParksbyLocation(nationalParksArray, locationType);
    }
    if (selectedSearchTypeValue == "parktype") {
        let parktype = getCurrentlySelectedParkTypeFromDropdown();
        filteredResults = findParksByParkType(nationalParksArray, parktype);
    }

    displayparksinResults(filteredResults);




}

function getCurrentlySelectedParkTypeFromDropdown() {

    //Call dropdown element 
    const selectedParkTypeList = document.querySelector('#searchParkTypeList');
    let selectedParkType = selectedParkTypeList.value;

    return selectedParkType;

}

function getCurrentlySelectedLocationFromDropdown() {

    const selectedLocationTypeList = document.querySelector("#searchLocationList");
    let selectedLocationType = selectedLocationTypeList.value;

    return selectedLocationType;

}



//filter parks by parktype 
function findParksByParkType(inputParks, inputParktype) {
    let outputParks = []
    for (let park of inputParks) {

        if (park.LocationName.indexOf(inputParktype) != -1) {
            outputParks.push(park);
        }
    }

    return outputParks;
}


//filter parks by park location
function findParksbyLocation(inputParks, inputLocationType) {
    let outputLocation = []

    for (let park of inputParks) {

        if (park.State == inputLocationType) {
            outputLocation.push(park);
        }
    }
    return outputLocation;
}


// Output Park Information 

function displayparksinResults(inputParks) {
    let resultsOutput = document.getElementById("resultsOutput");
    resultsOutput.innerHTML = "";
    for (let park of inputParks) {

        let CardOutput = document.createElement("CardOutput");
        let CardOutputTitle = document.createElement("CardOutputTitle");
        let CardOutputText = document.createElement("CardOutputText");
        let btn = document.createElement('button');

        CardOutput.className = 'card'
        btn.id = 'send';
        btn.classList = 'btn-primary';
        CardOutputTitle.innerHTML = `<h7 <span class='fw-bold'> ${park.LocationName} </span></h7> `
        CardOutputText.innerHTML = `<h8 <span class='fw-bold'> <br> Address: ${park.Address} <br>  City: ${park.City} <br>  State: ${park.State}  <br> Zipcode: ${park.ZipCode}  <br> Phone: ${park.Phone} <br> FAX: ${park.Fax}  <br> </span></h8> `
        btn.innerHTML = `Visit Park`;
        btn.href = `${park.Visit}`;

        resultsOutput.appendChild(CardOutput);
        resultsOutput.appendChild(CardOutputTitle);
        resultsOutput.appendChild(CardOutputText);
        resultsOutput.appendChild(btn);


    }

}







