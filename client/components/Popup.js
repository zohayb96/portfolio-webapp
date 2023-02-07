import React, {Component, useState} from 'react'
import Popup from 'reactjs-popup'
import YouTube from 'react-youtube'

class ControlledPopup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setOpen: false
    }
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }
  handleCheckBox() {
    this.setState(prevState => ({setOpen: !prevState.setOpen}))
  }

  getVideoId(url) {
    var ID = ''
    url = url
      .replace(/(>|<)/gi, '')
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i)
      ID = ID[0]
    } else {
      ID = url
    }
    return ID
  }

  render() {
    console.log(this.props.video)
    // const [open, setOpen] = useState(false);
    // const closeModal = () => setOpen(false);
    const opts = {
      height: '240',
      width: '320',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }

    return (
      <div className="ui blue button" onClick={this.handleCheckBox}>
        <Popup
          open={this.state.setOpen}
          closeOnDocumentClick
          onClose={this.handleCheckBox}
        >
          <YouTube
            videoId={this.getVideoId(this.props.video)}
            opts={opts}
            onReady={this._onReady}
          />;
        </Popup>
        <i className="video icon" />
        Demo
      </div>
    )
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
}

export default ControlledPopup
