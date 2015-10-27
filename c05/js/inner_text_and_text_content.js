var firstItem = document.getElementById('one');                                 //Finds first list item
var showTextContent = firstItem.textContent;                                    //Gets value of textContent
var showInnerText = firstItem.innerText;                                        //Gets value of innerText

//Show the content of these two properties at the end of the list

var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';                                      //Updates the first line item
