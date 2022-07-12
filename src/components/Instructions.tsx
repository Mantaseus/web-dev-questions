import { useQuestionData } from "./hooks";
import ts from 'typescript';
import { useMemo } from "react";

export interface Props {
  tsTypeStr: string;
  questionData: ReturnType<typeof useQuestionData>;
}

function nodeIsAliasDeclaration(node: ts.Node): node is ts.TypeAliasDeclaration {
  return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}

function nodeIsFunctionDeclaration(node: ts.Node): node is ts.FunctionTypeNode {
  return node.kind === ts.SyntaxKind.FunctionType;
}

export const Instructions: React.FC<Props> = ({ tsTypeStr, questionData }) => {
  const { args, returns } = useMemo(() => {
    const sourceFile = ts.createSourceFile('file.ts', `type a = ${tsTypeStr}`, ts.ScriptTarget.ES2015, true);

    const aliasT = sourceFile.statements[0];
    if (nodeIsAliasDeclaration(aliasT)) {
      const funcT = aliasT.type;
      if (nodeIsFunctionDeclaration(funcT)) {
        const returns = funcT.type.getText();
        const args = funcT.parameters.map((arg, i) => ({
          name: arg.name.getText(),
          type: arg.type?.getText() || 'unknown',
        }));
        return { args, returns }
      }
    }

    return { args: [], returns: 'unknown' };
  }, [tsTypeStr])

  const code = `
/**
${args.map(arg => ` * @param ${arg.name} - ${arg.type}`).join('\n')}
 * @returns ${returns}
 **/
test(function mySolution(${args.map(arg => arg.name).join(', ')}) {

})
  `.trim();

  return (<div className="instructions-container">
    <details open={!questionData.lastAttemptTime}>
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