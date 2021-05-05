import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      className={styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
