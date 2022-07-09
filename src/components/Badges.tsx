export interface BadgeData {
  text: string;
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export interface Props {
  badges: BadgeData[];
}

export const Badges: React.FC<Props> = ({ badges }) => {
  return (<div className="badge-list">
    {badges.map(badge => <div key={badge.text} className="badge" style={badge.style}>
      {badge.text}
    </div>)}
  </div>);
};
