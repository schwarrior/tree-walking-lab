"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobsTreeWalker = void 0;
class RobsTreeWalker {
    constructor() {
        this.walkObject = (obj) => {
            console.log('starting walk');
            this.walk(null, obj);
            console.log('walk complete');
        };
        this.walk = (key, obj) => {
            if (Array.isArray(obj)) {
                if (!key) {
                    console.log('Analyzing array object root');
                }
                else {
                    console.log(`Analyzing array with key: '${key}'`);
                }
                const ar = obj;
                for (let idx in ar) {
                    console.log(`Analyzing '${key}' array member at index ${idx}`);
                    const prop = `${key}.${idx}`;
                    const memberObj = ar[idx];
                    if (this.isPrimitive(memberObj)) {
                        const value = memberObj;
                        console.log(`Leaf found. '${prop}': '${value}'`);
                        continue;
                    }
                    this.walk(prop, memberObj);
                }
            }
            else {
                if (!key) {
                    console.log('Analyzing object root');
                }
                else {
                    console.log(`Analyzing object with key: '${key}'`);
                }
                for (let prop in obj) {
                    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
                        continue;
                    }
                    const childObj = obj[prop];
                    if (this.isPrimitive(childObj)) {
                        const value = childObj;
                        console.log(`Leaf found. '${prop}': '${value}'`);
                        continue;
                    }
                    this.walk(prop, childObj);
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