import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MyMap from './components/MyMap'
import Home from './components/Home'
import {Grid} from 'semantic-ui-react'
import ProfileIcon from './components/ProfileIcon'
import LoginForm from './components/LoginForm'
import { useCookies } from 'react-cookie';
import CreatePost from './components/CreatePost'


const BASEURL = 'http://localhost:3000'


function App() {

  useEffect(() => {
    if(cookies.userToken){
      fetch(`${BASEURL}/profile`, {
        headers: {
          'Authorization': 'Bearer ' + cookies.userToken
        }
      })
      .then(resp => resp.json())
      .then(json => setCurrentUser({id: json.id, username: json.username}))
    }
  }, []);


  const [currentUser, setCurrentUser] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

  const handleLogin = (data,route) => {
    console.log(data)
    fetch(`${BASEURL}/${route}`, {
      method: 'POST',
      headers: {
        'Accepted': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: data})
    })
    .then(resp => resp.json())
    .then(json => {
      setCurrentUser({id :json.id, username: json.username})
      setCookie('userToken', json.jwt)
      console.log(currentUser)
    })
  }


  return (
    <div className="App">
      <Grid>

        <Grid.Row style={{height: '50vh'}}>
          <Grid.Column>
            <MyMap/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {/* <ProfileIcon></ProfileIcon> */}
          <Grid.Column>
            <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/login"
                render={(props) => <LoginForm {...props} handleSubmit={handleLogin} />} />
              <Route exact path="create-post" component={CreatePost}/>
            </Router>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
     
    </div>
  );
}

export default App;
