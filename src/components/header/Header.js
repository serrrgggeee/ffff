import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.sass';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { id: null };
  }


  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              <a href="#" className="brand-logo">Недвижемость Реакт</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a>fffff</a>
                </li>
                <li>
                  <a>fffff</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Header;
