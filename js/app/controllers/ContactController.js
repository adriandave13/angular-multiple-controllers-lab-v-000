function ContactController() {
  var vm = this;

  vm.name = 'John';
	vm.email = 'john@beatles.com';
	vm.phone = '(555)555-5555';

  this.changeName = function () {
    vm.name = 'Paul'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
