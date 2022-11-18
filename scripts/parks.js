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

function getSelectedSearchTypeValue(){
 
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
       //do something similar to what we did below, using location instead of parktype
    }
    if (selectedSearchTypeValue == "parktype") {
        let parktype = getCurrentlySelectedParkTypeFromDropdown();
       filteredResults = findParksByParkType(nationalParksArray, parktype );
    }

    displayparksinResults(filteredResults);

    
    //let parkTypeSearch = findParksByParkType(LocationName, nationalParksArray);
    //let locationTypeSeach = findParksbyLocation(State, nationalParksArray);
    // let selectedOutput = displayparksinResults();

    // if(selectedSearchCategory == searchParkTypeRadio.checked){
    //     parkTypeSearch
    // }

 

}

function getCurrentlySelectedParkTypeFromDropdown(){
        //todo: figure out the selected value of the parktype dropdown and return it
          
}



//filter parks by parktype 
function findParksByParkType(inputParks, inputParktype) {
    let outputParks = []
    for (let park of inputParks) {
       
        if (park.LocationName.indexOf(inputParktype) != -1) {
           outputParks.push(park) ;
        }
    }

    return outputParks;
}

//todo: rewrite the below method using the patterns seen above in findParksByParkType
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


// Output Park Information 

function displayparksinResults(inputParks) {

    for(let park of inputParks){
        console.log(park);
    }

    //loop through inputparks and show each of them by creating a new HTML element,
    //adding it as a child element to the resultsOutput div.




    // const parkCardTitle = document.getElementById("parkCardTitle");
    // const parkCardText = document.getElementById("parkCardText");
    // const parkVisitLink = document.getElementById("parkVisitLink");
    // const searchParkTypeList = document.getElementById("searchParkTypeList");
    // const searchLocationList = document.getElementById("searchLocationList");

    // for (let displayPark of nationalParksArray ) {
    //     if(searchParkTypeList.value == "select"){
    //         parkCardTitle.innerText = displayPark.LocationName;
    //         parkCardText.innerHTML = "Address : " + displayPark.Address  + "City:" + displayPark.City + "State " + displayPark.State + "ZipCode : " + displayPark.ZipCode;
    //         parkVisitLink.innerHTML = "Visit" + displayPark.Visit;
    //     }
    //     else if(searchLocationList.value == "select" ){
    //         parkCardTitle.innerText = displayPark.LocationName;
    //         parkCardText.innerHTML = "Address : " + displayPark.Address  + "City:" + displayPark.City + "State " + displayPark.State + "ZipCode : " + displayPark.ZipCode;
    //         parkVisitLink.innerHTML = "Visit" + displayPark.Visit;

    //     }
    // }

    
}





