import { getQuestionData } from "../console_test";
import { BadgeData, Badges } from "./Badges";
import { useQuestionData, useQuestionKey } from "./hooks";

export interface Props {
  title: string;
  badges?: string[]
}

export const QuestionHeader: React.FC<Props> = ({ title, badges }) => {
  const questionData = useQuestionData();
  const fullBadges = (badges || [])
    .map<BadgeData>(text => ({ text }))
    .concat(questionData.isCompleted
      ? { text: 'Completed', style: { backgroundColor: 'green' } }
      : questionData.lastAttemptTime
        ? { text: 'Attempted', style: { backgroundColor: '#ddd', color: 'black' } }
        : { text: 'Not attempted', style: { backgroundColor: '#ddd', color: 'black' } }
    )

  return <>
    <h2>{questionData.key}. {title}</h2>

    <Badges badges={fullBadges}/>

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
