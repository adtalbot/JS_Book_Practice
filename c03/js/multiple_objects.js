function Hotel(name, rooms, booked) {                                           /* Constructor function defines a template for hotel objects */
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 40, 25);                                      /* Creates a new instance of the hotel object */
var parkHotel = new Hotel('Park', 120, 77);                                     /* Creates a new instance of the hotel object */

var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();

var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();

var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;
