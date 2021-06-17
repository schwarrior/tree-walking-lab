import { Element } from "./element"

export class TreeWalker {

    walk = (obj: object): number => {
        this.stack = new Array<Element>()
        this.elementsWalked = 0
        console.log('Starting walk')
        const rootElem: Element = {key: undefined, value: obj, parent: undefined}
        const walkCount = this.walkElement(rootElem, this.stackElement)
        console.log(`Walk complete. Walked ${walkCount} elements`)
        console.log('')
        console.log('Stack values:')
        console.dir(this.stack)
        return this.elementsWalked
    }

    private stack: Array<Element> = []

    private stackElement = (elem: Element) : void => {
        this.stack.push(elem)
    } 

    private elementsWalked = 0

    private walkElement = (elem: Element, elementAction: {(e: Element) : void}): number => {
        elementAction(elem)
        this.elementsWalked++
        if (this.isPrimitive(elem.value)) {
            elem.leafValue = elem.value as unknown as string
            if (!elem.key) {
                console.log(`Element is not an object or an array. Single value found: '${elem.value}'`)
            } else {
                console.log(`Leaf found. '${elem.key}': '${elem.value}'`)
            }
        } else if (Array.isArray(elem.value)) {
            elem.isArray = true
            const ar = elem.value as []
            if (!elem.key){
                console.log('Walking from element root. Found array.')
            } else {
                console.log(`Walking into array with key: '${elem.key}'`)
            }
            for (let idx = 0; idx < ar.length; idx ++) {
                const propAlias = `${elem.key}.${idx}`
                const memberVal = ar[idx]
                const childElem: Element = {key: propAlias, value: memberVal, parent: elem}
                this.walkElement(childElem, elementAction)
            }
        } else {
            // value must be an object
            const obj = elem.value
            if (!elem.key){
                console.log('Walking from element root. Found to be an object.')
            } else {
                console.log(`Walking into element object with key: '${elem.key}'`)
            }
            for (let prop in obj) {
                if (!Object.prototype.hasOwnProperty.call(obj, prop)) { continue }
                const childVal = obj[prop]
                const childElem: Element = {key: prop, value: childVal, parent: elem}
                this.walkElement(childElem, elementAction)
            }
        }
        return this.elementsWalked
    }

    private isPrimitive = (test: any): boolean => {
        return test !== Object(test)
    }

}