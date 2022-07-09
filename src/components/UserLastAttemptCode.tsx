import beautify, { JSBeautifyOptions } from 'js-beautify';

import { useQuestionData } from "./hooks";
import { jsBeautifyOptions } from './types';

export const UserLastAttemptCode: React.FC = () => {
  const questionData = useQuestionData();

  if (!questionData.lastAttemptCode) {
    return null;
  }

  return (<div className="ideal-solution-container">
    <details open>
      <summary><strong>Code from your last attempt</strong></summary>
      {questionData.lastAttemptResult && <div className="question-attempt-info">
        <small>Result from this code: {questionData.lastAttemptResult}</small>
      </div>}
      <pre>
        {beautify.js(questionData.lastAttemptCode, jsBeautifyOptions)}
      </pre>
    </details>
  </div>);
};
