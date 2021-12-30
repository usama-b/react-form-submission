import React from 'react'

export default function Header(props) {
    return (
        <div>
            <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          FA18-BSE-075
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="report">
                Weekly/Monthly Report
              </a>
            </li>
          </ul>
          <button className="btn btn-success">Login</button>
          <button className="btn btn-primary mx-2">Register</button>
        </div>
      </nav>
    </div>
        </div>
    )
}
