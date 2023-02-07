import React from 'react'
import {connect} from 'react-redux'
import HomePage from './homepage'
// Main page of application, renders youtube player component when logged in

const Home = ({isLoggedIn, username}) => {
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <center>
          <div className="homeContainer">
            <div className="overlay-desc">
              <center />
            </div>
          </div>
        </center>
      ) : (
        <center>
          <HomePage />
        </center>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    username: state.user.username
  }
}

export default connect(mapStateToProps, null)(Home)
