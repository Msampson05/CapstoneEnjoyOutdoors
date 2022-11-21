"use strict";

window.onload = init;

function init(){
    // Fill Dropdown for Mountains
    fillMountainsDropwdown();

    //Search button 
    const seachbtn = document.getElementById("seachbtn");
    seachbtn.onclick = seachbtnOnClick;
}

function fillMountainsDropwdown(){
    const searchMountainList = document.getElementById("searchMountainList");
    let selectMountainOption = document.createElement("option");
    selectMountainOption.value = "";
    selectMountainOption.textContent = "Select Mountain ..";
    searchMountainList.appendChild(selectMountainOption);

    for(let mountain of mountainsArray){
        let mountainoption = new Option(mountain.name);
        searchMountainList.appendChild(mountainoption);
    }
}

// Event handler for seach button to output selected mountain into cards 
function seachbtnOnClick(){
    //call elememts needed to fill card information
    const searchMountainList = document.getElementById("searchMountainList");
    const mountainOutputCard = document.getElementById("mountainOutputCard");
    const mountainCardImg = document.getElementById("mountainCardImg");
    const mountainCardTitle = document.getElementById("mountainCardTitle");
    const mountainCardText = document.getElementById("mountainCardText");
    
    mountainOutputCard.classList.replace("hide","show");
    
    for (let mountain of mountainsArray) {
        if (searchMountainList.value == "select") {

        }
        else if (mountain.name == searchMountainList.value){
            mountainCardTitle.innerText =`${mountain.name}`;
            mountainCardText.innerHTML = " <h5> Description: </h5> " + mountain.desc + " <br> <h5> Elevation: </h5> " + mountain.elevation + "<br> <h5> Coordinates: </h5>" + mountain.coords.lat + ", " + mountain.coords.lng;
            mountainCardImg.src = "assests/images/" + mountain.img;
        }
    }
}


