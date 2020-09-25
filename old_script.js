/* Function Declarations */

/* Draws */
function blacken(e) {
    e.target.style.backgroundColor = 'black';
};

/* Creates the drawing space */
function drawBox(e) {
    e.preventDefault();
    const container = document.createElement('div');
    const height = heightInput.value;
    const width = widthInput.value;
    container.setAttribute('id', 'container');
    container.setAttribute('style', (`border: 3px solid black;
                                      flex: 0 0 auto;
                                      max-width: ` + width + '0 px;'));
    // makes the div-grid
    for (let i = 1; i <= width; i++) {
        const divi = document.createElement('div');
        divi.setAttribute('id',('row-'+i));
        divi.setAttribute('style', (`display: flex;
                                justify-content: space-around;
                                margin: 0;
                                padding: 0;
                                `));
        for (let j = 1; j <= height; j++) {
            const divj = document.createElement('div');
            divj.setAttribute('id',('column'+j));
            divj.classList.add('cell');
            divj.setAttribute('style', `flex-grow: 1;
                                    margin: 0;
                                    padding: 0;
                                    min-witdh: 10px;
                                    min-height: 10px;`);
            divi.appendChild(divj);
        };
        container.appendChild(divi);
    };
    const main = document.getElementById('main')
    main.appendChild(container);

    // make drawing happen
    const cells = document.getElementsByClassName('cell');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', blacken);
    };
};

/* program */
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const form = document.getElementById('form');

form.addEventListener('submit', drawBox);
