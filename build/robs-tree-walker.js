"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobsTreeWalker = void 0;
class RobsTreeWalker {
    constructor() {
        this.walk = (obj) => {
            console.log('Starting walk');
            this.walkElement(null, obj);
            console.log('Walk complete');
        };
        this.walkElement = (key, value) => {
            if (this.isPrimitive(value)) {
                if (!key) {
                    console.log(`Element is not an object or an array. Single value found: '${value}'`);
                }
                else {
                    console.log(`Leaf found. '${key}': '${value}'`);
                }
            }
            else if (Array.isArray(value)) {
                const ar = value;
                if (!key) {
                    console.log('Walking from element root. Found array.');
                }
                else {
                    console.log(`Walking into array with key: '${key}'`);
                }
                for (let idx in ar) {
                    const propAlias = `${key}.${idx}`;
                    const memberElem = ar[idx];
                    this.walkElement(propAlias, memberElem);
                }
            }
            else {
                // value must be an object
                const obj = value;
                if (!key) {
                    console.log('Walking from element root. Found to be an object.');
                }
                else {
                    console.log(`Walking into element object with key: '${key}'`);
                }
                for (let prop in obj) {
                    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
                        continue;
                    }
                    const childElem = obj[prop];
                    this.walkElement(prop, childElem);
                }
            }
        };
        this.isPrimitive = (test) => {
            return test !== Object(test);
        };
    }
}
exports.RobsTreeWalker = RobsTreeWalker;
//# sourceMappingURL=robs-tree-walker.js.map