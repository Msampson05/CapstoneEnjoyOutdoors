"use strict";

window.onload = init;




function init() {
    //FillDropDown
    fillDropdownForLocation()
    fillDropdownForParkType()

    //Select Button
        //Select Button
    const seachbtn = document.getElementById("seachbtn");
    seachbtn.onclick = seachbtnOnClick;

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

//Create a function to display list of options selected by the radio button 

let searchLocationRadio = document.getElementById("searchlocationradio");
let searchParkTypeRadio = document.getElementById("searchparktyperadio");

searchLocationRadio.onchange = selectedSearchType;
searchParkTypeRadio.onchange = selectedSearchType;


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

//Activate search button to output selected results 
function seachbtnOnClick(){
    const locationSearch = document.getElementById("locationSearch");
    let selectedParkSearchType = locationSearch.value;
    if(selectedParkSearchType == fillDropdownForParkType){
        let selectedOutputResult = findParksByParkType(nationalParksArray, selectedParkSearchType); displayparksinResults;
        locationSearch.appendChild(selectedOutputResult);
    }
    else if (selectedParkSearchType = fillDropdownForLocation){
        let selectedOutputResult = findParksbyLocation(nationalParksArray,selectedParkSearchType); displayparksinResults;
        locationSearch.appendChild(selectedOutputResult);
    }




}

//filter parks by parktype 
function findParksByParkType(selectedPark, parktype) {
    let selectedParkResult = []
    const searchParkTypeList = document.getElementById("searchParkTypeList");
    for (let park of nationalParksArray) {
        if (park.LocationName.indexOf(searchParkTypeList.value) != -1) {
            let selectedPark = (park.LocationName, park.LocationID);
            searchParkTypeList.appendChild(selectedParkResult);
        }
        return selectedParkResult;
    }
}

//filter parks by park location
function findParksbyLocation(selectedLocation, location) {
    let selectedLocationResult = []
    const searchLocationList = document.getElementById("searchLocationList");
    for (park in nationalParksArray) {
        if (searchLocationList.value == park.State) {
            let selectedLocation = (park.LocationName, park.LocationID);
            searchLocationList.appendChild(selectedLocationResult)
        }
        return selectedLocationResult;
    }
}

//Create Loop to display results in cards
function displayparksinResults() {
    nationalParksArray.forEach(park => {
        let resultsSection = document.getElementById('resultsSection')

        resultsSection.innerHTML = resultsSection.innerHTML + `div id="resultsSection" class="row">
        <div class="col-3 card" style="width: 18rem;">
            <div class="card-body">
              <h5 id="cardTitle"class="card-title">${park.LocationName}</h5>
              <p id="cardText"class="card-text">${park.Address} ${park.City} ${park.State} ${park.ZipCode} ${park.Phone} ${park.Fax}</p>
              <a href="#" class="btn btn-primary">${park.Visit}</a>
            </div>
          </div>`

    })
}
