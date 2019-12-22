import { observable } from "mobx"
import data from "../data/data.json"

class Store {
    @observable data = data
}

let store =  new Store

export default store