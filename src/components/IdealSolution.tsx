import beautify from 'js-beautify';
import { jsBeautifyOptions } from './types';

export interface Props {
  func: Function;
}

export const IdealSolution: React.FC<Props> = ({ func }) =>
  (<div className="ideal-solution-container">
    <details>
      <summary><strong>Ideal Solution</strong></summary>
      <pre>
        {beautify.js(`test(${func.toString()})`, jsBeautifyOptions)}
      </pre>
    </details>
  </div>);
