let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 7000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}  



 // meals
const menuData = {
  entrees: [
      { name: "Chicken Fettuccine Alfredo", image: "entree_page_pasta.jpeg" },
      { name: "Salmon with Asparagus", image: "menu_salmon.jpeg" },
      {name: "Beer Cheese Soup", image: "entree_page_soup.jpeg"},
      
  ],
  desserts: [
      { name: "French-Toast", image: "entree_page_frenchtoast.jpg" },
      { name: "Apple Cobbler", image: "dessert_page_pie.jpeg" },
      {name: "Vanilla Ice Cream", image: "menu_Desert.jpeg"}
      
  ],
  'snacks': [
      { name: "Chocolate Chip Cookie", image: "dessert_page_cookies.jpeg" },
      { name: "Protein Bar", image: "drink_page_proteinbar.jpeg" },
      
  ]
};

// Function to generate the list of meals
function generateMenu(category) {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = ''; 

  const meals = menuData[category];
  if (meals) {
      meals.forEach(meal => {
          const mealElement = document.createElement('div');
          mealElement.classList.add('meal');
          mealElement.innerHTML = `
              <img src="${meal.image}" alt="${meal.name}" class="menu-image">
              <p>${meal.name}</p>
          `;
          menuContainer.appendChild(mealElement);
      });
  }
}


const menuCategories = document.querySelectorAll('.menu-category');
menuCategories.forEach(category => {
  category.addEventListener('click', () => {
      const categoryName = category.dataset.category;
      generateMenu(categoryName);
  });
});

