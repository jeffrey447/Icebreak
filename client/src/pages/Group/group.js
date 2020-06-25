import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getGroup } from '../../actions/groupAction';
import PropTypes from 'prop-types';

// Importing CSS
import '../Group/group.scss'

//Import Components
import GroupHeader from '../../components/groupHeader/gheader';
import Shout from '../../components/shout/shout';
import News from '../../components/news/news';

class Group extends Component {

  constructor() {
    super();

    this.state = {

    }
  }

  static propTypes = {
    getGroup: PropTypes.func.isRequired,
    group: PropTypes.object.isRequired
  }
  
  componentDidMount(){
    let groupId = this.props.match.params.handler;
    this.props.getGroup(groupId);
  }

  render() {

    const { groups } = this.props.group;
    
    return (
      <div className="activity-container">
          {console.log(groups)}
          <GroupHeader groupid={groups.name}/>
          <Shout/>
          <News/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.group
});

export default connect(
  mapStateToProps,
  {getGroup}
)(Group);
