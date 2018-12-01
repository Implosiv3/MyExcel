var cellText = null;
var textingOnCell = {
    row: null,
    column: null
};

var selectedCell = function(event) {
    var cell = event.path[0].id;
    
    var indexOfX = cell.indexOf('x');
    var row = cell.substring(0, indexOfX);
    var col = cell.substring(indexOfX + 1, cell.length);

    textingOnCell.row = row;
    textingOnCell.column = col;
    
    console.log('You selected [' + row + ', ' + col + ']');
    document.getElementById(cell).classList.add("selected");
}

var initTable = function(rows, columns) {
    var table = document.getElementById('excel');
    cellText = [rows];
    for (var i = 0; i < rows; i++) {
        cellText[i] = new Array(columns);
    }

    var tableContent = '';
    for (var row = 0; row < rows; row++) {
        tableContent += '<tr>';
        for (var column = 0; column < columns; column++) {
            tableContent += '<td id="' + row + 'x' + column + '" onclick="selectedCell(event)"></td>';
            cellText[row][column] = "";
        }
        tableContent += '</tr>';
    }

    table.innerHTML = tableContent;
}

var playSong = function() {
    var audio = document.getElementById('audio1');
    var icon = document.getElementById('playIcon');

    if (audio.paused) {
        audio.play();
        icon.classList.add('fa-pause');
        icon.classList.remove('fa-play');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        
    }
}

var writeCharOnCell = function(key, row, column) {
    cellText[row][column] += key;
    document.getElementById(row + 'x' + column).textContent = cellText[row][column];
}

window.addEventListener('load', function() {
    initTable(50, 30);

    document.getElementById('headphones').addEventListener('click', function() {
        playSong();
    });

    document.addEventListener('keydown', function(event) {
        if (textingOnCell.row != null && textingOnCell.column != null) {
            //cellText[textingOnCell.row][textingOnCell.column] += 'a';
            if (event.key == 'Enter') {
                textingOnCell.row = null;
                textingOnCell.column = null;
            } else if (event.key == 'Backspace' || event.key == 'Shift' || event.key == 'Control') {
                console.log('nothing');
            } else {
                console.log('Write on cell [' + textingOnCell.row + ', ' + textingOnCell.column + ']');
                writeCharOnCell(event.key, textingOnCell.row, textingOnCell.column);
            }
            
        }
    })
})