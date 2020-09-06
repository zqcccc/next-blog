import React from 'react';
import { getLayout } from '../src/container/layout/Layout';
import FeedbackForm from '../src/components/FeedbackForm';
import './Feedback/Feedback.less';

function Feedback() {
  return (
    <FeedbackForm />
  );
}
// Feedback.getLayout = getLayoutFn({
//     activeTag: '反馈'
// })
Feedback.getLayout = getLayout;
Feedback.layoutProps = 'Feedback layout 123';
export default Feedback;
