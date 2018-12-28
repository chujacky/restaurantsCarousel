const span = {
  color: 'orange',
  marginBottom: '2px',
  marginRight: '2px',
};

const card = {
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: '5%',
  width: '100%',
  padding: 0,
  fontSize: '12px',
  fontFamily: "'Nunito Sans', sans-serif",
  color: 'rgba(0,0,0,.55)',
};

const cardImage = {
  height: '132px',
  width: '100%',
  overflow: 'hidden',
  borderTopLeftRadius: '5%',
  borderTopRightRadius: '5%',
  margin: 0,
};

const cardInfo = {
  margin: 0,
  padding: '12px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const title = {
  color: 'black',
  fontSize: '16px',
  paddingBottom: '10px',
  margin: 0,
};

const listEntry = {
  padding: '0 20px',
  height: 'auto',
  width: 'auto',
  boxSizing: 'border-box',
  maxWidth: '33%',
  flex: '1 0 33%',
};

const ellipsis = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const carousel = {
  width: '936px',
  maxWidth: '100%',
  margin: 0,
  padding: 0,
  position: 'relative',
};

const carouselBody = {
  margin: 0,
  padding: 0,
  maxWidth: '100%',
  overflowX: 'scroll',
  overflow: 'hide',
  display: 'flex',
};

const lowerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px, 0',
};

const stars = {
  display: 'flex',
  flexDirection: 'row',
};

const rightArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  right: '-12px',
  top: '120px',
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
  left: '-12px',
  top: '120px',
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

const reviewSummary = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '12px',
  color: 'rgba(0, 0, 0, 0.55)',
};

const review = {
  display: 'flex',
  fontFamily: "'Nunito Sans', sans-serif",
  margin: '10px',
  justifyContent: 'flex-start',
  width: '100%',
};

const reviewContent = {
  width: '80%',
  color: 'black',
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
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  backgroundColor: 'white',
  top: '-15px',
  right: '-110px',
  visibility: 'hidden',
};

const tooltipBodyActive = {
  zIndex: 1,
  visibility: 'visible',
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
};

const tooltip = {
  position: 'relative',
  height: '220px',
  width: '220px',
  visibility: 'collapse',
};

export default {
  span,
  listEntry,
  stars,
  lowerRow,
  carousel,
  carouselBody,
  avatar,
  rightArrow,
  leftArrow,
  reviewSummary,
  reviewContent,
  review,
  reviewBorder,
  title,
  tooltip,
  tooltipBody,
  tooltipBodyActive,
  ellipsis,
  card,
  cardImage,
  cardInfo,
};
