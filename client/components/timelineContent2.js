import React from 'react'
import profilePic from '../../public/images/me.png'
import resume from '../../public/images/empirestate.jpeg'

const TimelineContent2 = () => {
  return (
    <div className="art-timeline art-gallery" id="history">
      <div className="art-timeline-item">
        <div className="art-timeline-mark-light" />
        <div className="art-timeline-mark" />
        <div className="art-a art-timeline-content">
          <div className="art-card-header">
            <div className="art-left-side">
              <h5>Don't Be a basrt</h5>
              <div className="art-el-suptitle mb-15">Template author</div>
            </div>
            <div className="art-right-side">
              <span className="art-date">jan 2018 - may 2020</span>
            </div>
          </div>

          <p>
            Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum
            provident rerum aut hic quasi placeat iure tempora laudantium ipsa
            ad debitis unde? Iste voluptatibus minus veritatis qui ut.
          </p>
          <a
            data-fancybox="diplome"
            href={resume}
            className="art-link art-color-link art-w-chevron"
          >
            Recommendation
          </a>
        </div>
      </div>
    </div>
  )
}

export default TimelineContent2
