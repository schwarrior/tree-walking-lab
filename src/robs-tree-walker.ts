export class RobsTreeWalker {

    walk = (obj: object): void => {
        // console.log('starting walk')
        for (let prop in obj) {
            if (!Object.prototype.hasOwnProperty.call(obj, prop)) { continue }
            console.log(prop)
            const childObj = (obj as any)[prop]
            this.walk(childObj)
        }
    }

}