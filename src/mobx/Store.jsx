import { observable, action } from 'mobx';

class Store {
  @observable counter = 0;

  @action
  increase = () => {
    this.counter++;
  }

  @action
  decrease = () => {
    this.counter--;
  }
}

export default Store;