
// Budget Controller
var budgetController = (function() {

})();


// UI Controller
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDomstrings: function() {
      return DOMstrings;
    }
  };

})();







//  Global App Controller
var controller = (function(budgetCtrl, UICtrl) {



  var  setupEventListeners = function() {
    var  DOM = UICtrl.getDomstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  }



  var ctrlAddItem = function() {

    // 1. Get filled input data
    var input = UICtrl.getInput();

    // 2. Add tje item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget__title

    // 5. Display the budget on the UI
  }

  return {
    init: function() {
      console.log("App started");
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();
