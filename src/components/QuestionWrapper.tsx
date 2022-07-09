import { AnyFunc, TestData, useSetupTestFunction } from "../console_test";
import { useQuestionData, useQuestionKey } from "./hooks";
import { IdealSolution } from "./IdealSolution";
import { ArgsIntructionData, Instructions, ResultInstructionData } from "./Instructions";
import { QuestionHeader } from "./QuestionHeader";
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
      <QuestionHeader questionData={questionData} title={title} badges={badges}/>

      {children}

      <UserLastAttemptCode questionData={questionData}/>
      <Instructions args={funcArgsDoc} returns={funcReturnDoc} />
      <IdealSolution func={idealSolution} />
    </div>
  </div>;
};
