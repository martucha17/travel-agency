import React from 'react';
import styles from './Orderoption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input
      type='text'
      className={styles.input}
      placeholder='...'
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
    
};

export default OrderOptionText;