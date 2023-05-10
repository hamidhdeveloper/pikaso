import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ type, message }) => {
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      color: type === 'error' ? 'black' : '#DFA968',
    },
  };

  return <ToastContainer {...toastOptions}>{toast[type](message)}</ToastContainer>;
};

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Toast;
