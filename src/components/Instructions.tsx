export interface ArgsIntructionData {
  name: string;
  type: string;
  description?: string;
}
export interface ResultInstructionData {
  type: string;
  description?: string;
}

export interface Props {
  args: ArgsIntructionData[];
  returns: ResultInstructionData;
}

export const Instructions: React.FC<Props> = ({ args, returns }) => {
  const code = `
/**
${args.map(arg => ` * @param ${arg.name} - ${arg.type}${arg.description ? ` - ${arg.description}` : ''}`)}
 * @returns ${returns.type}${returns.description ? ` - ${returns.description}` : ''}
 **/
function mySolution(${args.map(arg => arg.name).join(', ')}) {

}
test(mySolution)
  `.trim();

  return (<div className="instructions-container">
    <details>
      <summary><strong>Instructions on writing the code</strong></summary>
      <ol>
        <li>Open your browser console and run the code below</li>
        <li>Copy the following code into the console</li>
        <pre style={{ marginLeft: '1rem' }}>
          {code}
        </pre>
        <li>Run it</li>
        <ul>
          <li>You will notice that it will run some tests and show you info about those tests</li>
        </ul>
        <li>Tweak the code in the console and run it until all the tests succeed</li>
      </ol>
    </details>
  </div>);
}