import Handlebars from "handlebars";
import { products } from "./data.js";
import templateSource from "./template.hbs";

const template = Handlebars.compile(templateSource);
const markup = template(products);

document.body.innerHTML = markup;
