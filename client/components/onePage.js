import React, {Component} from 'react'
import {Progress, Grid, CardGroup, Button} from 'semantic-ui-react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import profilePic from '../../public/images/me.png'
import profileBanner from '../../public/images/banner.jpeg'
// pictureForProjects
import ytnlp from '../../public/images/ytnlp.png'
import dropar from '../../public/images/dropar.png'
import inizio from '../../public/images/inizio.png'
import vroom from '../../public/images/vroom.png'
import zombie from '../../public/images/zombie.png'
import roller from '../../public/images/roller.png'
import manestream from '../../public/images/manestream.png'
import centraltime from '../../public/images/centraltime.png'
import weatherme from '../../public/images/weatherme.jpeg'
import ContentCard from './contentCard'
import TimelineContent from './timelineContent'
import TimelineContent2 from './timelineContent2'
import elephant from '../../public/images/elephant.jpeg'
import dubai from '../../public/images/dubai.jpg'
import brooklyn from '../../public/images/brooklynbridge.jpeg'
import flatiron from '../../public/images/flatiron.jpeg'
import empirestate from '../../public/images/empirestate.jpeg'
import holiday from '../../public/images/holiday.jpg'
import nyu from '../../public/images/nyu.jpeg'
import tesseract from '../../public/images/tesseract.jpg'
import lahore from '../../public/images/lahore.jpeg'
import dub from '../../public/images/dubai.jpeg'
import newyorkuni from '../../public/images/nyu.png'
import dc from '../../public/images/dc.png'
import london from '../../public/images/london.jpeg'
import fullstack from '../../public/images/fstack.png'
import qmul from '../../public/images/qmul.jpeg'
import spark from '../../public/images/spark.jpeg'
import nyc from '../../public/images/nyc.jpg'
import abhi from '../../public/images/abhi.jpeg'
import visionx from '../../public/images/visionx.png'
import auracy from '../../public/images/auracy.png'
import spotifyApi from './getToken'
import Fancybox from './Fancy'
import ut from '../../public/images/ut.png'

// Dummy data
const allProjects = [
  {
    id: 10,
    title: 'Auracy',
    description: 'Tools for learning from online video',
    media: {image: auracy},
    code: 'http://auracy.io',
    tag: {0: 'Web', 3: 'Mobile'},
    groupId: 0
  },
  {
    id: 0,
    title: 'DropAR',
    description: 'Collaborative Augented Reality Drawing App',
    media: {image: dropar},
    video: 'https://youtu.be/Xlg2TLEKOPU',
    code: 'https://github.com/drop-ar/drop-ar',
    tag: {0: 'Web', 3: 'Web'},
    groupId: 0
  },
  {
    id: 1,
    title: 'YoutubeNLP',
    description: 'Natural Language Processing on Youtube Caption Data',
    media: {image: ytnlp},
    video: 'https://youtu.be/7EUgKl5pGP4',
    code: 'https://github.com/zohayb96/YoutubeAnalyser',
    tag: {1: 'Solo'},
    groupId: 0
  },
  {
    id: 0,
    title: 'Manestream',
    description: 'Instagram Clone - React Native',
    media: {image: manestream},
    video: 'https://youtu.be/Xdw2BgNq1XQ',
    tag: {0: 'Web', 3: 'Web'},
    groupId: 0
  },
  {
    id: 2,
    title: 'Inizio',
    description: 'Social platform to discover local activities',
    media: {image: inizio},
    video: 'https://youtu.be/2owV8cot-TA',
    code: 'https://github.com/zohayb96/Stack',
    tag: {1: 'Solo', 3: 'Mobile'},
    groupId: 0
  },
  {
    id: 3,
    title: 'Vroom Market',
    description: 'Luxury car e-commere website',
    media: {image: vroom},
    video: 'https://youtu.be/lAoPYAJxUy0',
    code: 'https://github.com/Indissolubly-Tailplane/Vroom',
    tag: {0: 'Web'},
    groupId: 0
  },
  {
    id: 4,
    title: 'Apocalyptic Arena Project',
    description: 'Zombie shooter game',
    media: {image: zombie},
    video: 'https://youtu.be/huTjkfhEE7I',
    tag: {4: 'Gaming'},
    groupId: 0
  },
  {
    id: 5,
    title: 'SkyRoller',
    description: 'Infinite maze runner game',
    media: {image: roller},
    video: 'https://youtu.be/QIn2Wc12m30',
    tag: {1: 'Solo', 4: 'Gaming'},
    groupId: 0
  },
  {
    id: 6,
    title: 'Central Time Project',
    description: 'Calendar and Task Management Application',
    media: {image: centraltime},
    tag: {0: 'Web'},
    code: 'https://github.com/zohayb96/CentralTime',
    groupId: 0
  },
  {
    id: 7,
    title: 'Weatherme',
    description: 'Weather API Interface',
    media: {image: weatherme},
    tag: {3: 'Mobile'},
    code: 'https://github.com/zohayb96/weather',
    groupId: 0
  }
]

