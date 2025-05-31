import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomeScreen,
  MoviesDetails,
  MoviesListScreen,
  TVDetails,
  TVListScreen,
} from "./features";
import Layout from "./layout";

const App: React.FC = () => {
  return (
    <Router basename="/movies">
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search/movies" element={<MoviesListScreen />} />
          <Route path="/search/tv" element={<TVListScreen />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/tv/:id" element={<TVDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
