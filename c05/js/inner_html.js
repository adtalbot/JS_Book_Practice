var firstItem = document.getElementById('one');     //Stores the first list item in a variable

var itemContent = firstItem.innerHTML;              //Gets the content of the first list item

firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';   //Updates the content of the first list item so it is a link
