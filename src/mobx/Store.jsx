import { observable, action } from 'mobx';
import axios from 'axios';

class Store {
  @observable counter = 1;
  @observable post = {
    status: 'pending',
    data: [],
  };

  @action
  increase = () => {
    this.fetchPostData(++this.counter);
  }

  @action
  decrease = () => {
    this.fetchPostData(--this.counter);
  }

  @action
  fetchPostData = async (id) => {
    this.post.status = 'pending';
    await this.getPost(id).then(
      res => {
        this.post.status = 'done';
        this.post.data = res.data;
      },
      error => {
        this.post.status = 'error';
      }
    )
  }

  getPost(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}

export default Store;