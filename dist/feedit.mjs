const newInput = (type, name) => {
    return {
        type: type,
        name: name,
        label: name,
        placeholder: name,
    };
};
const formEls = [
    newInput('email', 'contact'), newInput('textarea', 'feedback'),
];
var PosX;
(function (PosX) {
    PosX["TOP"] = "top";
    PosX["BOTTOM"] = "bottom";
})(PosX || (PosX = {}));
var PosY;
(function (PosY) {
    PosY["RIGHT"] = "right";
    PosY["LEFT"] = "left";
})(PosY || (PosY = {}));
export const Pos = Object.assign(Object.assign({}, PosX), PosY);
const cEl = (tag) => (id) => {
    const el = document.createElement(tag);
    if (typeof (id) !== 'undefined') {
        el.id = id;
    }
    return el;
};
const cDiv = cEl('div');
const cButton = cEl('button');
const cInput = cEl('input');
const cInputx = (input) => {
    const el = cInput(input.name);
    el.type = input.type, el.name = input.name;
    if (input.placeholder !== null) {
        el.placeholder = input.placeholder;
    }
    return el;
};
const cForm = (hook) => {
    const form = cEl('form')('feedit-form');
    form.action = hook;
    form.method = 'POST';
    const inputs = formEls.map(cInputx);
    inputs.map(it => form.appendChild(it));
    const button = cInput('submit');
    button.value = 'submit';
    button.type = 'button';
    form.appendChild(button);
    return form;
};
export class Feedit {
    constructor(config) {
        const button = cButton('feedit-button');
        button.innerText = "Feedback";
        config.position.map(it => button.classList.add(`feedit-pos-${it}`));
        document.body.appendChild(button);
        const form = cForm(config.hook);
        form.dataset['state'] = 'hidden';
        button.onclick = async () => {
            form.dataset['state'] = 'visible';
        };
        document.body.appendChild(form);
    }
}
