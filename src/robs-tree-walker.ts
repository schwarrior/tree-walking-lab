export class RobsTreeWalker {

    walk = (obj: object): void => {
        // console.log('starting walk')
        for (let prop in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, prop)) { continue }
            console.log(prop)
            const childObj = (obj as any)[prop]
            if (this.isPrimitive(childObj)) {
                continue
            }
            this.walk(childObj)
        }
    }

    private isPrimitive = (test: any): boolean => {
        return test !== Object(test);
    }

}