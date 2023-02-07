import React from 'react'
import profilePic from '../../public/images/me.png'
import amy from '../../public/images/amy.png'

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
                src={amy}
                alt="face"
              />
              <h5>Amy Williams</h5>
              <div className="art-el-suptitle mb-15">Director, Software Engineering</div>
              <div className="mb-15">To Whom It May Concern: My name is Amy Williams and I served as Director, Engineering at SparkCognition located in Austin, TX.  SparkCognition is an AI product company that helps solve solutions for different industries.  In the summer of 2019, while at SparkCognition, is when I met Zohayb for the first time when interviewing for our summer internship program.  Right away I was impressed by Zohayb’s concise communication and his willingness to learn new areas for personal growth as well as adding key features to our product roadmap.  He expressed his interest in learning software engineering as it relates to data science.  I felt this was a win-win situation for Zohayb and our company. Zohayb has a complete skillset that is setting himself up for success down the road.  Such qualities include ability to listen to senior members of the team for instruction and guidance, calm demeanor that helps him work better with others and hear and understand their perspectives, along with ability to actually deliver quality software.  I know Zohayb is young, but I fully advocate for him to continue his learnings in the academic settings; the university will benefit from his personal experience along with his work experience thus far in the professional setting.  Zohayb was able to learn the software engineering processes that are practiced in an agile environment, while also having code reviews for his work by our senior engineers.  Throughout the summer Zohayb continued to work hard, and I am proud to say his work and feature was deployed and delivered in our product release that summer.  Not all can say this about their work.  Another call out is his ability to demo his work to a large product audience.  We treated him like one of us, but most of all, he performed like one of us.  That was most impressive to me. I strongly encourage you to admit Zohayb into your program.  He has strong work ethic, team values, and is eager to continue to learn and work collaboratively with others.  I see him as changing the way we build software in the future.  I cannot wait to see Zohayb continue his journey!
              <br/><br/>Regards<br></br>Amy Williams,<br></br>Director, Engineering</div>
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
