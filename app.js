
// Budget Controller
var budgetController = (function() {



})();

// UI Controller
var UIController = (function() {



})();

//  Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

    // 1. Get filled input data

    // 2. Add tje item to the budget controller

    // 3. Add the item to the UI

    // 4. Calculate the budget__title

    // 5. Display the budget on the UI
    
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
