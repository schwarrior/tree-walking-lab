"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobsTreeWalker = void 0;
class RobsTreeWalker {
    constructor() {
        this.walk = (obj) => {
            // console.log('starting walk')
            for (let prop in obj) {
                if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
                    continue;
                }
                console.log(prop);
                const childObj = obj[prop];
                this.walk(childObj);
            }
        };
    }
}
exports.RobsTreeWalker = RobsTreeWalker;
//# sourceMappingURL=robs-tree-walker.js.map