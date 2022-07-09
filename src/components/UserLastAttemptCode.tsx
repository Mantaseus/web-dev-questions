import beautify from 'js-beautify';

import type { useQuestionData } from "./hooks";
import { jsBeautifyOptions } from './types';

export interface Props {
  questionData: ReturnType<typeof useQuestionData>;
}

export const UserLastAttemptCode: React.FC<Props> = ({ questionData }) => {
  if (!questionData.lastAttemptCode || !questionData.lastAttemptResult) {
    return null;
  }

  return (<div className="ideal-solution-container">
    <details open>
      <summary><strong>Code from your last attempt</strong></summary>
      <div className="text-muted-sm" style={{ marginTop: '0.5rem' }}>
        Result from this code: {questionData.lastAttemptResult}
      </div>
      <pre>
        {beautify.js(questionData.lastAttemptCode, jsBeautifyOptions)}
      </pre>
    </details>
  </div>);
};
