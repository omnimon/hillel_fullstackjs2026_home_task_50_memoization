type Props = {
  label: string;
  value: string | number;
  hint?: string;
};

export const StatCard = ({ label, value, hint }: Props) => (
  <div className="stat-card">
    <span>{label}</span>
    <strong>{value}</strong>
    {hint && <small>{hint}</small>}
  </div>
);
