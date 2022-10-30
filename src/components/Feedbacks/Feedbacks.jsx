import Statistics from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import React, { useState, useEffect } from 'react';
import css from 'components/Feedbacks/Feedbacks.module.css';

export function Feedbacks() {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercent, setPositivePercent] = useState(0);

  // handleOptions = choosenOption => {
  //   this.setState(prevState => ({
  //     [choosenOption]: prevState[choosenOption] + 1,
  //   }));
  // };

  const handleBad = () => {
    setBad(prevBad => prevBad + 1);
  };
  const handleNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };
  const handleGood = () => {
    setGood(prevGood => prevGood + 1);
  };

  useEffect(() => {
    setTotal(bad + neutral + good);
  }, [bad, neutral, good]);

  useEffect(() => {
    setPositivePercent((good / total) * 100);
  }, [good, total]);

  return (
    <div className={css.feedback}>
      <Section title="Left your fuckback">
        <FeedbackOptions
          onBadClick={handleBad}
          onNeutralClick={handleNeutral}
          onGoodClick={handleGood}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            bad={bad}
            neutral={neutral}
            good={good}
            total={total}
            positive={positivePercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
