import Handlebars from 'handlebars';
import products  from './data.json';
import templateText from './template.hbs'; 

// const template = Handlebars.compile(templateText);
const html = templateText({products});

document.body.innerHTML = html;
