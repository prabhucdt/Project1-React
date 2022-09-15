import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Project1</title>
        <meta property="og:title" content="Project1" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">My Tasks</span>
        <h1 className="home-text01">CODINBUILDER</h1>
        <span className="home-text02">Dashboard</span>
      </div>
      <div className="home-container2">
        <span className="home-text03">Pipelines</span>
        <input
          type="text"
          placeholder="search"
          className="home-search input search"
        />
        <button className="home-new-pipeline button">New Pipeline</button>
      </div>
      <div className="home-main">
        <div className="home-pipelines-header">
          <span className="home-text04">#</span>
          <span className="home-text05">Name</span>
          <span className="home-text06">Status</span>
          <span className="home-text07">Last Run</span>
          <span className="home-text08">Start Time</span>
          <span className="home-text09">End Time</span>
        </div>
        <img
          src="/playground_assets/cb-800h.jpg"
          alt="image"
          loading="eager"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
