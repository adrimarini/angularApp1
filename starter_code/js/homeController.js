angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

    function HomeController() {
      var self = this
      self.awesome = true
      self.numbers = [1, 2, 3, 4, 5]
      self.name = 'Adrianna'
      self.age = 23
}
