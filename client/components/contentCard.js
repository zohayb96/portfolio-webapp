import React, {Component} from 'react'
import {Icon} from 'semantic-ui-react'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css';
import YouTube from 'react-youtube'
import ControlledPopup from './Popup'

const handleClick = websiteUrl => {
  window.open(websiteUrl)
}

class ContentCard extends Component {
  render() {
    // Embedded youtube player

    const {title, description, media, video, code, groupId} = this.props.content
    // Used to sort gallery of images
    const group = `group${groupId}`

    return (
      <div className="coolCard">
        <a
          data-fancybox={group}
          data-caption={title}
          href={media.image}
          className="cardImage"
          title={title}
        >
          <img src={media.image} alt="avatar" className="cardImage" />
          <i className="fas fa-expand" />
        </a>

        <div className="content">
          {title ? <h5 className="art-name mb-10">{title}</h5> : <div />}
          {description ? (
            <div className="art-sm-text-color">{description}</div>
          ) : (
            <div />
          )}
          <div className="buttonContainer">
            {video ? <ControlledPopup video={video} /> : <div />}
            {code ? (
              <div>
                <div
                  className="ui purple button"
                  onClick={() => handleClick(code)}
                >
                  <i className="github icon" />
                  Code
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ContentCard
