import React from 'react'
import profilePic from '../../public/images/me.png'

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

let formatDate = (start, end) => {
  let startMonth = ''
  let startYear = ''
  let endMonth = ''
  let endYear = ''
  if (start !== null) {
    startMonth = monthNames[start.getMonth()]
    startYear = start.getFullYear()
  }
  if (end !== null) {
    endMonth = monthNames[end.getMonth()]
    endYear = end.getFullYear()
  }
  const formatted =
    startMonth + ' ' + startYear + ' - ' + endMonth + ' ' + endYear
  return formatted
}

function TimelineContent(props) {
  const {
    title,
    info,
    content,
    media,
    startDate,
    role,
    endDate,
    tag
  } = props.journeyInfo
  const dateFormatted = formatDate(startDate, endDate)

  return (
    <div className="art-timeline">
      <div className="art-timeline-item">
        <div className="art-timeline-mark-light" />
        <div className="art-timeline-mark" />
        <div className="art-a art-timeline-content">
          <div className="art-card-header">
            <div className="art-left-side">
              <h6>{title}</h6>
              {role ? (
                <h5>{role}</h5>
              ) : (
                <p/>
              )}
              {/* <div className="art-el-suptitle mb-15">{author}</div> */}
            </div>
            <div className="art-right-side">
              <span className="art-date">{dateFormatted}</span>
            </div>
          </div>
          <p className="contentParagraph">{info}</p>
          {content ? (
            <a
              data-fancybox={tag}
              data-caption={title}
              href="#art-recomendation-popup-3"
              className="art-link art-color-link "
            >
              {content}
            </a>
          ) : (
            <div />
          )}
          {/* If theres media show this */}
          {/* {media ? (
            <a
              data-fancybox="diplome"
              data-caption={title}
              href={media.image}
              className="art-link art-color-link "
            >
              Media
            </a>
          ) : (
            <div />
          )} */}
        </div>
        <div
          className="art-recomendation-popup"
          style={{display: 'none'}}
          id="art-recomendation-popup-3"
        >
          <div className="art-a art-testimonial">
            <div className="testimonial-body">
              <img
                className="art-testimonial-face"
                src={profilePic}
                alt="face"
              />
              <h5>Content Author</h5>
              <div className="art-el-suptitle mb-15">Zohayb Shaikh</div>
              <div className="mb-15">Content placeholder.</div>
            </div>
            <div className="art-testimonial-footer">
              <div className="art-left-side">
                <ul className="art-star-rate">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li className="art-empty-item">
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <div className="art-right-side" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineContent
