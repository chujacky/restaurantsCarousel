const span = {
  color: 'orange',
};

const image = {
  width: '255px',
  borderRadius: '5%',
};

const listEntry = {
  width: '30%',
  height: 'auto',
  border: '1px gainsboro solid',
  borderRadius: '5%',
  display: 'flex',
  flexDirection: 'column',
  margin: '20px',
};

const carousel = {
  display: 'flex',
  margin: 0,
  padding: 0,
  position: 'relative',
  justifyContent: 'center',
  width: '70%',
};

const lowerRow = {
  display: 'flex',
  justifyContent: 'space-between',
};

const list = {
  display: 'none',
  flexDirection: 'row',
  justifyContent: 'center',
  fontSize: '14px',
  width: '30%',
};

const listActive = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontSize: '14px',
  width: '100%',
};

const stars = {
  display: 'flex',
  flexDirection: 'row',
};

const listInfoLeft = {
  marginLeft: '8px',
};

const listInfoRight = {
  marginRight: '8px',
};

const rightArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  right: '-10px',
  top: '150px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '30px',
  fontWeight: '700',
  color: '#0070eb',
};

const leftArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  left: '-10px',
  top: '150px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '30px',
  fontWeight: '700',
  color: '#0070eb',
};

export default {
  span,
  listEntry,
  list,
  listActive,
  stars,
  listInfoLeft,
  listInfoRight,
  lowerRow,
  image,
  carousel,
  rightArrow,
  leftArrow,
};
