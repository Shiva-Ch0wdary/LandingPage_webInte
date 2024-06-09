import React from 'react';

import ReactDOM from 'react-dom';

const GetStarted = () => {
  return (
    <section id="get-started">
      <div className="content">
        <h3>Get Started Today</h3>
        <p>Sign up now and start using the app immediately!</p>
        <div className="download-app">
          <img src="/assets/download.svg" alt="Download" />
          <button>Download Now</button>
        </div>
      </div>
      <div className="image">
        <img src="/assets/getstarted.svg" alt="Get Started" />
      </div>
      <style jsx>{`
        #get-started {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 50px;
          background: url('/assets/getstartedbg.svg') no-repeat center center/cover;
          color: white;
        }
        .content {
          max-width: 500px;
        }
        #get-started h3 {
          font-size: 2.5em;
          margin-bottom: 20px;
        }
        #get-started p {
          font-size: 1.2em;
          margin-bottom: 30px;
        }
        .download-app {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: white;
        }
        .download-app img {
          width: 20px;
          margin-right: 10px;
        }
        .download-app button {
          background-color: white;
          color: black;
          border: none;
          padding: 10px 20px;
          font-size: 1em;
          border-radius: 5px;
          cursor: pointer;
        }
        .download-app button img {
          width: 15px;
          vertical-align: middle;
        }
        .image img {
          max-width: 100%;
        }
      `}</style>
    </section>
  );
};

export default GetStarted;
