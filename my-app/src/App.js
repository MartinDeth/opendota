import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SearchComponent from './components/SearchComponent'

export default class App extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        </head>
        <body>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div>
              <SearchComponent />
            </div>
          </div>
        </body>
      </html>
    )
  }
}

