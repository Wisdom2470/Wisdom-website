// Dummy Database for Food Items
const foodItems = [
  { name: 'Burger', price: 10, imageUrl: 'BURGER.webp', description: 'A juicy grilled burger with fresh lettuce, tomato, and cheese.' },
  { name: 'Fried Rice', price: 8, imageUrl: 'Fried-Rice.jpg', description: 'Delicious fried rice with vegetables and your choice of protein.' },
  { name: 'Jollof Rice', price: 15, imageUrl: 'Jollof-rice.jpg', description: 'Classic West African jollof rice, spicy and flavorful.' },
  { name: 'Egusi', price: 12, imageUrl: 'Egusi.jpeg', description: 'Traditional melon seed soup served with pounded yam.' },
  { name: 'Red Rice', price: 9, imageUrl: 'Red Rice.jpeg', description: 'Savory red rice cooked with tomatoes and spices.' },
  { name: 'Moi Moi', price: 7, imageUrl: 'Moi Moi.avif', description: 'Steamed bean pudding, soft and tasty.' },
  { name: 'Chicken and Chips', price: 9, imageUrl: 'Chicken and Chips.webp', description: 'Crispy fried chicken served with golden fries.' },
  { name: 'Fufu', price: 7, imageUrl: 'Fufu.jpeg', description: 'Soft, stretchy fufu served with your favorite soup.' }
];

// Display Welcome Message
const username = localStorage.getItem('currentUser'); // Retrieve the username from localStorage
const welcomeMessage = document.getElementById('welcomeMessage');
if (username) {
  welcomeMessage.textContent = `Welcome, ${username}!`;
}

// Display Food Items
const foodList = document.getElementById('food-list');
function displayFoodItems() {
  foodList.innerHTML = ""; // Clear previous items
  foodItems.forEach((item, index) => {
    const foodItem = `
      <div class="food-item">
        <img src="${item.imageUrl}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>Price: $${item.price}</p>
        <button class="order-btn" data-index="${index}">Order Now</button>
      </div>
    `;
    foodList.innerHTML += foodItem;
  });

  // Add event listeners to "Order Now" buttons
  const orderButtons = document.querySelectorAll('.order-btn');
  orderButtons.forEach(button => {
    button.addEventListener('click', showProductModal);
  });
}

// Modal logic
const modal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalOrderBtn = document.getElementById('modalOrderBtn');

function showProductModal(e) {
  const index = e.target.getAttribute('data-index');
  const item = foodItems[index];
  modalImage.src = item.imageUrl;
  modalImage.alt = item.name;
  modalName.textContent = item.name;
  modalPrice.textContent = `Price: $${item.price}`;
  modalDescription.textContent = item.description;
  modal.classList.add('active');

  // Update the modal order button logic
  modalOrderBtn.onclick = function() {
    // Optional: Show a thank you message before redirect
    modalOrderBtn.textContent = "Processing...";
    setTimeout(() => {
      modal.classList.remove('active');
      window.location.href = "Foodie.html"; // Redirect to your rating page
    }, 800); // Short delay for user feedback
  };
}

closeModalBtn.onclick = function() {
  modal.classList.remove('active');
};

// Optional: Close modal when clicking outside content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
};

// Initialize
displayFoodItems();
