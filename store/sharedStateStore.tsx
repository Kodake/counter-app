import { makeAutoObservable } from 'mobx';

class SharedStateStore {
    counter: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    incrementCounter() {
        this.counter += 1;
    }

    decrementCounter() {
        this.counter -= 1;
    }
}

const sharedStateStore = new SharedStateStore();
export default sharedStateStore;
