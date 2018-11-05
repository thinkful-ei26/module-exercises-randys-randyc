const store = (function () {

    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
      const hideCheckedItems = false;
      const searchTerm = '';

      // Inside store.js, make a findById method which accept an id parameter, 
      // then uses Array method .find() to return the specific item from store.items
    function findById(id) {
      const object = this.items.find(item => item.id === id);
      console.log(`find by id: ${object}`);
      return object;
    };

    // Inside store.js, make an addItem method, which accepts a name parameter. 
    // Use a try/catch block and the Item module to validate the name and create the item, 
    // then push it to this.items.

    function addItem(name) {
      try {
        Item.validateName(name)
        store.items.push(Item.create(name))
      } catch(error) {
        console.log(`Cannot add item: ${error.messge}`)
      }
    };

    // Make a findAndToggleChecked method, which accepts an id, 
    // then uses this.findById() to fetch the item and toggle 
    // its checked attribute

    function findAndToggleChecked(id) {
      const item = this.findById(id);
      item.checked = !item.checked;
    } 


    // Make a findAndUpdateName method, which accepts id and newName parameters. 
    // Use a try/catch to first validate the name and then use findById() 
    // to fetch the item and update its name. Inside catch, log out 'Cannot update name: {error.message}'

    function findAndUpdateName(id, newName) {
      try {
        validateName(newName);
        const item = this.findById(id);
        item.name = newName;
      } catch {
        console.log('Cannot update name: {error.message}');
      };
    }

    // findAndDelete method, which accepts an id, and then removes the item from this.items.
    //  (HINT: You can use array method .filter() or a combination of .findIndex() and .splice().)

    function findAndDelete(id) {
      console.log('running delete function')
      console.log(this.items)

      store.items = this.items.filter(item => item.id !== id)
    }

    return {
        items, 
        hideCheckedItems, 
        searchTerm,
        findById,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,
        findAndDelete,
      };
      
}() );