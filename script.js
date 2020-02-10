

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
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(element => element.addEventListener('click', onTabClick));
}

function populateData (data) {
    let activeTab = document.querySelector('.active');
    activeTab.querySelector('.name').innerHTML = "Name:  " + data.name;
    activeTab.querySelector('.region').innerHTML = "Region:  " + data.region;
    activeTab.querySelector('.coatOfArms').innerHTML = "Coat of Arms:  " + data.coatOfArms;
    activeTab.querySelector('.words').innerHTML = "Words: " + data.words;
}

function getHouseInfo(houseNo) {
  //capture house name
  return fetch(`https://anapioficeandfire.com/api/houses/${houseNo}`)
  //convert data to JSON
    .then(res => res.json())
  //push data to function populateData
    .then(data => populateData(data))
}

init();






















