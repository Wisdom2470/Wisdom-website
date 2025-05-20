// Dummy Database for Food Items
const foodItems = [
  { name: 'Burger', price: 10, imageUrl: 'BURGER.webp' },
  { name: 'Fried Rice', price: 8, imageUrl: 'Fried-Rice.jpg' },
  { name: 'Jollof Rice', price: 15, imageUrl: 'Jollof-rice.jpg' },
  { name: 'Egusi', price: 12, imageUrl: 'Egusi.jpeg' },           // New item
  { name: 'Red Rice', price: 9, imageUrl: 'Red Rice.jpeg' }, // New item
  { name: 'Moi Moi', price: 7, imageUrl: 'Moi Moi.avif' }, 
  { name: 'Chicken and Chips', price: 9, imageUrl: 'Chicken and Chips.webp' }, // New item
  { name: 'Fufu', price: 7, imageUrl: 'Fufu.jpeg' },        // New item
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
  foodItems.forEach(item => {
    const foodItem = `
      <div class="food-item">
        <img src="${item.imageUrl}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>Price: $${item.price}</p>
        <button class="order-btn" data-name="${item.name}" data-price="${item.price}">Order Now</button>
      </div>
    `;
    foodList.innerHTML += foodItem;
  });

  // Add event listeners to "Order Now" buttons
  const orderButtons = document.querySelectorAll('.order-btn');
  orderButtons.forEach(button => {
    button.addEventListener('click', handleOrder);
  });
}

// Handle Order Button Click
function handleOrder(event) {
  const button = event.target;
  const foodName = button.getAttribute('data-name');
  const foodPrice = button.getAttribute('data-price');

  // Optionally show a confirmation
  alert(`You have ordered: ${foodName} for $${foodPrice}. Thank you!`);

  // Redirect to the rating page
  window.location.href = "Foodie.html"; // Change this to your actual rating page filename if different
}

// Initialize
displayFoodItems();
