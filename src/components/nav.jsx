import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
        return (
            <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand">Navbar</a>
            <form class="form-inline">
              <input onChange={event => this.props.onChange(event.target.value)}
              class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button  onSubmit={this.props.onSubmit()} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>


          );
    }
}
 
export default NavBar;