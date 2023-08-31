// category__start


const categoryGeneralBox = document.querySelector('.category__general__box');
categoryCard.forEach((item,index) => {
  index=index+1;
  const card =`
  <div class="category__inner__box--${index} inner__box">
  <img src="${item.img}" class="inner__box__img">
   
   <div class="inner__box__dropdown dropdown ">
 
    <button class="dropbtn">
     ${item.name}
      <i class='bx bx-chevron-right'></i>
    </button>
    
    <div id="myDropdown" class="dropdown-content">
     <a href="#home">Смартфоны <i class='bx bx-chevron-right'></i></a>
      <a href="#about">Аксессуары для смартфонов и телефонов <i class='bx bx-chevron-right'></i></a>
      <a href="#contact">Смарт-часы <i class='bx bx-chevron-right'></i></a>

      <a href="#home">Фитнес браслеты <i class='bx bx-chevron-right'></i></a>
      <a href="#about">Ремешки для часов и смарт-часов <i class='bx bx-chevron-right'></i></a>
      <a href="#contact">Запчасти для смартфонов <i class='bx bx-chevron-right'></i></a>
      
      
      <a href="#contact">Аксессуары для смартфонов и телефонов <i class='bx bx-chevron-right'></i></a>
    </div>

    <p class="dropdown__text dropdown__text--none">${item.num} подкатегорий </p>
  
   </div>
  </div>
  `
  categoryGeneralBox.innerHTML += card;
})

// category__end


const innerBox = document.querySelectorAll('.inner__box');
innerBox.forEach((item) => {
  item.addEventListener('click', () => {
    myFunction() 
  })
})


// obyavlenya__start

let obyavleniyaGeneralBox = document.querySelector('.obyavleniya__general__box');

obyavleniyaCard.forEach((item,index) => {
  index = index + 1;
  const cardObyavleniya = `
  <div class="obyavleniya__inner__box--${index} obyavleniya__inner">
  <img src="${item.img}" class="obyavleniya__img">
    <p class="obyavleniya__location">${item.location}</p>
    <h3 class="obyavleniya__heading">${item.obyavleniyaHeading}</h3>
    <p class="obyavleniya__timer">${item.time}</p>
    <a class="obyavleniya__tel" href="tel:998712007007">${item.call}</a>
    <p class="obyavleniya__price">${item.price} <span class="obyavleniya__price__span">UZS</span></p>
    </div>
    `
    obyavleniyaGeneralBox.innerHTML += cardObyavleniya;
  })

// obyavlenya__end

// search

function search_section() {
   let input = document.getElementById('searchbar').value
   input=input.toLowerCase();
   let x = document.getElementsByClassName('animals');
     
   for (i = 0; i < x.length; i++) { 
       if (!x[i].innerHTML.toLowerCase().includes(input)) {
           x[i].style.display="none";
       }
       else {
           x[i].style.display="list-item";                 
       }
   }
}

// dropdown

function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 
  
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
  }

