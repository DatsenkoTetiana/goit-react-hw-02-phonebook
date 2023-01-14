import PropTypes from 'prop-types';
import '../Filter/Filter.module.css'
export const Filter = ({ filter, onChange }) => (
  <label>
    <input
      type="text"
      name={filter}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};