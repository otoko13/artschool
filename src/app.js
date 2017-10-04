import _ from 'lodash';
import './app.less';
import logo from './resources/images/logo.svg';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('bye');

    const myIcon = new Image();
    myIcon.src = logo;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());