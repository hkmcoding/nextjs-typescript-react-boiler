import { observable, action, computed } from "mobx"
import data from "../data/data.json"

class Store {
    // observables are data that you want to keep track of
    @observable data = data
    @observable name = "Humza Mujib"
    
    // action is a function where you are changing the value of the property
    @action updateName = (name: string) => {
        this.name = name
    } 

    // computed, perform calculations, access the data and perform some sort of calculation, will reflect in real time
    // don't use arrow functions as the this will be incorrect, in an arrow function, this references the parent
    @computed get userName() {
        return this.name
    }
}

let store =  new Store

//  You create a single store and then export the instance of it, not the class
export default store

