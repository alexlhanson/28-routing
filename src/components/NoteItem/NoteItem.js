import React from 'react';

export default class NoteItem extends React.Component {

  constructor(props){
    super(props);

    this.destroy = this.destroy.bind(this);
  }

  destroy(){
    this.props.destroyNote(this.props.note);
  }
  render() {
    return (
      <li className="note">
        <input type="checkbox"/>
        <button onClick={this.destroy}>Delete</button>
        <div className="title">{this.props.note.title}</div>
        <div className="content">{this.props.note.content}</div>
      </li>
    );
  };
};