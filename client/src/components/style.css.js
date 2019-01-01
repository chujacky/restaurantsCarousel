const span = {
  color: 'orange',
  marginBottom: '2px',
  marginRight: '2px',
};

const card = {
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: '5px',
  width: '100%',
  padding: 0,
  fontSize: '12px',
  position:'relative',
};

const cardImage = {
  height: '132px',
  width: '100%',
  overflow: 'hidden',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
  margin: 0,
};

const cardInfo = {
  margin: 0,
  padding: '12px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  fontFamily: "'Nunito Sans', sans-serif",
  color: 'rgba(0,0,0,.55)',
};

const title = {
  color: 'rgba(0,0,0,.87)',
  fontSize: '16px',
  paddingBottom: '10px',
  margin: 0,
};

const ellipsis = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const carousel = {
  width: '100%',
  margin: 0,
  padding: 0,
  position: 'relative',
};

const lowerRow = {
  display: 'flex',
  justifyContent: 'space-between',
};

const stars = {
  display: 'flex',
  flexDirection: 'row',
};

const rightArrow = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  right: '0px',
  top: '110px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '40px',
  fontSize: '25px',
  fontWeight: '700',
  color: '#0070eb',
};

const leftArrow = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  left: '0px',
  top: '110px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '40px',
  fontSize: '25px',
  fontWeight: '700',
  color: '#0070eb',
};

const reviewSummary = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '14px',
  color: 'rgba(0, 0, 0, 0.55)',
};

const review = {
  display: 'flex',
  fontFamily: "'Nunito Sans', sans-serif",
  padding: '20px 0',
  borderBottom: '2px solid rgba(0,0,0,.2)',
  justifyContent: 'flex-start',
  width: '100%',
};

const reviewContent = {
  width: '80%',
  color: 'rgba(0,0,0,.87)',
  fontSize: '14px',
};

const avatar = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#40c2de',
  textAlign: 'center',
  lineHeight: '40px',
  margin: '20px 10px',
  color: 'white',
};

const reviewBorder = {
  borderLeft: '1px solid gainsboro',
  borderRight: '1px solid gainsboro',
  margin: '0 15px',
  padding: '0 10px',
};

const tooltipBody = {
  display: 'flex',
  width: '300px',
  height: 'auto',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  backgroundColor: 'white',
  visibility: 'collapse',
  border: '1px solid rgba(0,0,0,.1)',
};

const tooltipLink = {
  color: '#0070eb',
};

const tooltipBodyActive = {
  zIndex: 2,
  visibility: 'visible',
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
};

const bookmarkButton = {
  borderRadius: '50%',
  height: '36px',
  width: '36px',
  border: 'none',
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
};

const bookmark = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '12px 16px',
};

export default {
  span,
  listEntry,
  stars,
  lowerRow,
  carousel,
  avatar,
  rightArrow,
  leftArrow,
  reviewSummary,
  reviewContent,
  review,
  reviewBorder,
  title,
  tooltipLink,
  tooltipBody,
  tooltipBodyActive,
  ellipsis,
  card,
  cardImage,
  cardInfo,
  bookmarkButton,
  bookmark,
};
