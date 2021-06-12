"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobsTreeWalker = void 0;
const carCollections = {
    'RobsCars': [
        { 'Make': 'Ford', 'Model': 'F150', 'Year': '2011', 'PreviousOwners': ['Carl'] },
        { 'Make': 'Jeep', 'Model': 'Wrangler', 'Year': '2015', 'PreviousOwners': ['Amanda', 'Larry'] }
    ],
    'JerrysCars': [
        { 'Make': 'BMW', 'Model': 'M3', 'Year': '2016', 'PreviousOwners': [] },
        { 'Make': 'Lexus', 'Model': 'LS400', 'Year': '2014', 'PreviousOwners': ['Charles', 'Tom', 'Greg'] }
    ],
    'JennysCars': [
        { 'Make': 'Subaru', 'Model': 'WRX', 'Year': '2009', 'PreviousOwners': ['Will', 'John', 'Jerry'] },
        { 'Make': 'Chevy', 'Model': 'Camaro', 'Year': '2017', 'PreviousOwners': ['Amanda'] }
    ]
};
class RobsTreeWalker {
    constructor() {
        this.walk = (treeObj) => {
            console.log('starting walk');
        };
    }
}
exports.RobsTreeWalker = RobsTreeWalker;
//# sourceMappingURL=robs-tree-walker.js.map