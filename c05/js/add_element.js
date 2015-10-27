var newEl = document.createElement('li');                         //Creates a new element and stores it in a variable

var newText = document.createTextNode('quinoa');                  //Creates a text node and stores it in a variable

newEl.appendChild(newText);                                       //Attaches the new text node to the new element

var position = document.getElementsByTagName('ul')[0];             //Finds the position where the new element should be added

position.appendChild(newEl);                                      //Inserts the new element into its position

var newEl2 = document.createElement('li');                        //Creates a new element and stores it in a variable

var newText2 = document.createTextNode('hotdogs');                //Creates a text node and stores it in a variable

newEl2.appendChild(newText2);                                     //Attaches the new text node to the new element

var position2 = document.getElementsByTagName('ul')[0];           //Finds the position where the new element should be added

position2.appendChild(newEl2);                                    //Inserts the new element into its position

var newEl3 = document.createElement('li');
var newText3 = document.createTextNode('pizza');
newEl3.appendChild(newText3);
var position3 = document.getElementsByTagName('ul')[0];
position3.appendChild(newEl3);
