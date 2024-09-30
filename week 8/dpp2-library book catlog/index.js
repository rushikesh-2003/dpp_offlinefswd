// Library Book Catalog
let bookCatalog = {
    'The Alchemist': { author: 'Paulo Coelho', available: true, copies: 3 },
    'The Fault in Our Stars': {
      author: 'John Green',
      available: false,
      copies: 0,
    },
    'The Hobbit': {
      author: 'J.R.R. Tolkien',
      available: true,
      copies: 5,
    },
  };
  
  // Function to display the current book catalog
  function displayCatalog(catalog) {
    console.log('Current Book Catalog:');
    for (let book in catalog) {
      console.log(
        `${book} by ${catalog[book].author} - Available: ${catalog[book].available}, Copies: ${catalog[book].copies}`
      );
    }
  }
  
  // Function to add a new book to the catalog
  function addBook(catalog, title, author, available, copies) {
    catalog[title] = { author: author, available: available, copies: copies };
    console.log(`${title} has been added to the catalog.`);
  }
  
  // Function to remove a book from the catalog
  function removeBook(catalog, title) {
    if (title in catalog) {
      delete catalog[title];
      console.log(`${title} has been removed from the catalog.`);
    } else {
      console.log(`${title} does not exist in the catalog.`);
    }
  }
  
  // Function to check if a book exists in the catalog
  function isBookInCatalog(catalog, title) {
    return title in catalog;
  }
  
  // Using computed property names to dynamically add properties
  let newBookTitle = 'The Great Gatsby';
  let newBookAuthor = 'F. Scott Fitzgerald';
  bookCatalog[newBookTitle] = { author: newBookAuthor, available: true, copies: 4 };
  
  // Accessing book properties
  console.log('Author of The Alchemist:', bookCatalog['The Alchemist'].author); // Using bracket notation
  console.log(
    'Is The Hobbit available?:',
    bookCatalog['The Hobbit'].available
  ); // Using dot notation
  
  // Adding a new method to the book catalog
  bookCatalog.checkAvailability = function (title) {
    if (this[title]) {
      console.log(
        `${title} is ${this[title].available ? 'available' : 'not available'}.`
      );
    } else {
      console.log(`${title} does not exist in the catalog.`);
    }
  };
  
  // Using the new method
  bookCatalog.checkAvailability('The Fault in Our Stars');
  
  // Using optional chaining to safely access nested properties
  console.log(
    'Copies of The Hobbit:',
    bookCatalog['The Hobbit']?.copies
  );
  console.log(
    'Copies of a non-existent book:',
    bookCatalog['Non Existent Book']?.copies
  );
  
  // Display the initial catalog
  displayCatalog(bookCatalog);
  
  // Add a new book
  addBook(bookCatalog, '1984', 'George Orwell', true, 2);
  
  // Remove a book
  removeBook(bookCatalog, 'The Alchemist');
  
  // Check if a book exists in the catalog
  console.log('Is The Alchemist in the catalog?', isBookInCatalog(bookCatalog, 'The Alchemist'));
  
  // Display the updated catalog
  displayCatalog(bookCatalog);
  
  // Setting metadata for object properties
  Object.defineProperty(bookCatalog['The Hobbit'], 'author', {
    writable: false,
    enumerable: true,
    configurable: false,
  });
  console.log(
    "Metadata for 'author' of 'The Hobbit':",
    Object.getOwnPropertyDescriptor(bookCatalog['The Hobbit'], 'author')
  );
  
  // Trying to modify a non-writable property
  bookCatalog['The Hobbit'].author = 'New Author';
  console.log(
    'Author of The Hobbit after attempting modification:',
    bookCatalog['The Hobbit'].author
  );
  