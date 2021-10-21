import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <div>
      <p className="title">{title}</p>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
