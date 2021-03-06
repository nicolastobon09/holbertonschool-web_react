import React from 'react'
import PropTypes from 'prop-types'

import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <hr/>
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
