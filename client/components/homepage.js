import React, {Component} from 'react'
import {connect} from 'react-redux'
import OnePage from './onePage'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // this.setState({ videoLink: event.target.value });
    console.log(this.state)
  }

  handleSubmit(event) {
    // Stop trigger of refresh
    event.preventDefault()
    // RESET STATE
  }

  render() {
    return (
      <div>
        <OnePage />
      </div>
      // <div>
      //   <div>
      //     <h1>Zohayb Shaikh Personal Website</h1>
      //   </div>
      //   <div>
      //     <h2>About Me</h2>
      //     <p>Bio: Cool guy</p>
      //     <p>Interests: Cool stuff</p>
      //   </div>
      //   <div>
      //     <h2>Projects</h2>
      //     <p>YoutubeNLP</p>
      //     <p>DropAR</p>
      //     <p>Inizio</p>
      //     <p>Vroom Marketplace</p>
      //     <p>Apocalyptic Arena</p>
      //     <p>SkyRoller</p>
      //     <p>Central Time</p>
      //     <p>Weather</p>
      //   </div>
      //   <div>
      //     <h2>Contact Me</h2>
      //     <p>Email: zohayb1996@gmail.com</p>
      //   </div>
      // </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.user
})

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
