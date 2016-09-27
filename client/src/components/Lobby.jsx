import React from 'react';
import { Link } from 'react-router';
import LectureTitle from './sub/LectureTitle.jsx'
import ParticipantList from './ParticipantList.jsx';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentWillMount() {
    this.socket = io();
    this.socket.on('room not found', () => {
      this.socket.disconnect();
      this.socket = null;
    });
    this.socket.on('user joined', console.log.bind(console));
    this.socket.emit('join room', '*User\'s Name*', 'LGKRP');
  }

  componentDidMount() {
    new Clipboard(this.refs.copyButton, {
      text: (trigger) => {
        return this.refs.shareLink.innerText;
      }
    });
  }

  // componentWillUnmount() {
  //   this.socket.disconnect();
  // }

  render() {
    return (
      <div className="lobby">
        <LectureTitle />
        <ParticipantList participants={[{name: 'Kunal'}, {name: 'Marco'}, {name: 'Derek'}, {name: 'Sean'}]}/>
        <div className="clipboard">
          <input ref="shareLink" className="shareLink" value="https://github.com/zenorocha/clipboard.js.git" readOnly/>
          <div className="buttonCell">
            <button ref="copyButton" className="copyButton" data-clipboard-target=".shareLink">
              <i className="ion ion-clipboard"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}