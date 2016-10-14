import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Entry extends React.Component {
  constructor (props) {
    super(props);
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  clickHandler() {
    const pathUrl = this.props.entryInfo.pathUrl;
    $.ajax({
      method: 'GET',
      url: '/api/room/status',
      contentType: 'application/json',
      data: JSON.stringify({pathUrl}),
      success: (res) => {
        if (res.active) {
          this.context.router.push(`/lecture/${pathUrl}`);
        } else {
          this.context.router.push(`/review/${pathUrl}`);
        }
      }
    });
  }

  deleteHandler() {
    let userId = this.props.user.information[0].id;
    let roomId = this.props.entryInfo.id;
    $.ajax({
      method: 'DELETE',
      url: `/api/rooms?userId=${userId}&roomId=${roomId}`,
    });
    this.props.removeEntry(this.props.index);
  }

  render() {
    // Render an Entry component for each entry
    // (use map)
    return (
      <div className="col-xs-6 col-sm-4 col-md-3 notebook-entry" style={{width: '280px'}}>
        <div className={`w3-card-4 notebook${this.props.classColor}`}>
          <i className='ion ion-close-round deleteNoteIcon' onClick={this.deleteHandler.bind(this)}></i>
          <div className="w3-container" onClick={this.clickHandler.bind(this)}>
            <br />
            <div className='notebook-topic'>{`${this.props.entryInfo.topic}`}</div>
            <div className='notebook-lecturer'>{`by ${this.props.entryInfo.lecturer}`}</div>
            <div className='notebook-class'>{`${this.props.entryInfo.className}`}</div>
            <br />
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className="col-sm-6 col-md-4 notebook-entry" onClick={this.clickHandler.bind(this)}>
    //     <i className={`fa fa-sticky-note-o fa-5x notebook${this.props.classColor} notebook-icon`} aria-hidden="true"></i>
    //     <div className='notebook-topic'>{`${this.props.entry.topic}`}</div>
    //     <div className='notebook-lecturer'>{`by ${this.props.entry.lecturer}`}</div>
    //     <div className='notebook-class'>{`${this.props.entry.class}`}</div>
    //   </div>
    // );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Entry);
