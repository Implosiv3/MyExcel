var selectedCell = function(event) {
    var cell = event.path[0].id;
    
    var indexOfX = cell.indexOf('x');
    var row = cell.substring(0, indexOfX);
    var col = cell.substring(indexOfX + 1, cell.length);
    
    console.log('You selected [' + row + ', ' + col + ']');
    document.getElementById(cell).classList.add("selected");
}