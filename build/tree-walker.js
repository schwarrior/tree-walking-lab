"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeWalker = void 0;
class TreeWalker {
    constructor() {
        this.walk = (obj) => {
            this.stack = new Array();
            console.log('Starting walk');
            const rootElem = { key: null, value: obj, parent: null };
            this.walkElement(rootElem, this.stackElement);
            console.log('Walk complete');
            console.log('');
            console.log('Stack values:');
            console.dir(this.stack);
        };
        this.stack = [];
        this.stackElement = (elem) => {
            this.stack.push(elem);
        };
        this.walkElement = (elem, elementAction) => {
            elementAction(elem);
            if (this.isPrimitive(elem.value)) {
                if (!elem.key) {
                    console.log(`Element is not an object or an array. Single value found: '${elem.value}'`);
                }
                else {
                    console.log(`Leaf found. '${elem.key}': '${elem.value}'`);
                }
            }
            else if (Array.isArray(elem.value)) {
                const ar = elem.value;
                if (!elem.key) {
                    console.log('Walking from element root. Found array.');
                }
                else {
                    console.log(`Walking into array with key: '${elem.key}'`);
                }
                for (let idx in ar) {
                    const propAlias = `${elem.key}.${idx}`;
                    const memberVal = ar[idx];
                    const childElem = { key: propAlias, value: memberVal, parent: ar };
                    this.walkElement(childElem, elementAction);
                }
            }
            else {
                // value must be an object
                const obj = elem.value;
                if (!elem.key) {
                    console.log('Walking from element root. Found to be an object.');
                }
                else {
                    console.log(`Walking into element object with key: '${elem.key}'`);
                }
                for (let prop in obj) {
                    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
                        continue;
                    }
                    const childVal = obj[prop];
                    const childElem = { key: prop, value: childVal, parent: obj };
                    this.walkElement(childElem, elementAction);
                }
            }
        };
        this.isPrimitive = (test) => {
            return test !== Object(test);
        };
    }
}
exports.TreeWalker = TreeWalker;
//# sourceMappingURL=tree-walker.js.map