const span = {
  color: 'orange',
};

const image = {
  width: '255px',
  borderRadius: '5%',
};

const listEntry = {
  width: '30%',
  border: '1px gainsboro solid',
  borderRadius: '5%',
  fontSize: '14px',
  display: 'inline',
  flexDirection: 'column',
  margin: '15px',
};

const carousel = {
  margin: 0,
  padding: 0,
  position: 'relative',
  width: '80%',
  border: '1px green solid',
};

const carouselBody = {
  display: 'flex',
  margin: 0,
  padding: 0,
  width: '90%',
  overflow: 'auto',
  border: '1px red solid',
};


const lowerRow = {
  display: 'flex',
  justifyContent: 'space-between',
};

const list = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  visibility: 'hidden',
  transition: 'visibility 1s ease 0s',
};

const listActive = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  visibility: 'visible',
  transition: 'visibility 01s ease 0s',
};

const list0 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(0%)',
  transition: 'transform 1s ease 0s',
};

const list1 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-25%)',
  transition: 'transform 1s ease 0s',
};

const list2 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-50%)',
  transition: 'transform 1s ease 0s',
};

const list3 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-75%)',
  transition: 'transform 1s ease 0s',
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
  list0,
  list1,
  list2,
  list3,
  stars,
  listInfoLeft,
  listInfoRight,
  lowerRow,
  image,
  carousel,
  carouselBody,
  rightArrow,
  leftArrow,
};
