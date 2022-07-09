export interface Props {
  func: Function;
}

export const IdealSolution: React.FC<Props> = ({ func }) =>
  (<div className="ideal-solution-container">
    <details>
      <summary><strong>Ideal Solution</strong></summary>
      <pre>
        {func.toString()}
      </pre>
    </details>
  </div>);
