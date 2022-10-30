import React from 'react';

export const FeedbackOptions = ({
  onBadClick,
  onNeutralClick,
  onGoodClick,
}) => {
  return (
    <>
      <button type="button" onClick={onBadClick} key="bad">
        Bad
      </button>
      <button type="button" onClick={onNeutralClick} key="neutral">
        Neutral
      </button>
      <button type="button" onClick={onGoodClick} key="good">
        Good
      </button>
    </>
  );
};
