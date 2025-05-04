import Handlebars from 'handlebars';
import products  from './data.json';
import templateText from './template.hbs'; 

const html = templateText({products});

document.body.innerHTML = html;
