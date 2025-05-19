// Elements
const modal = document.getElementById('orderModal');
const orderText = document.getElementById('orderText');
const closeBtn = modal.querySelector('.close-btn');
const confirmBtn = modal.querySelector('.confirm-btn');
const foodList = document.getElementById('food-list');
const signInForm = document.getElementById('signInForm');

let currentOrder = null;

// Dummy Database
const database = {
  users: [{ username: 'user1', password: 'password1' }],
  foodItems: [
    { name: 'Margherita Pizza', price: 10, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Cheeseburger', price: 8, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Sushi Platter', price: 15, imageUrl: 'https://via.placeholder.com/200' },
  ],
};

// Display Food Items
function displayFoodItems() {
  foodList.innerHTML = '';
  database.foodItems.forEach(item => {
    const foodItem = `
      <div class="food-item">
        <img src="${Burger}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>Price: $${item.price}</p>
        <button class="order-btn" onclick="openOrderModal('${item.name}')">Order Now</button>
      </div>
    `;
    foodList.innerHTML += foodItem;
  });
}

// Open Modal
function openOrderModal(foodName) {
  currentOrder = foodName;
  orderText.textContent = `Are you sure you want to order "${foodName}"?`;
  modal.classList.add('active');
}

// Close Modal
function closeOrderModal() {
  modal.classList.remove('active');
  currentOrder = null;
}

// Confirm Order
confirmBtn.addEventListener('click', () => {
  if (currentOrder) {
    alert(`Thank you for ordering "${currentOrder}"!`);
    closeOrderModal();
  }
});

// Close Modal Events
closeBtn.addEventListener('click', closeOrderModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeOrderModal();
});

// Create Account Functionality
const createAccountForm = document.getElementById('createAccountForm');

createAccountForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get input values
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  // Check if username already exists in localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === newUsername);

  if (userExists) {
    alert('Username already exists. Please choose a different username.');
  } else {
    // Add new user to localStorage
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', newUsername); // Store the current user
    alert('Account created successfully!');

    // Redirect to homepage
    window.location.href = 'homepage.html';
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  // Display a success message (you can replace this with actual email sending logic)
  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset(); // Clear the form
});

// Initialize
displayFoodItems();