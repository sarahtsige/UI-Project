

const url = "https://www.anapioficeandfire.com/api/houses"


fetch(url)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });





let houses = document.querySelectorAll('.houses')





//Event listener for the click
houses.addEventListener('click', getHouseInfo);


function getHouseInfo(e){
    e.preventDefaut();
}




//array of URLs for images
 let houseImages {

 }
