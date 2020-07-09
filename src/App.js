import React, { Component } from 'react';
import './App.css';
import { getAllStarships } from './services/starwars-api';
import { Route, Link, Switch } from 'react-router-dom';
import StarshipPage from './pages/StarshipPage/StarshipPage'


export default class App extends Component {
  // State goes here
  state = {
    starships: []
  }

  async componentDidMount() {
    var starships = await getAllStarships();
    console.log(starships)
    this.setState({
      starships: starships.results
    })
  }

  getStarship = (idx) => {
    return this.state.starships[idx]
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          STAR WARS STARSHIPS
        </header>
        <Switch>
          <Route exact path="/" render={() =>
            <section>
              {this.state.starships.map((starship, idx) => 
                <Link key={starship.name} to={`/starship/${idx}`}>
                  {starship.name}
                </Link>
              )}
            </section>
          }/>

          <Route path='/starship/:idx' render={(props) => 
            <StarshipPage 
            {...props}
            getStarship={this.getStarship}
            />
          }/>
        </Switch>
      </div>
    )
  }

}
