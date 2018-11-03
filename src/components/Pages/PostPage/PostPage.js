import React, { Component } from 'react';
import './PostPage.css';
import axios from 'axios';
import Dropzone from 'react-dropzone';

class PostPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
         email: '',
         textbox: '',
         file: ''
    };
  }

  onDrop(file){
    this.setState({file});
  }

  onCancel(){
    this.setState({
      file: ''
    });
  }

  clearForm = () => {
    document.getElementById("posterForm").reset();
  }

  handleSubmit = (event) => {
    const {name, email, textbox, file} = this.state;
    axios.post('/animals', JSON.stringify({name, email, textbox, file}));
  }


  render() {
    return (
      <div className="postPage">
        <form id="posterForm" onSubmit={this.handleSubmit}>
        <div className="dropzone">
        <Dropzone
        multiple={false}
        onDrop={this.onDrop.bind(this)}
        onFileDialogCancel={this.onCancel.bind(this)}>
        <p>Drop a photo of your pet here ^^</p>
        </Dropzone>
        </div>
        <h2>Dropped photo</h2>
        <ul>{this.state.file.name - this.state.file.size}</ul>
        <input placeholder="Name" className="nameInput" type="text" value={this.state.name}/>
        <input placeholder="Email" type="email" className="emailInput" value={this.state.email}/>
        <textarea placeholder="What I want for my pet" className="perfectMatch" value={this.state.textbox}/>
        <input type="submit" value= "Submit"/>
        <input type="submit" value="Clear" onClick={this.clearForm}/>
        </form>
      </div>
    );
  }
}

export default PostPage;
