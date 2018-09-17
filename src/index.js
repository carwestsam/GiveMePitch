import _ from 'lodash';
import Pizzicato from 'pizzicato';

function component() {
    let element = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = playA

    return element;
}

document.body.appendChild(component());

function playA() {
    var sineWave = new Pizzicato.Sound({ 
        source: 'wave', 
        options: {
            frequency: 440
        }
    });
    
    sineWave.play();
}
