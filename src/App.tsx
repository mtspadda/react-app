import ListGroup from "./components/ListGroup";

function App() {
  let items = ["TOP", "MID", "JUNGLE", "BOT", "SUPORT"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Positions"}
        onSelectItem={handleSelectItem}
      />{" "}
    </div>
  );
}

export default App;
