import SearchBar from "./SearchBar";
import Card from "./Card";

export default function Main() {
  return (
    <div>
      Main <br />
      <SearchBar />
      <div className="flex flex-wrap justify-center mb-12">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
