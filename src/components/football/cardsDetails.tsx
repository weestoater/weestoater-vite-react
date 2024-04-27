export const CardsDetails = ({ cards: any }) => {
  return (
    <>
      <p>
        <strong>Cards</strong>:
      </p>
      <ul className="no-bullets">
        {cards.map((item, key) => {
          return (
            <li key={key}>
              <div
                className={`cards ${item.card}`}
                data-testid={`${item.card}card${key}`}
              ></div>
              <strong>{item.player}</strong> - {item.mins} mins
            </li>
          );
        })}
      </ul>
    </>
  );
};
