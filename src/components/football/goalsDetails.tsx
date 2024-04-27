import { SoccerBall } from "@phosphor-icons/react";

export const GoalsDetails = ({ goals }) => {
  return (
    <>
      <p>
        <strong>Goals</strong>:
      </p>
      <ul className="no-bullets">
        {goals.map((item, key) => {
          return (
            <li key={key}>
              <SoccerBall size={24} />
              &nbsp;
              <strong>{item.player}</strong> - {item.mins} mins
            </li>
          );
        })}
      </ul>
    </>
  );
};