const allArtwork = [
  {
    id: 0,
    title: 'Holiday',
    // description: 'Empire State.',
    media: {image: holiday},
    groupId: 1
  },
  {
    id: 1,
    title: 'Work Life Balance',
    media: {image: empirestate},
    groupId: 1
  },
  {
    id: 2,
    title: 'Alma',
    media: {image: nyu},
    groupId: 1
  },
  {
    id: 3,
    title: 'Flatiron',
    media: {image: flatiron},
    groupId: 1
  },
  {
    id: 4,
    title: 'Elephant',
    description: 'SVG of the strongest animal on the planet.',
    media: {image: elephant},
    groupId: 1
  },
  {
    id: 5,
    title: 'Tesseract',
    description: '01/01/2021',
    media: {image: tesseract},
    groupId: 1
  },
  {
    id: 6,
    title: 'Missing New York',
    media: {image: brooklyn},
    groupId: 1
  },
  {
    id: 7,
    title: 'Dubai 2020',
    description: '01/01/2020',
    media: {image: dubai},
    groupId: 1
  }
]

const allJourney = [
  // {
  //   id: 0,
  //   role: null,
  //   title: 'The Beginning',
  //   startDate: new Date(1996, 9, 11),
  //   endDate: null,
  //   media: {image: lahore},
  //   info: 'Happy birthday to me',
  //   content: null,
  //   tag: '',
  //   groupId: 2
  // },
    {
      id: 8,
    title: 'McCombs School of Business, Austin, Texas',
    role: null,
    startDate: new Date(2022, 4, 4),
    endDate: new Date(2023, 4, 2),
    media: {image: ut},
    info:
      'Master of Science in Technology Commercialization',
    // Notes: Linking De Waal and Carl Jung - How much tribal behaviour is there in our DNA'
    content: null,
    tag: 'Edu',
    groupId: 2
  },
  {
    id: 3,
    role: null,
    title: 'Queen Mary University of London',
    startDate: new Date(2017, 9, 1),
    endDate: new Date(2020, 6, 1),
    media: {image: qmul},
    info:
      'Computer science major - Conducted research on Natural Language Processing algorithms. Final dissertation project and implementation received highest individual grade in advisory group. Key takeaways: Concept of focusing on security in systems and structuring code in complex object-oriented programming projects.',
    content: null,
    tag: 'Edu',
    groupId: 2
  },
  {
    id: 4,
    role: null,
    title: 'Fullstack Academy',
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2018, 9, 1),
    media: {image: fullstack},
    info:
      ' 17-week fulltime immersive software development bootcamp. Focused on building functioning fullstack (Front-End and Back-End) web applications using React and Node.js.',
    content: null,
    tag: 'Edu',
    groupId: 2
  },
  {
    id: 2,
    role: null,
    title: 'New York University',
    startDate: new Date(2015, 5, 1),
    endDate: new Date(2017, 5, 1),
    media: {image: newyorkuni},
    info:
      'Economics major - Completed the NYU liberal studies program in two years. The cultures sequence of the program consisted of a foundational background in art-history and literature. Whilst the "Global Works and Society Sequence" was an exploration of the great works in philosophy, history, religion, and political theory. Recommended reading: "The Prince" by Machiavelli and "The Bonobo and the Atheist" by Frans De Waal',
    // Notes: Linking De Waal and Carl Jung - How much tribal behaviour is there in our DNA'
    content: null,
    tag: 'Edu',
    groupId: 2
  },
  {
    id: 1,
    title: 'Dubai College',
    role: null,
    startDate: null,
    endDate: new Date(2015, 6, 1),
    media: {image: dc},
    info: 'Happy birthday to me',
    content: null,
    tag: '',
    groupId: 2
  },
  {
    id: 7,
    title: 'Abhi',
    role: 'UI Designer + Software Engineer',
    startDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 5, 1),
    media: {image: abhi},
    info: 'Spearheaded the gamification of the ABHI mobile app and led the front end development of Abhi Super League game.',
    content: null,
    tag: 'Work',
    groupId: 2
  },
  {
    id: 6,
    title: 'VisionX',
    role: 'IOS Engineer',
    startDate: new Date(2021, 6, 1),
    endDate: new Date(2021, 8, 1),
    media: {image: visionx},
    info: 'Implemented the MVC and MVVM architecture to build 10 simple functioning AR apps using UIKit and SwiftUI',
    content: null,
    tag: 'Work',
    groupId: 2
  },
  {
    id: 5,
    title: 'Sparkcognition',
    role: 'Software Engineering Intern',
    startDate: new Date(2019, 6, 1),
    endDate: new Date(2019, 9, 1),
    media: {image: spark},
    info:
      'Responsible for the development and integration of a web component, built using Angular and JSX, to visualise and categorise the transformation processing status of previously run natural language processing algorithms on unstructured and structured documents for the DeepNLP web tool.',
    content: 'Recommendation',
    tag: 'Work',
    groupId: 2
  },
  // {
  //   id: 6,
  //   title: 'The Future',
  //   image: {image: pakistan}
  // }
]
// const {title: 'Hello', date:'March 10 - Jan 12', author: 'Zohayb', info: 'Happy birthday to me', content: "Recommendation"}

