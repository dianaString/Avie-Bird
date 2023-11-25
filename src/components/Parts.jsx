import PropTypes from 'prop-types';

const Parts = (props) => {
  return (
    <li className="Head">
        <h2>{props.title}</h2>
    </li>
  )
}

Parts.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Parts