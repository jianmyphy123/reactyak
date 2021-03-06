import React, { Component } from 'react';
import { CreateZone, Zone } from '../presentation';
import { APIManager } from '../../utils';

class Zones extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      list: []
    };
  }

  componentDidMount() {

    APIManager.get('/api/zone', null, (err, response) => {
      if(err) {
        alert('ERROR: ' + err.message);
        return;
      }
      console.log(JSON.stringify(response.results));
      this.setState({
        list: response.results
      });

    });

  }

  addZone(zone) {

    APIManager.post('/api/zone', zone, (err, response) => {
      if(err) {
        alert('ERROR: ' + err.message);
        return;
      }

      console.log('ZONE CREATED: ' + JSON.stringify(response));

      let updatedList = Object.assign([], this.state.list);
      updatedList.push(response.result);
      this.setState({
        list: updatedList
      });
    });

  }

  selectZone(index) {
    console.log('select zone' + index);
    this.setState({
      selected: index
    })
  }

  render() {

    const listItems = this.state.list.map((zone, i) => {
      let selected = (i == this.state.selected);
      return (
        <li key={i}><Zone index={i} select={this.selectZone.bind(this)} isSeleceted={selected} currentZone={zone}/></li>
      );
    });

    return (
      <div>
        <ol>
          {listItems}
        </ol>

        <CreateZone onCreate={this.addZone.bind(this)} />
      </div>
    );
  }
}

export default Zones;
