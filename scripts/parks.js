"use strict";

window.onload = init;




function init(){
    //FillDropDown
fillDropdownForLocation()
fillDropdownForParkType()

selectedSeachType()

   //Select Button
//    const selectParkTypebtn = document.getElementById("selectParkTypebtn");
//    selectParkTypebtn.onclick = selectParkTypebtnOnClick;

   //Hide and Show Selected Search Options
}




function fillDropdownForLocation(){

const searchLocationList = document.getElementById("searchLocationList");
    let selectLocationOption = document.createElement("option");
    selectLocationOption.value = "";
    selectLocationOption.textContent = "Select State/Territory ..";
    searchLocationList.appendChild(selectLocationOption);
    
    
    let locationLength = locationsArray.length;
    for(let i = 0 ; i < locationLength; i++){
        let locationNewOption = document.createElement("option");
        locationNewOption.value = locationsArray[i];
        locationNewOption.textContent = locationsArray[i];
 
        searchLocationList.appendChild(locationNewOption);
    }
}

function fillDropdownForParkType(){
    const searchParkTypeList = document.getElementById("searchParkTypeList");
    let selectParkTypeOption = document.createElement("option");
    selectParkTypeOption.value = "";
    selectParkTypeOption.textContent = "Select Park Type ..";
    searchParkTypeList.appendChild(selectParkTypeOption);
    
    
    let parkTypeLength = parkTypesArray.length;
    for(let i = 0 ; i < parkTypeLength; i++){
        let parkTypeNewOption = document.createElement("option");
        parkTypeNewOption.value = parkTypesArray[i];
        parkTypeNewOption.textContent = parkTypesArray[i];
 
        searchParkTypeList.appendChild(parkTypeNewOption);
    }


}

//Create a function to display list of options selected by the radio button 
function selectedSeachType(){
    let searchParkTypeList = document.getElementById("searchParkTypeList").style.display = "none";
    let searchLocationList = document.getElementById("searchLocationList").style.display = "none";
   
    let searchLocationRadio = document.getElementById("searchlocationradio").checked;
    let searchParkTypeRadio = document.getElementById("searchparktyperadio").checked;

   if(searchLocationRadio == true){
     searchLocationList.style.display = "block";
     fillDropdownForParkType();
  }
    else if (searchParkTypeRadio == true) {
     fillDropdownForLocation();
     searchParkTypeList.style.display = "block";
    }

}





//Hide\Show Park Type List 
function parkTypeShow(){
  document.getElementById("searchParkTypeList").style.display = 'block';
}

function parkTypeHide(){
    document.getElementById("searchParkTypeList").style.display = 'none';

}

//Hide\Show Location List 

function locationShow(){
  document.getElementById("searchLocationList").style.visibility = "visible";


}

function locationHide(){
    document.getElementById("searchLocationList").style.visibility = "hidden";

}


// Output Park Information 

function displayparksinResults(){

}

function displayparkinResults(){

}

