import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';

class SimpleModalLauncher extends Component {
  state = {
    showModal: false,
  };

  handleToggleModal() {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  }

  render() {
    const { children } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.handleToggleModal()}>
          open{' '}
        </button>
        {showModal && (
          <Modal onClose={() => this.handleToggleModal()}>{children}</Modal>
        )}
      </div>
    );
  }
}

export default SimpleModalLauncher;

// eslint-disable-next-line react/static-property-placement
SimpleModalLauncher.propTypes = {
  children: PropTypes.node.isRequired,
};
