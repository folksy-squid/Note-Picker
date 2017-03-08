import React from 'react';
import { Link } from 'react-router';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      init();
    }, 600);
  }

  render() {
    return (
      <div>
        <div className="homepage-hero-module">
          <div className="video-container">
            <div className="title-container">
              <a href="auth/facebook">
                <h1>Picky Notes</h1>
              </a>
              <hr></hr>
              <p className="landing-para">
                A collaborative note taking application that reinforces active learning through note comparison.
              </p>
              <a href="#landing1" className="landing1-link" style={{textDecoration: 'none'}}>
                <span className="cover-footer" style={{color: '#fff'}}>
                  Learn more
                </span>
              </a>
              <a href="auth/facebook" className="landing1-enter" style={{textDecoration: 'none'}}>
                <span className="cover-footer" style={{color: '#fff'}}>
                  Enter
                </span>
              </a>
            </div>
            <video autoPlay loop style= {{display: 'block', width: '100%', height: '100%', objectFit  : 'cover', position: 'absolute', top: '0', left: '0'}}>
              <source src="https://coverr.co/s3/mp4/abcd.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <div className="poster hidden">
              <img src="https://s3.amazonaws.com/coverr-public/poster/abcd.jpg" alt="" />
            </div>
          </div>
        </div>
        <div id="landing1" className="landing-section">
          <h1 className="landing-subheading">
            What
          </h1>
          <hr />
          <p className="landing-para">
          Picky Notes is a collaborative note taking application that allows students to discover where their understanding may differ from others around them.
          We believe a stronger connection is formed between concepts by linking written notes with the audio associated in the lecture.
          </p>
        </div>
        <div id="landing2" className="landing-section">
          <h1 className="landing-subheading">
            How
          </h1>
          <hr style={{'border': '3px black solid'}}/>
          <div className="container-fluid">
            <div className="col-md-6">
              <h5>
                1. Create/join a lecture
              </h5>
              <video controls autoPlay loop className="landing2-video">
                <source src="https://media.giphy.com/media/3o6Zt5Lz9jCnnahaEM/source.mp4" type="video/mp4" />
              </video>
              <p>
                Share the link with your friends and discuss your thoughts around the lecture.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                2. Start recording
              </h5>
              <video controls autoPlay loop className="landing2-video">
                <source src="https://media.giphy.com/media/l0MYRxAs6qxLpqHhm/source.mp4" type="video/mp4" />
              </video>
              <p>
                Picky Notes will associate the audio with your notes.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                3. Take notes
              </h5>
              <video controls autoPlay loop className="landing2-video">
                <source src="https://media.giphy.com/media/3o7TKCAZy9ckJW5n7q/source.mp4" type="video/mp4" />
              </video>
              <p>
                Using markdown language. You can also take private notes (called thoughts).
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                4. Edit your notes
              </h5>
              <video controls autoPlay loop className="landing2-video">
                <source src="https://media.giphy.com/media/l4pM6kunZAv1xvXKU/source.mp4" type="video/mp4" />
              </video>
              <p>
                Modify or add notes and assign them to a timestamp.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                5. Pick your favorite notes
              </h5>
              <video controls autoPlay loop className="landing2-video">
                <source src="https://media.giphy.com/media/3oI9Jzk3lYfhAVqBmo/source.mp4" type="video/mp4" />
              </video>
              <p>
                Select the notes and thoughts you want to store in your notebook
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                6. Review
              </h5>
              <video controls autoPlay loop className="landing2-video">
                <source src="https://media.giphy.com/media/3oI9JuF2Ix3U6iWXx6/source.mp4" type="video/mp4" />
              </video>
              <p>
                Look back at your notes and listen to what was said at the time of note taking.
              </p>
            </div>
          </div>
        </div>
        <div id="landing3" className="landing-section">
          <p>
            Created at Hack Reactor by Sean Ng, Derek Liu, Marco Chan, and Kunal Rathi
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
