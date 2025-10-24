const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "hotDrink",
        price: 10.99,
        img:
            "images/menu-images/coffee-4159024_1280.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "iceCoffee",
        price: 7.99,
        img:
            "images/menu-images/icecoffee.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "herbalTea",
        price: 8.99,
        img:
            "images/menu-images/herbaltea.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    
];

const allButtonDOM = document.querySelector('#All');
const hotDrinkButtonDOM = document.querySelector('#hotDrink');
const iceCoffeeButtonDOM = document.querySelector('#iceCoffee');
const herbalTeaDOM = document.querySelector('#herbalTea');
const MenuItemsDOM = document.querySelector('.menu-container');
const buttons = document.querySelectorAll('.selectable-btn');


menu.forEach(item => {
    MenuItemsDOM.innerHTML += `
            <div class="card mx-5 my-5" style="width: 18rem;">
                <img src="${item.img}" style="height: 250px; object-fit: cover;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                </div>
            </div>`;
})

allButtonDOM.addEventListener('click', function () {
    allMenu();
});

hotDrinkButtonDOM.addEventListener('click', function () {
    filterForCategori('hotDrink');
});

iceCoffeeButtonDOM.addEventListener('click', function () {
    filterForCategori('iceCoffee');
});

herbalTeaDOM.addEventListener('click', function () {
    filterForCategori('herbalTea');
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Önce tüm butonlardan 'selected' sınıfını kaldır
      buttons.forEach(btn => btn.classList.remove('selected'));
      
      // Tıklanan butona 'selected' sınıfını ekle
      this.classList.add('selected');
    });
  });

function filterForCategori(category){

    if(MenuItemsDOM.innerHTML){
     MenuItemsDOM.innerHTML = '';
    }
    const filterArray = menu.filter(item => item.category === category);
    filterArray.forEach(item => {
         MenuItemsDOM.innerHTML += `
            <div class="card mx-5 my-5" style="width: 18rem;">
                <img src="${item.img}" style="height: 250px; object-fit: cover;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                </div>
            </div>`;
    })
    
 }
 
 function allMenu(){
   if(MenuItemsDOM.innerHTML){
     MenuItemsDOM.innerHTML = '';
   } 
     menu.forEach(item => {
       MenuItemsDOM.innerHTML += `
            <div class="card mx-5 my-5" style="width: 18rem;">
                <img src="${item.img}" style="height: 250px; object-fit: cover;" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                </div>
            </div>`;
     })
 
 }