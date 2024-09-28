
let groceryList = [];

// Add items 
let item1 = {
  name: 'Anjir',
  quantity: 2,
  purchased: false,
  costPerUnit: 14.5,
};
let item2 = {
  name: 'Bananas',
  quantity: 6,
  purchased: false,
  costPerUnit: 5.0,
};
let item3 = {
  name: 'Dragon friuts',
  quantity: 4,
  purchased: false,
  costPerUnit: 6.5,
};

// Add items to the array
groceryList[0] = item1;
groceryList[1] = item2;
groceryList[2] = item3;

// Function to display the grocery list in the HTML
function displayGroceryList() {
  const groceryListDiv = document.getElementById('grocery-list');
  groceryListDiv.innerHTML = '';

  groceryList.forEach((item, index) => {
    if (item) {
      const itemDiv = document.createElement('div');
      const purchasedClass = item.purchased ? 'purchased' : '';

      itemDiv.innerHTML = `
        <p class="${purchasedClass}">Name: ${item.name}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Cost per unit: ${item.costPerUnit}</p>
        <p>Total cost: ${item.quantity * item.costPerUnit}</p>
        <p>Purchased: ${item.purchased}</p>
      `;
      groceryListDiv.appendChild(itemDiv);
    }
  });
}

// Initial display of the grocery list
displayGroceryList();

// Remove an item from the grocery list (setting it to null)
groceryList[1] = null; // Removing Bananas

// View the updated grocery list
console.log('Updated Grocery List:', groceryList);

// Mark an item as purchased (changing the Boolean value)
groceryList[0].purchased = true;

// Add another item to the grocery list
let item4 = {
  name: 'Strawberry',
  quantity: 10,
  purchased: false,
  costPerUnit: 20.5,
};
groceryList[3] = item4;

// View the final grocery list, including the purchase status
console.log('Final Grocery List:', groceryList);

// Update the display after changes
displayGroceryList();

// Add an undefined item to demonstrate its usage
groceryList[4] = undefined;

// View the list with the undefined item
console.log('Grocery List with Undefined Item:', groceryList);

// Total Cost Computation
console.log('Total Cost of Apples: ', groceryList[0].quantity * groceryList[0].costPerUnit);
console.log('Total Cost of Carrots: ', groceryList[2].quantity * groceryList[2].costPerUnit);
