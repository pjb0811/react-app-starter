import { observable, action } from 'mobx';

class Store {
  @observable count = 0;

  @action
  increase = () => {
    this.count++;
  }

  @action
  decrease = () => {
    this.count--;
  }
}

export default Store;