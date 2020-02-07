

let baseUrl = "ttps://anapioficeandfire.com/api/houses/";
let tabs = document.querySelectorAll('[data-tab-target]')
let tabContents = document.querySelectorAll('[data-tab-content]')
let houses = document.querySelectorAll('.houses')
let tab


//array of URLs for images
let housesNumbers = {
  stark:'362',
  targaryen:'378',
  lannister:'229',
  baratheon:'15',
  tyrel:'398',
};

housesNumbers2 = [362, 378, 229, 15, 398]


for (let i = 0; i <housesNumbers2.length; i++) {
fetch(baseUrl+housesNumbers[0])
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log("success   res");
    console.log(res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
  //houses.innerHTML = res[0].name;
}




//



// function getHouseInfo(e) {
//   e.preventDefaut();
//   const target = document.querySelector(tab.dataset.tabTarget)
//   target.classList.add('active')
// }

//Event listener to tabs for the click
tabs.forEach(tab => {
  tab.addEventListener('click', myFunction() => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    target.classList.add('active')
  })
})








