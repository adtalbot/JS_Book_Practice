var startItem = document.getElementById('two');           //Selects the starting point element
var prevItem = startItem.previousSibling;                 //Finds the starting elements previous sibling
var nextItem = startItem.nextSibling;                     //Finds the starting elements next sibling

prevItem.className = 'complete';
nextItem.className = 'cool';
