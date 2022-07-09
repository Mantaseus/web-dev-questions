import { useQuestionData } from "./hooks";

export interface BadgeData {
  text: string;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export interface Props {
  questionData: ReturnType<typeof useQuestionData>;
  badges?: string[];
}

export const Badges: React.FC<Props> = ({ questionData, badges }) => {
  const fullBadges = (badges || [])
    .map<BadgeData>(text => ({ text }))
    .concat(questionData.isCompleted
      ? { text: 'Completed', style: { backgroundColor: 'green' } }
      : questionData.lastAttemptTime
        ? { text: 'Attempted', style: { backgroundColor: '#ddd', color: 'black' } }
        : { text: 'Not attempted', style: { backgroundColor: '#ddd', color: 'black' } }
    )

  return (<div className="badge-list">
    {fullBadges.map(badge => <div key={badge.text} className="badge" style={badge.style}>
      {badge.text}
    </div>)}
  </div>);
};
