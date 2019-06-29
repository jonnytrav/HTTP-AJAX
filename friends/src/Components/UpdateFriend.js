import React from 'react';
import './Component.css';

class UpdateFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend = {
                name: "",
                age: "",
                email: ""
            }
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input placeholder="Update Name..." type="text" value={this.state.friend.name}></input>
                    <input placeholder="Update Age..." type="number" value={this.state.friend.age}></input>
                    <input placeholder="Update Email..." type="text" value={this.state.friend.email}></input>
                </form>
            </div>
        )
    }
}

export default UpdateFriend;