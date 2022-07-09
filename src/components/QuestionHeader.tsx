import { getQuestionData } from "../console_test";
import { Badges } from "./Badges";
import { useQuestionData, useQuestionKey } from "./hooks";

export interface Props {
  title: string;
  badges?: string[]
}

export const QuestionHeader: React.FC<Props> = ({ title, badges }) => {
  const questionData = useQuestionData();
  return <>
    <h2>{questionData.key}. {title}</h2>
    {questionData.lastAttemptTime && <small className="muted" style={{ display: 'inline-block', marginBottom: '1rem' }}>
      Last attempted: {new Date(questionData.lastAttemptTime).toLocaleString()}
    </small>}

    {badges && <Badges badges={badges}/>}
  </>
}
