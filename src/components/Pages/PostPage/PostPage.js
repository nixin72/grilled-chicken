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
    this.setState({files: files.map(file => ({
      ...file,
      preview: URL.createObjectURL(file)
    }))});
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

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {files} = this.state;
    let thumbs = ''
    if(files){
    thumbs = files.map(file => (
      <div>
      <div>
      <img 
      src={file.preview}
      />
      </div>
      </div>
    ));
  }
    

    return (
      <div className="PostPage">
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
        <aside>
        {thumbs}
        </aside>
        <input
        name="name"
        type="text"
        placeholder="Name" 
        className="nameInput"
        required={true}  
        value={this.state.name} 
        onChange={this.handleInputChange}/>
        <input  
        name="email"
        type="email" 
        placeholder="Email"
        className="emailInput" 
        value={this.state.email} 
        onChange={this.handleInputChange}
        required={true}
        />
        <textarea placeholder="What I want for my pet" 
        name="textbox"
        className="perfectMatch" 
        value={this.state.textbox}
        onChange={this.handleInputChange}
        required={true} 
        />
        <input type="submit" value= "Submit"/>
        <input type="submit" value="Clear" onClick={this.clearForm}/>
        </form>
      </div>
    );
  }
}

export default PostPage;
