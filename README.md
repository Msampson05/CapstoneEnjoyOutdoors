# CapstoneEnjoyOutdoors
A website to help users search and get information of parks and mountains. 
# Imperial Parks
## Imperial Parks provide a search engine to users
--------------------------
This website was constructed for a capstone project. The purpose is to show understanding of basic html and css language. 
I created core essence of reality, it is my mental health awareness instagram page that I transformed into an ecommerce website.
The products for sale are photos from my Instagram page as we release products of sale by core essence. 
The company started as an instagram page and moved into an online store. This website is functional but not ready to use. 
---
The pages include:
 * Homepage
 * Parks
 * Mountain Page 

This an interesting JavaScript that I wrote. It allows you to hover and create a color for your hover effect:
```
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

```
And to add an image, try this: 
![Image](assests/images/capstone2ReadMe.JPG "icon")
![Image](assests/images/capstone2ReadMe2.JPG "icon")
![Image](assests/images/capstone2ReadMe3.JPG "icon")
![Image](assests/images/capstone2ReadMe4.JPG "icon")
