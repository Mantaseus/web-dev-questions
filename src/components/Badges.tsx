export interface Props {
  badges: string[];
}

export const Badges: React.FC<Props> = ({ badges }) => {
  return (<div className="badge-list">
    {badges.map(badge => <div key={badge} className="badge">
      {badge}
    </div>)}
  </div>);
};
