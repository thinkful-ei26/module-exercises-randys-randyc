
'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

$(document).ready(function() {

  console.log('>>>> hello from index.js');

  const itemNames = ['','apples', 'pears' ];

  itemNames.forEach(name => {
  try {
    Item.validateName(name);
    store.items.push(Item.create(name));
  } catch(error) {
    console.log('Cannot add item: ' + error.message);
  }
  });

  shoppingList.bindEventListeners();
  shoppingList.render();


});

 
