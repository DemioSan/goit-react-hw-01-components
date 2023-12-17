import styled from 'styled-components';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const StatSection = styled('section')`
  background-color: #f4bf96;
  border-radius: 0 60px 0 60px;
  width: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  .title {
    text-align: center;
    font-size: 50px;
    margin: 50px auto;
    color: #1f1717;
  }

  .stat-list {
    display: flex;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;

    .item {
      border: 1px solid #fcf5ed;
      width: 100px;
      height: 120px;
      text-align: center;
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .item:first-child {
      border-radius: 0 0 0 60px;
    }

    .label {
      font-size: 15px;
    }

    .percentage {
      font-size: 25px;
      font-weight: bold;
    }
  
`;

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatSection>
  );
};
