import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroup } from '../../actions/groupAction';

// imported only for develpment testing
import GroupListing from './groupListing';

// CSS
import '../../pages/Group/createGroup.scss';

class CreateGroup extends Component {

    state = {
        name: '',
        description: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        const newGroup = {
            name: this.state.name,
            description: this.state.description
        }

        this.props.addGroup(newGroup);
    }

    render() {
        return(
            <section className="CreateGroup">
                <form>
                    <div className="bannerInput">
                        <input type="file" name="banner"/>
                    </div>
                    <input type="file" name="logo"/>
                    <input type="text" name="name" id="groupName" placeholder="group name" onChange={this.onChange}/>
                    <input type="text" name="description" id="groupName" placeholder="description" onChange={this.onChange}/>
                    <input type="text" name="mission" id="groupName" placeholder="group mission" onChange={this.onChange}/>
                    <input type="text" name="genre" id="groupName" placeholder="genre" onChange={this.onChange}/>
                    <input type="text" name="location" id="groupName" placeholder="location" onChange={this.onChange}/>
                    <input type="text" name="handler" id="groupName" placeholder="handler" onChange={this.onChange}/>
                    <button type="submit" onClick={this.onSubmit}> Submit </button>
                </form>
                <GroupListing/>
            </section>
        )
    };
}

const mapStateToProps = (state) => ({
    group: state.group
});

export default connect(
    mapStateToProps, 
    {addGroup}
)(CreateGroup);