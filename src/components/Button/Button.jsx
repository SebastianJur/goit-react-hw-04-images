import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, handleLoadMore } = this.props;
    return (
      <button
        type="button"
        className={css.Button}
        onClick={handleLoadMore}
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func,
};

export default Button;