import _ from 'lodash';
import './general.less';
import logo from './logo.svg';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = logo;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());