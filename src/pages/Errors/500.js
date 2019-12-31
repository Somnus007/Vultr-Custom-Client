import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default class Index extends PureComponent {
  render() {
    return (
      <div
        style={{
          minHeight: 'calc(100vh - 500px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Helmet title="Server Error" />
        <div
          style={{
            maxWidth: '560px',
            backgroundColor: '#fff',
            padding: '80px 30px',
            margin: '100px auto',
            borderRadius: '10px',
            flex: '1',
          }}
        >
          <div
            style={{
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <h1 className="font-size-36 mb-2">Server Error</h1>
            <p className="mb-3">
              An error may occur inside the server now, please try again later
            </p>
            <h1 className="font-size-80 mb-4 font-weight-bold">500 —</h1>
            <Link to="/" className="btn">
              &larr; Try again
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
