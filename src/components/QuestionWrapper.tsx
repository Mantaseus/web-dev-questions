import { AnyFunc, useSetupTestFunction } from "../console_test";
import { Badges } from "./Badges";
import { useQuestionData } from "./hooks";
import { IdealSolution } from "./IdealSolution";
import { ArgsIntructionData, Instructions, ResultInstructionData } from "./Instructions";
import { UserLastAttemptCode } from "./UserLastAttemptCode";

export interface Props<F extends AnyFunc> {
  testArgs: Parameters<F>[];
  idealSolution: F;
  title: string;
  funcArgsDoc: ArgsIntructionData[];
  funcReturnDoc: ResultInstructionData;
  badges?: string[];
}

export const QuestionWrapper = <F extends AnyFunc>({
  testArgs, idealSolution, title, funcArgsDoc, funcReturnDoc, badges, children
}: React.PropsWithChildren<Props<F>>): React.ReactElement => {
  const questionData = useQuestionData();
  useSetupTestFunction(questionData.key, testArgs, idealSolution);

  return <div className="page">
    <div className="question-container">
      <h2>{questionData.key}. {title}</h2>
      <Badges questionData={questionData} badges={badges}/>

      <div className="text-muted-sm" style={{ marginTop: '0.5rem' }}>
        {questionData.lastAttemptTime && `Last attempted: ${new Date(questionData.lastAttemptTime).toLocaleString()}`}
      </div>
      <div className="text-muted-sm">
        {questionData.completedTime && `Completed: ${new Date(questionData.completedTime).toLocaleString()}`}
      </div>

      {children}

      <UserLastAttemptCode questionData={questionData}/>
      <Instructions args={funcArgsDoc} returns={funcReturnDoc} />
      <IdealSolution func={idealSolution} />
    </div>
  </div>;
};