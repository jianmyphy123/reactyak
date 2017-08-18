import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component {



  render() {
    
    return (
      <div style={styles.zone.container}>
        <h2 style={styles.zone.header}>
          <a style={styles.zone.title} href="#">{this.props.currentZone.name}
          </a>
        </h2>
        <span className="detail">{this.props.currentZone.zipCode}</span><br/>
        <span className="detail">{this.props.currentZone.numComments} comments</span>
      </div>
    );
  }
}

export default Zone;
