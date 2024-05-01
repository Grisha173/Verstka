const containerClass = 'table';
const rowCLass = 'table-row';
const cellClass = 'table-cell';


let tableField;
const rows = [];
const cells = [];


const createField = () => {
    tableField = document.createElement('div');
    tableField.classList.add(containerClass);
    document.body.appendChild(tableField);

    for (let i = 0; i <= 10; i += 1) {
        rows.push(document.createElement('div'));
        for (let x = 0; x <= 10; x += 1) {
            if (!cells[i]) cells[i] = [];
            cells[i].push(document.createElement('div'));
        }
    }

    console.log('ROWS', rows, 'CELLS', cells);
    
    rows.forEach((row, rowIndex) => {
        cells[rowIndex].forEach((cell, cellIndex) => {
            cell.classList.add('table-cell');
            row.appendChild(cell);
            if (rowIndex || cellIndex) {
                if (cellIndex === 0) cell.innerHTML = rowIndex;
                else if (rowIndex === 0) cell.innerHTML = cellIndex; 
                else cell.innerHTML = (cellIndex) * (rowIndex); 
            } 
        });
        row.classList.add('table-row');
        tableField.appendChild(row);
    });

    
};

window.onload = () => {
    createField();
};