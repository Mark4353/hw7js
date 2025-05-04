import Handlebars from 'handlebars';
import { products } from './data.js';
import templateText from './template.hbs?raw'; 

const template = Handlebars.compile(templateText);
const html = template(products);

document.body.innerHTML = html;
