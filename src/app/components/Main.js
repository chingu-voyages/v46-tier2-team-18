import Card from "./Card";
export default function Main() {
  return (
    <div>
      Main <br />
      <div className="flex flex-wrap justify-center mb-12">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
