import { getQuestionData } from "../console_test";
import { BadgeData, Badges } from "./Badges";
import { useQuestionData, useQuestionKey } from "./hooks";

export interface Props {
  title: string;
  badges?: string[]
}

export const QuestionHeader: React.FC<Props> = ({ title, badges }) => {
  const questionData = useQuestionData();

  return <>
    <h2>{questionData.key}. {title}</h2>
    <Badges badges={badges}/>
    <div className="question-attempt-info">
      {questionData.lastAttemptTime && <small>
        Last attempted: {new Date(questionData.lastAttemptTime).toLocaleString()}
      </small>}
      {questionData.completedTime && <small>
        Completed: {new Date(questionData.completedTime).toLocaleString()}
      </small>}
    </div>
  </>
}
