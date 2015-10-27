var itemFour = document.getElementById('four');
var elText = itemFour.firstChild.nextSibling.nodeValue;
elText = elText.replace('vinegar', 'ballsack');
itemFour.firstChild.nextSibling.nodeValue = elText;
