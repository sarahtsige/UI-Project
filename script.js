

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
  // fetch("https://anapioficeandfire.com/api/houses/362")
  // .then(res => res.json())
  // .then (data => console.log(data.name))
  fetch("https://anapioficeandfire.com/api/houses/362")
  .then(res => res.json())
  .then (data => document.querySelector('.name').innerHTML = "Name:    "+data.name);

 // })
//})




targTab.addEventListener('click', function () {
  console.log('targ el worked!')
})

lanTab.addEventListener('click', function () {
  console.log('lan el worked!')
})

barTab.addEventListener('click', function () {
  console.log('bar el worked!')
})

tyrelTab.addEventListener('click', function () {
  console.log('tyrel el worked!')
})















// for (let i = 0; i <housesNumbers2.length; i++) {
// fetch(baseUrl+housesNumbers2[0])
//   .then(res => {
//     return res.json();
//   })
//   .then(res => {
//     console.log("success   res");
//     console.log(res);
//   })
//   .catch(err => {
//     console.log("something went wrong...", err);
//   });
//   //houses.innerHTML = res[0].name;
// }




//



// function getHouseInfo(e) {
//   e.preventDefaut();
//   const target = document.querySelector(tab.dataset.tabTarget)
//   target.classList.add('active')
// }

//Event listener to tabs for the click
// tabs.forEach(tab => {
//   tab.addEventListener('click', myFunction() => {
//     const target = document.querySelector(tab.dataset.tabTarget)
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('active')
//     })
//     target.classList.add('active')
//   })
// })








