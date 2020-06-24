import React, { Component, useEffect, useState} from 'react';

// Importing CSS
import '../Group/group.scss'

//Import Compoents
import GroupHeader from '../../components/groupHeader/gheader';
import Shout from '../../components/shout/shout';
import News from '../../components/news/news';

class Group extends Component {

  state = () => {
    const [groupId] = useState(0);
  }
  
  componentDidMount(){
    let groupId = this.props.match.params.group_id;
    this.setState({
      groupId: groupId
    });
  }

  render() {
    return (
      <div className="activity-container">
          <GroupHeader groupid={this.state.groupId}/>
          <Shout/>
          <News/>
      </div>
    );
  }
}

export default Group;
