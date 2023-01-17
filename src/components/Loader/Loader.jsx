import { Component } from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <RotatingTriangles
        visible={true}
        height="200"
        width="200"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          margin: '0 auto',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '9999',
        }}
        wrapperClass="rotating-triangels-wrapper"
      />
    );
  }
}

export default Loader;