const TitleEl = ({ locked }) => {
  return (
    <h1 className="counter">
      {locked ? (
        <span>you've reached the limit on this thing</span>
      ) : (
        <span>you've got clicks left</span>
      )}
    </h1>
  );
};

export default TitleEl;
