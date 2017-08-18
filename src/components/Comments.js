import React, { Component } from 'react';
import Comment from './Comment';
import styles from './styles';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { body: 'comment 1', username: 'dtrump', timestamp: '10:30' },
        { body: 'comment 2', username: 'hclinton', timestamp: '11:00' },
        { body: 'comment 3', username: 'gjohnson', timestamp: '11:30' }
      ]
    };
  }
  render() {

    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment currentComment={comment} /></li>
      );
    });

    return (
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentBox}>
          <ul style={styles.comment.commentList}>
            {commentList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
