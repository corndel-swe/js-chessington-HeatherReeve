// Make your Counter class here
class Counter{
    #count
    constructor (Counter) {
       this.#count = 0
    }
    increment(){ 
        this.#count = this.#count + 1 
    }
    reset (){ 
        this.#count = 0

    }
    getCount () {
        return count 
    }
}
// Replace `null` with an _instance_ of your counter
const counterInstance =  new Counter ()

// Please don't change the lines below!
export { Counter, counterInstance }
