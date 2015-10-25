/* The script is placed inside an immediately invoked function expression (IIFE) which helps protect the scope of variables */
/* Part One: Create hotel object and write out the offer details */

(function() {                                                                   //Creates a hotel object using object literal syntax
  var hotel = {
    name: 'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }

  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = '$' + hotel.offerPrice();

/* Part Two: Calculate and write out the expiry details for the offer */
  var expiryMsg;
  var today;
  var elEnds;

  function offerExpires(today) {
    var weekFromToday, date, day, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);                        //Calculates week from today in milliseconds
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];                                     //Looks for day of the week of weekFromToday in the array dayNames
    date = weekFromToday.getDate();                                             //Returns day of the month
    month = monthNames[weekFromToday.getMonth()];                               //Looks for month of the year of weekFromToday in the array monthNames
    year = weekFromToday.getFullYear();                                         //Gets year from weekFromToday  

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);

}());
