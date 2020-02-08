

let baseUrl = "https://anapioficeandfire.com/api/houses/";
let tabs = document.querySelectorAll('[data-tab-target]');
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
  stark:'362',
  targaryen:'378',
  lannister:'229',
  baratheon:'15',
  tyrel:'398',
};

housesNumbers2 = [362, 378, 229, 15, 398]

//add event listener for stark tab







starkTab.addEventListener('click', function () {
  //test event listener with message to console
  console.log('stark el worked!')
  //generate url for each house
  let houseUrl = baseUrl+housesNumbers2[0];
  console.log(houseUrl);
  //use generated url to get house info
  // fetch(houseUrl).then(res => {
  //   return res.json();
  })

  //capture house name
  fetch("https://anapioficeandfire.com/api/houses/362")
  .then(res => res.json())
  .then(data => document.querySelector('.name').innerHTML = "Name:  "+data.name);
   // (data => document.querySelector('.region').innerHTML = "Region:  "+data.region);
 // })
//})




function onTabClick (event) {
  let activeTabs = document.querySelectorAll(".active");
    //deactivate existing active tab
  for (let i = 0; i < activeTabs.length; i++) {
    activeTabs[i].className = activeTabs[i].className.replace('active', '');
//activate new tab
event.target.parentElement.className +=' active';
}
}

tabs.addEventListener('click', onTabClick, false); 








//ALL EVENT LISTENERS******************
// targTab.addEventListener('click', function () {
//  console.log('targ el worked!')


// lanTab.addEventListener('click', function () {
//   console.log('lan el worked!')
// })

// barTab.addEventListener('click', function () {
//   console.log('bar el worked!')
// })

// tyrelTab.addEventListener('click', function () {
//   console.log('tyrel el worked!')
// })

























