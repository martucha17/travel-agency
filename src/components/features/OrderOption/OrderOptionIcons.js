import React from 'react';
import PropTypes from 'prop-types';
import styles from './Orderoption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcon = ({values, setOptionValue, required}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div 
        className={styles.icon} 
        onClick={() => setOptionValue('')}
      >
        <Icon className={styles.icon} name={'times-circle'}/>
        none
      </div>
    )}
    {values.map(value => (
      <div 
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcon.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcon;
