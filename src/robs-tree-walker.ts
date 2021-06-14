export class RobsTreeWalker {

    walk = (obj: object): void => {
        console.log('Starting walk')
        this.walkElement(null, obj)
        console.log('Walk complete')
    }

    private walkElement = (key: string | null, value: any): void => {
        if (this.isPrimitive(value)) {
            if (!key) {
                console.log(`Element is not an object or an array. Single value found: '${value}'`)
            } else {
                console.log(`Leaf found. '${key}': '${value}'`)
            }
        } else if (Array.isArray(value)) {
            const ar = value;
            if (!key){
                console.log('Walking from element root. Found array.')
            } else {
                console.log(`Walking into array with key: '${key}'`)
            }
            for (let idx in ar) {
                const propAlias = `${key}.${idx}`
                const memberElem = ar[idx]
                this.walkElement(propAlias, memberElem)
            }
        } else {
            // value must be an object
            const obj = value
            if (!key){
                console.log('Walking from element root. Found to be an object.')
            } else {
                console.log(`Walking into element object with key: '${key}'`)
            }
            for (let prop in obj) {
                if (!Object.prototype.hasOwnProperty.call(obj, prop)) { continue }
                const childElem = obj[prop]
                this.walkElement(prop, childElem)
            }
        }
    }

    private isPrimitive = (test: any): boolean => {
        return test !== Object(test);
    }

}