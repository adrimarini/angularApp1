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
          age: 2,
          photo: 'http://www.newdesignfile.com/postpic/2010/08/green-snake-cartoon_352065.jpg',
          likes: 0,
          dislikes: 0
        },
        {
          type: "lizard",
          name: "Sal",
          age: 3,
          photo: 'https://i.pinimg.com/originals/f3/5c/de/f35cdeaf6651c6cb242b2fbc8ac89f0b.jpg',
          likes: 0,
          dislikes: 0
        },
        {
          type: "croc",
          name: "Amy",
          age: 6,
          photo: 'https://i.pinimg.com/originals/2c/c3/29/2cc329be86b3c56b45f8af4b8ffd8470.jpg',
          likes: 0,
          dislikes: 0
        }
      ];
    self.mamals = [
      {
        type: "bunny",
        name: "Mr. floofer",
        age: 5,
        photo: 'https://i.pinimg.com/originals/bd/2e/e9/bd2ee9e08816a9a0801f056597230fac.png',
        likes: 0,
        dislikes: 0
      },
      {
        type: "giraffe",
        name: "Sheldon",
        age: 4,
        photo: 'https://previews.123rf.com/images/tigatelu/tigatelu1302/tigatelu130200011/18047043-Cute-giraffe-cartoon-Stock-Vector-drawing.jpg',
        likes: 0,
        dislikes: 0

      },
      {
        type: "elephant",
        name: "Tess",
        age: 15,
        photo: 'http://elephant-pictures.clipartonline.net/_/rsrc/1379429378550/baby-elephant-dark-blue/Cartoon_Elephant_2.png.1379429378324.png?height=320&width=320',
        likes: 0,
        dislikes: 0
      }
    ];

    self.plusOne = function(index) {
        self.reptiles[index].likes++;

    };
}
