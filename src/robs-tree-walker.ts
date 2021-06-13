export class RobsTreeWalker {

    walkObject = (obj: object): void => {
        console.log('starting walk')
        this.walk(null, obj)
        console.log('walk complete')
    }

    private walk = (key: string | null, obj: object): void => {
        if (Array.isArray(obj)) {
            if (!key){
                console.log('Analyzing array object root')
            } else {
                console.log(`Analyzing array with key: '${key}'`)
            }
            const ar = obj
            for (let idx in ar) {
                console.log(`Analyzing '${key}' array member at index ${idx}`)
                const prop = `${key}.${idx}`
                const memberObj = ar[idx]
                if (this.isPrimitive(memberObj)) {
                    const value = memberObj
                    console.log(`Leaf found. '${prop}': '${value}'`)
                    continue
                }
                this.walk(prop, memberObj)
            }
        } else {
            if (!key){
                console.log('Analyzing object root')
            } else {
                console.log(`Analyzing object with key: '${key}'`)
            }
            for (let prop in obj) {
                if (!Object.prototype.hasOwnProperty.call(obj, prop)) { continue }
                const childObj = (obj as any)[prop]
                if (this.isPrimitive(childObj)) {
                    const value = childObj
                    console.log(`Leaf found. '${prop}': '${value}'`)
                    continue
                }
                this.walk(prop, childObj)
            }
        }
    }

    private isPrimitive = (test: any): boolean => {
        return test !== Object(test);
    }

}