const handleClick = websiteUrl => {
  window.open(websiteUrl)
}

const handleLogin = () => {
  window.location =
    'https://accounts.spotify.com/authorize?client_id=df27317ccb0a4da4a5920cce81c25ad9&response_type=code&redirect_uri=http://localhost:8080/callback/&scope=user-read-private%20user-read-currently-playing'
}

class OnePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      artwork: [],
      journey: [],
      currentSong: ''
    }
    this.filterGroups.bind(this)
    this.resetProjects.bind(this)
    this.resetArtwork.bind(this)
    this.getCurrentPlaying.bind(this)
  }

  componentDidMount() {
    this.setState({
      projects: allProjects,
      artwork: allArtwork,
      journey: allJourney
    })
  }

  resetProjects = () => {
    this.setState({projects: allProjects})
  }

  sortByEndDate = data => data.slice().sort((a, b) => b.endDate - a.endDate)
  sortByEndDateReversed = data =>
    data.slice().sort((a, b) => a.endDate - b.endDate)

  resetArtwork = () => {
    this.setState({artwork: allArtwork})
  }

  filterGroups = filterString => {
    let currentProjects = allProjects
    const filteredProjects = currentProjects.filter(obj =>
      Object.values(obj.tag).includes(filterString)
    )
    this.setState({projects: filteredProjects})
  }

  getCurrentPlaying() {
    spotifyApi.getMyCurrentPlayingTrack().then(
      function(data) {
        console.log(
          JSON.stringify(data.body.item.artists[0].external_urls.name)
        )
        const nowPlaying = String('Now playing: ' + data.body.item.name, 'by: ')
        console.log(nowPlaying)
        //  this.setState({currentSong: nowPlaying})
        //  console.log(this.state)
      },
      function(err) {
        console.log('Something went wrong!', err)
      }
    )
  }

  render() {
    const sortedJourney = this.sortByEndDate(allJourney)
    const sortedJourneyReverse = this.sortByEndDateReversed(allJourney)

    return (
      <div className="art-app art-app-onepage">
        <div className="art-mobile-top-bar" />
        <div className="art-app-wrapper">
          <div className="art-app-container">
            <div className="art-info-bar">
              <div className="art-info-bar-frame">
                <div className="art-header">
                  <div className="art-avatar">
                    <a
                      data-fancybox="avatar"
                      href={profilePic}
                      data-caption="Avatar"
                      className="art-avatar-curtain"
                      rel="group1"
                    >
                      <img src={profilePic} alt="avatar" />
                      <i className="fas fa-expand" />
                    </a>
                    <div className="art-lamp-light">
                      <div className="art-available-lamp" />
                    </div>
                  </div>
                  <h5 className="art-name mb-10">Zohayb Shaikh</h5>
                  <div className="art-sm-text-color">Software and Product</div>
                  <div className="art-sm-text">McCombs23, Austin, Texas</div>
                </div>
                  <div className="art-hard-skills p-15-15">
                    <h6>Skills</h6>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h5 className="art-name mb-10">Fullstack JS</h5>
                      </div>
                      <Progress percent={75} color="yellow" size="tiny" />
                    </div>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h5 className="art-name mb-10">UI Design</h5>
                      </div>
                      <Progress percent={70} color="purple" size="tiny" />
                    </div>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h5 className="art-name mb-10">Product Leadership</h5>
                      </div>
                      <Progress percent={60} color="blue" size="tiny" />
                    </div>
                </div>
              </div>
            </div>
            <div className="contentContainer">
              <div className="scrollableContainer">
                <div
                  className="art-top-bg"
                  style={{backgroundImage: `url(${profileBanner})`}}
                >
                  <section className="home" id="home">
                    <div className="max-width">
                      <div className="Center">
                        <div className="text-1">Hello,</div>
                        <div className="text-3">Welcome to my world</div>
                        {/* <div className="home-content">
                          <a href="#">Follow</a>
                        </div> */}
                        <div className="socialBanner">
                          <div className="home-content">
                            <div
                              onClick={() =>
                                handleClick(
                                  'https://www.linkedin.com/in/zohaybshaikh/'
                                )
                              }
                            >
                              <i className="linkedin icon" />{' '}
                            </div>
                          </div>
                          <div className="home-content">
                            <div
                              onClick={() =>
                                handleClick('https://github.com/zohayb96/')
                              }
                            >
                              <i className="github icon" />{' '}
                            </div>
                          </div>
                          <div className="home-content">
                            <div
                              onClick={() =>
                                handleClick(
                                  'https://www.instagram.com/zohaybshaikh/'
                                )
                              }
                            >
                              <i className="instagram icon" />{' '}
                            </div>
                          </div>
                          <div className="home-content">
                            <div
                              onClick={() =>
                                handleClick('https://twitter.com/ZohaybShaikhx')
                              }
                            >
                              <i className="twitter icon" />{' '}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="art-ls-divider" />
                <div className="art-section-title">
                  <div className="art-title-frame">
                    <h4>Projects</h4>
                  </div>
                  <div className="art-right-frame">
                    <div className="art-filter">
                      <a
                        href="#"
                        data-filter="*"
                        className="art-link"
                        onClick={() => this.resetProjects()}
                      >
                        All Categories
                      </a>
                      <a
                        href="#"
                        data-filter=".logos"
                        className="art-link"
                        onClick={() => this.filterGroups('Solo')}
                      >
                        Solo
                      </a>
                      <a
                        href="#"
                        data-filter=".webTemplates"
                        className="art-link"
                        onClick={() => this.filterGroups('Web')}
                      >
                        Web
                      </a>
                      <a
                        href="#"
                        data-filter=".webTemplates"
                        className="art-link"
                        onClick={() => this.filterGroups('Gaming')}
                      >
                        Games
                      </a>
                      <a
                        href="#"
                        data-filter=".webTemplates"
                        className="art-link"
                        onClick={() => this.filterGroups('Mobile')}
                      >
                        Mobile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gridContainer">
                  {/* style={{ display: 'inline-block' }} */}
                  <Grid columns={5} doubling style={{display: 'inline-block'}}>
                    {React.Children.toArray(
                      this.state.projects.map(item => (
                        <Grid.Column key={item.id}>
                          <ContentCard content={item} />
                        </Grid.Column>
                      ))
                    )}
                  </Grid>
                </div>
                <div className="art-ls-divider" />
                    <h4>Education and Work-Experience</h4>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="art-section-title">
                        <div className="art-title-frame">
                          {/* <h4>Education</h4> */}
                        </div>
                      </div>
                      {sortedJourney.map(item => {
                        if (item.tag === 'Edu') {
                          return (
                            <TimelineContent key={item.id} journeyInfo={item} />
                          )
                        }
                      })}
                    </div>
                    <div className="col-lg-6">
                      <div className="art-section-title">
                        <div className="art-title-frame">
                          {/* <h4>Experience</h4> */}
                        </div>
                      </div>
                      {sortedJourney.map(item => {
                        if (item.tag === 'Work') {
                          return (
                            <TimelineContent key={item.id} journeyInfo={item} />
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="art-ls-divider" />
                <div className="art-section-title">
                  <div className="art-title-frame">
                    <h4>Digital Art and Photography</h4>
                  </div>
                  {/* <div className="art-right-frame">
                    <div className="art-filter">
                      <a href="#" data-filter="*" className="art-link art-current">All Categories</a>
                      <a href="#" data-filter=".webTemplates" className="art-link">Web Templates</a>
                      <a href="#" data-filter=".logos" className="art-link">Logos</a>
                      <a href="#" data-filter=".drawings" className="art-link">Drawings</a>
                      <a href="#" data-filter=".ui" className="art-link">UI Elements</a>
                    </div>
                  </div> */}
                </div>
                <div className="gridContainer">
                  <Grid columns={5} style={{display: 'inline-block'}}>
                    {React.Children.toArray(
                      this.state.artwork.map(item => (
                        <Grid.Column key={item.id}>
                          <ContentCard content={item} />
                        </Grid.Column>
                      ))
                    )}
                  </Grid>
                </div>
                <div className="art-ls-divider" />
                <div className="art-section-title">
                  <div className="art-title-frame">
                    <h4>My Journey</h4>
                  </div>
                </div>
                <div className="gridContainer">
                  <Grid columns={8} divided>
                    {React.Children.toArray(
                      sortedJourneyReverse.map(item => (
                        <Grid.Column key={item.id}>
                          <ContentCard content={item} />
                        </Grid.Column>
                      ))
                    )}
                  </Grid>
                </div>
                {/* teeeeeeeeeeeeeeeeeeeeeee */}
                {/* <div className="art-ls-divider" /> */}
                {/* <div className="art-section-title">
                  <div className="art-title-frame">
                    <h4>Dunarius (DUNA)</h4>
                    <h5>A cryptocurrency deployed on the binance smart chain.</h5>
                    <h5>In progress...</h5>
                  </div>
                </div> */}
                <div className="art-ls-divider" />
                <div className="art-section-title">
                  <div className="art-title-frame">
                    <h4>Get In Touch</h4>
                  </div>
                </div>
                <div className="mb-25">
                  <button
                    className="art-btn art-btn-md art-submit"
                    onClick={() =>
                      window.open(
                        'mailto:zohayb1996@gmail.com?subject=Greetings&body=Hi%20Zohayb,'
                      )
                    }
                    type="submit"
                  >
                    <span>Contact Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OnePage
