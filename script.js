

let baseUrl = "https://anapioficeandfire.com/api/houses/";
let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('[data-tab-content]');
let houses = document.querySelectorAll('.houses');
let stark = document.querySelector('.housestark');
let targaryen = document.querySelector('.housetargaryen');
let starkTab = document.getElementById('stark');
let targTab = document.getElementById('targaryen');
let lanTab = document.getElementById('lannister');
let barTab = document.getElementById('baratheon');
let tyrelTab = document.getElementById('tyrel');

//array of URLs for images
let housesNumbers = {
  stark: '362',
  targaryen: '378',
  lannister: '229',
  baratheon: '15',
  tyrel: '398',
};

housesNumbers2 = [362, 378, 229, 15, 398]

//capture house name
fetch("https://anapioficeandfire.com/api/houses/362")
  .then(res => res.json())
  .then(data => document.querySelector('.name').innerHTML = "Name:  " + data.name);
//(data => document.querySelector('.region').innerHTML = "Region:  "+data.region);
// })
//})

//get house region
fetch("https://anapioficeandfire.com/api/houses/362")
  .then(res => res.json())
  .then(data => document.querySelector('.region').innerHTML = "Region:  " + data.region);

  //get get coat of arms
fetch("https://anapioficeandfire.com/api/houses/362")
  .then(res => res.json())
  .then(data => document.querySelector('.coat').innerHTML = "Coat of Arms:  " + data.coatOfArms);








function onTabClick(event) {
  let target = event.target.getAttribute("data-tab-target");
  let activeTab = document.querySelector(target);
  let oldActiveTab = document.querySelector('.active');
  //remove old active class
  oldActiveTab.classList.toggle('active');
  //add active class to selecte tab
  activeTab.classList.toggle('active')
}


tabs.forEach(element => element.addEventListener('click', onTabClick));























