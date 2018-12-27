
import React from 'react';
import styles from './style.css.js';

const Tooltip = (props) => {
  console.log(props.hover === props.id);
  const style = props.hover === props.id
    ? Object.assign({}, styles.tooltipBody, styles.tooltipBodyActive)
    : styles.tooltipBody;

  return (
    <div style={style}>
      <p>Here's what people are saying:</p>
      <div className="summary" style={styles.reviewSummary}>
        <div>
          <h4 style={styles.title}>{props.summary.good}%</h4>
          <span>Food was</span>
          <br/>
          <span>good</span>
        </div>
        <div style={styles.reviewBorder}>
          <h4 style={styles.title}>{props.summary.onTime}%</h4>
          <span>Delivery was</span>
          <br/>
          <span>on time</span>
        </div>
        <div>
        <h4 style={styles.title}>{props.summary.accurate}%</h4>
          <span>Order was</span>
          <br/>
          <span>accurate</span>
        </div>
      </div>
      <div className="review" style={styles.review}>
        <div className="avatar" style={styles.avatar}>{props.review.username[0]}</div>
        <div style={styles.reviewContent}>
          <h4>{props.review.username}</h4>
          <div>{props.review.review}</div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
