import React, { Component } from 'react';

class CreateComment extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      comment: {
        username: '',
        body: ''
      }
    };
  }

  updateComment(event) {

    console.log('updateComment ' + event.target.id + '==' + event.target.value);

    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment[event.target.id] = event.target.value;
    this.setState({
      comment: updatedComment
    });

  }

  submitComment(event) {
    console.log('submitComment: ' + JSON.stringify(this.state.comment));
    this.props.onCreate(this.state.comment);
  }

  render() {
    return (
      <div>
        <h3>Create Comment</h3>
        <input id="username" onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Username'/><br/>
        <input id="body" onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Comment'/><br/>
        <button onClick={this.submitComment.bind(this)} className='btn btn-info'>Submit Comment</button>
      </div>
    );
  }
}

export default CreateComment;
