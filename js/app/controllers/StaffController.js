function StaffController() {
	var vm = this;

	vm.name = 'George Martin';
	vm.email = 'george@emi.com';
	vm.phone = '(555)555-5555';
}

angular
	.module('app')
	.controller('StaffController', StaffController);
