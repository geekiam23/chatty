import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      handleForm: false,
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      console.log(snapshot)
      this.setState({rooms: this.state.rooms.concat(room)});
    });
  }

  formToggle() {
    if (this.state.handleForm === true)
      this.setState({handleForm: false});
    else
      this.setState({handleForm: true});
  }

  createRoom(event) {
    event.preventDefault();
    const newRoom = event.target.elements.newRoomName.value;
    this.roomsRef.push({name: newRoom});
    this.setState({handleForm: false});
  }
  
  render() {
    return (
      <div className='roomList'>
        <h1 className='title'>Chatty</h1>
        <ul className='sidebar-list'> {

          this.state.rooms.map((room, index) =>
            <li className='rooms' key={index}><p>{room.name}</p></li>
        )}
        </ul>
        <form className={this.state.handleForm ? 'displayed' : 'hidden'} onSubmit={this.createRoom}>
          <h2 className='form-title'>Create new room</h2>
          <h3 className='text-field-description'>Enter a room name</h3>
          <input type='text' id='new-room-name' name='newRoomName'/>
          <button className='cancel' onClick={this.formtoggle}>Cancel</button>
          <button className='create-room' type='submit'>Create room</button>
        </form>
      </div>
    );
  }
}

export default RoomList;
