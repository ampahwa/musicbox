import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListMusic from './ListMusic';

class Music extends Component {
  state = {
    musics: [],
  };

  componentDidMount() {
    this.getMusics();
  }

  getMusics = () => {
    axios
      .get('/api/musics')
      .then((res) => {
        if (res.data) {
          this.setState({
            musics: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteMusic = (id) => {
    axios
      .delete(`/api/musics/${id}`)
      .then((res) => {
        if (res.data) {
          this.getMusics();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { musics } = this.state;

    return (
      <div>
        <h1>My Music(s)</h1>
        <Input getMusics={this.getMusics} />
        <ListMusic musics={musics} deleteMusic={this.deleteMusic} />
      </div>
    );
  }
}

export default Music;