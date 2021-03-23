import React from 'react'
import ReactDOM from 'react-dom'
import '../main.sass'

class Layout extends React.Component {
  render() {
    return (
      <div class='columns has-background-danger'>
        <div class='column has-background-primary is-1 is-narrow is-hidden-mobile	'>
          <section class='hero is-fullheight has-background-info'>111</section>
        </div>
        <div class='column has-background-success'>
          <nav class='navbar'>
            <div class='container'>
              <div id='navMenu' class='navbar-menu'>
                <div class='navbar-start'>
                  <a class='navbar-item'>Home</a>
                  <a class='navbar-item'>Documentation</a>
                </div>

                <div class='navbar-end'>
                  <div class='navbar-item'>
                    <div class='buttons'>
                      <a class='button is-dark'>Github</a>
                      <a class='button is-link'>Download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <section class='hero is-link is-fullheight-with-navbar'>
            <div class='hero-body'>
              <p class='title'>Fullheight hero with navbar</p>
            </div>
          </section>{' '}
        </div>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
