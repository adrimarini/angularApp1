// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
	.controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController() {
	var self = this
	self.awesome = true
	self.numbers = [4, 8, 15, 16, 23, 42]
	self.miirkat = [{name: "Mike", hair: "long"}, {name: "Ira", hair: "beard"}, {name: "Kate", hair: "bob"}]
	self.miirkatDesc = "Team work makes the dream work!"
}