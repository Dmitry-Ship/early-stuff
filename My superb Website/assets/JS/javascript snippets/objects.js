$(function () {
  function coordinates() {
    this.latitude = 0
    this.longitude = 0
  }
/////First///////
  Object.defineProperty(coordinates.prototype, "pointPos", {
    get: function () {
      return 'lat: '+ this.latitude + ' long: ' + this.longitude
    },
    set: function (coords) {
      var parts = coords.toString().split(', ')
      this.latitude = parts[0] || ""
      this.longitude = parts[1] || ''
    }
  })
  var aPoint = new coordinates()
  aPoint.pointPos = '50, 69'
  console.log(aPoint.pointPos);


/////Second///////
  Object.__defineGetter__.call(coordinates.prototype, 'getpos', function () {
    return 'lat: '+ this.latitude + ' long: ' + this.longitude
  })
  Object.__defineSetter__.call(coordinates.prototype, 'setpos', function (coords) {
    var parts = coords.toString().split(',')
    this.latitude = parts[0] || ""
    this.longitude = parts[1] || ''
  })
  var newPoint = new coordinates()
  newPoint.setpos = '100,200'
  console.log(newPoint.getpos);


/////third////
  var address = {
    Counry: 'England',
    City: 'London',
    get getAddress(){
      return this.Country + " " + this.City
    },
    set setAddress(newAddress){
      var parts = newAddress.toString().split(', ')
      this.Country = parts[0] || " "
      this.City = parts[1] || ""

    }
  }
  address.setAddress = 'USA, Seattle'
  console.log(address.getAddress);

///////////////////decorator///////////////

  function pizza(price) {
    this.price = price;
    this.getInfo = function () {
      return this.price
    }
  }

  function extraChesse(p) {
    var oldPrice = p.price
    p.price = oldPrice + 2
  }

  var myPizza = new pizza(10)
  extraChesse(myPizza)

///////////////factory////////////////

  function dinosaur(desc) {
    this.type = 'dinosaur'
    this.feather = desc.feather || false
    this.size = desc.size || 'big'
    this.predator = desc.predator || true
  }
  function mammal(desc) {
    this.type = 'mammal'
    this.feather = desc.feather || false
    this.size = desc.size || 'big'
    this.predator = desc.predator || true
  }

  function evolution() {
    this.evolve = function (desc) {
      var animal = null;
      if (desc.type === 'dinosaur') {
        animal = dinosaur;
      } else if (desc.type === 'mammal') {
        animal = mammal;
      } else {
        return false
      }
      return new animal(desc)
    }
  }

  var myEvolution = new evolution()

  var T_rex = myEvolution.evolve({
    type: 'dinosaur',
    feather: false,
    size: 'huge',
    predator: true
  })
  var rabbit = myEvolution.evolve({
    type: 'mammal',
    feather: false,
    size: 'small',
    predator: false
  })

/////////////observable//////////////

  function Observable() {
    this.subscribers = []
    this.subscribe = function (subscriber) {
      this.subscribers.push(subscriber)
    }
    this.unsubscribe = function (unsubscriber) {
      for(i=0;i<this.subscribers.length; i++) {
        if (this.subscribers[i] === unsubscriber ) {
          this.subscribers.splice(i, 1);
          return unsubscriber.name
        }
      }
    },
    this.publish = function (data) {
      for (var i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i].receiveData(data)
      }
    }
  }

  var OrganFanny = {
    name: "fanny",
    receiveData: function (data) {
      console.log(this.name + 'reveived your info' + data);
    }
  }

  var observable = new Observable()
  observable.subscribe(OrganFanny)
  observable.publish('IBM at $1')
})
