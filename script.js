

const url = "https://www.anapioficeandfire.com/api/houses?page=2&pageSize=50";
const tabs = documents.querySelectorAll('data-tab-target')

fetch(url)
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





let houses = document.querySelectorAll('.houses')
houses.innerHTML = res[0].name;



function getHouseInfo(e) {
  e.preventDefaut();
  const target = document.querySelector(tab.dataset.tabTarget)
  target.classList.add('active')
}

//Event listener to tabs for the click
tabs.forEach(tab => {
  tab.addEventListener('click', getHouseInfo);
})





//array of URLs for images
let houseImages = {
  stark:'https://wallpaperboat.com/wp-content/uploads/2019/04/game-of-thrones-sigil-gerb-wallpaper-hd-picture-032.jpg.jpg',
  targaryen:'https://wallpaperboat.com/wp-content/uploads/2019/04/game-of-thrones-sigil-gerb-wallpaper-hd-picture-006.jpg',
  lannister:'https://wallpaperboat.com/wp-content/uploads/2019/04/game-of-thrones-sigil-gerb-wallpaper-hd-picture-014.jpg',
  baratheon:'https://wallpaperboat.com/wp-content/uploads/2019/04/game-of-thrones-sigil-gerb-wallpaper-hd-picture-023.jpg',
  tyrel:'',
};



