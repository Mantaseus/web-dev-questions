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

  return (<>
    <h4>Instructions</h4>
    <ol>
      <li>Open your browser console and run the code below</li>
      <li>Tweak the code in the console and run it until all the tests succeed</li>
    </ol>
    <pre>
      {code}
    </pre>
  </>);
}