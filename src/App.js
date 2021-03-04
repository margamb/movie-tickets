import React, { useState } from 'react';
import './App.css';
import './myreset.css';
import movieAPI from './movieAPI.js';
import Footer from './Footer.js';
import Movies from './Movies.js';
import MovieDetails from './MovieDetails.js';
import Booking from './Booking.js';
import Ticket from './Ticket.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [selected, setSelected] = useState([]);
  const [selectedTime, setSelectedTime] = useState(0);

  const handleReset = () => {
    setSelected([]);
    setSelectedTime(0);
  };

  //render different components -> diferentes pantallas
  const renderMovieDetails = (props) => {
    const routeMoviesId = parseInt(props.match.params.id);
    const movies = movieAPI.find((movie) => movie.id === routeMoviesId);
    return (
      <div>
        <MovieDetails movies={movies} />
      </div>
    );
  };

  const renderBooking = (props) => {
    const routeMoviesId = parseInt(props.match.params.id);
    const movies = movieAPI.find((movie) => movie.id === routeMoviesId);
    return (
      <div>
        <Booking
          movies={movies}
          selected={selected}
          setSelected={setSelected}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          handleReset={handleReset}
        />
      </div>
    );
  };

  const renderTicket = (props) => {
    const routeMoviesId = parseInt(props.match.params.id);
    const movies = movieAPI.find((movie) => movie.id === routeMoviesId);
    return (
      <div>
        <Ticket
          movies={movies}
          selected={selected}
          setSelected={setSelected}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          handleReset={handleReset}
        />
      </div>
    );
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Movies movies={movieAPI} />
        </Route>
        <Route path="/detail/:id" component={renderMovieDetails} />

        <Route path="/booking/:id" component={renderBooking} />

        <Route path="/ticket/:id" component={renderTicket} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
