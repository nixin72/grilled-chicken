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
         files: []
    };
  }

  onDrop(files){
    this.setState({files});
  }

  onCancel(){
    this.setState({
      files: []
    });
  }

  clearForm = () => {
    document.getElementById("posterForm").reset();
  }

  handleSubmit = (event) => {
    const {name, email, textbox, file} = this.state;
    axios.post('/animals', JSON.stringify({name, email, textbox, file}));
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.name,
      email: event.target.email,
      files: event.target.files
    });
  }

  render() {
    return (
      <div className="postPage">
        <form id="posterForm" onSubmit={this.handleSubmit}>
        <div className="dropzone">
        <Dropzone
        multiple={false}
        onDrop={this.onDrop.bind(this)}
        onFileDialogCancel={this.onCancel.bind(this)}
        >
        <p>Drop a photo of your pet here ^^</p>
        </Dropzone>
        </div>
        <h2>Dropped photo</h2>
        <ul>{this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)}</ul>
        <input 
        type="text"
        placeholder="Name" 
        className="nameInput"  
        value={this.state.name} 
        onChange={this.handleChange}/>
        <input  
        type="email" 
        placeholder="Email"
        className="emailInput" 
        value={this.state.email} 
        onChange={this.handleChange}/>
        <textarea placeholder="What I want for my pet" 
        className="perfectMatch" 
        value={this.state.textbox}
        onChange={this.handleChange}
        />
        <input type="submit" value= "Submit"/>
        <input type="submit" value="Clear" onClick={this.clearForm}/>
        </form>
      </div>
    );
  }
}

export default PostPage;
