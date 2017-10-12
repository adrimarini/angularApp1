angular.module('IntroToAngularApp')
    .controller('AnimalController', AnimalController);

    function AnimalController() {
      var self = this
      self.awesome = true
      self.zooName = "San Francisco Zoo"
      self.reptiles = [
        {
          type: "snake",
          name: "Henry",
          age: 2
        },
        {
          type: "lizard",
          name: "Sal",
          age: 3
        },
        {
          type: "croc",
          name: "Amy",
          age: 6
        }
      ];
    self.mamals = [
      {
        type: "bunny",
        name: "Mr. floofer",
        age: 5
      },
      {
        type: "giraffe",
        name: "Sheldon",
        age: 4

      },
      {
        type: "elephant",
        name: "Tess",
        age: 15
      }
    ];

}
