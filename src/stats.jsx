import './stats.css';

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '120+', label: 'Happy Clients' },
  { value: '15+', label: 'Industry Awards' },
  { value: '24/7', label: 'Support Available' },
];

const Stats = () => {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="stats-grid container">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
