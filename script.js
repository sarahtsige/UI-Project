

function onTabClick(event) {
  let target = event.target.getAttribute("data-tab-target");
  let id = event.target.getAttribute("data-id");
  let activeTab = document.querySelector(target);
  let oldActiveTab = document.querySelector('.active');
  //remove old active class
  oldActiveTab.classList.toggle('active');
  //add active class to selected tab
  activeTab.classList.toggle('active');
  getHouseInfo(id);
}

function init() {

  //selet tabs
  let tabs = document.querySelectorAll('.tab');
  //add event listener for each tab
  tabs.forEach(element => element.addEventListener('click', onTabClick));
}

function populateData (data) {
  //select active tab
    let activeTab = document.querySelector('.active');
    //update inner HTML for active tab when clicked
    activeTab.querySelector('.name').innerHTML = "Name:  " + data.name;
    activeTab.querySelector('.region').innerHTML = "Region:  " + data.region;
    activeTab.querySelector('.coatOfArms').innerHTML = "Coat of Arms:  " + data.coatOfArms;
    //conditional statement to populate words only when there is no content in HTML
    //API did not have words for House Baratheon
    if (activeTab.querySelector('.words').innerHTML == ""){
      activeTab.querySelector('.words').innerHTML = "Words: " + data.words;
    }
}

function getHouseInfo(houseNo) {
  //capture house info
  return fetch(`https://anapioficeandfire.com/api/houses/${houseNo}`)
  //convert data to JSON
    .then(res => res.json())
  //push data to function populateData
    .then(data => populateData(data))
}

init();






















