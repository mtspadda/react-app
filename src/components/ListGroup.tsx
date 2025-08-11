function ListGroup() {
  const items = ["top", "mid", "jungle", "bot", "suport"];
  items.map((item) => <li key={item}>{item}</li>);
  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
