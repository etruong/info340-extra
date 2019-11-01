const SHOPPING_LIST = {
    items: [
        {name: "apple", quantity: 5, price: 1.00},
        {name: "broccoli", quantity: 2, price: 0.50},
        {name: "sugar", quantity: 1, price: 5.00},
        {name: "rice", quantity: 1, price: 10.00}
    ],
    totalPrice: 0,
    totalNumItems: 0
}

const INPUTS = {
    nameInput: "",
    quantityInput: "",
    priceInput: ""
}

// Create a ul list with the classname 'shopping-list' and append to the container
// div


// Create a function called createListItem that creates and returns one list item with data found in the 
// SHOPPING_LIST item above it should display as the content, the name of product
// the number of items needed and the total price...
// Formated as "{product} - {quantity} * {price} = {total value}"

// Using the function createListItem, generate the shopping-list

// Create an on change event handler for each input where each input on change
// is setting the INPUTS constant values to the user input given
// For better UX, make sure that when the the input state data changes, the
// input value changes as well sharing the input in the state data

// Create an on click event handler for the add button that adds a new
// shopping list with the data i the inputs; make sure when the add button is pressed
// the inputs are cleared (for both input value and the state data)

// Check to see if the function works by adding 2 items


