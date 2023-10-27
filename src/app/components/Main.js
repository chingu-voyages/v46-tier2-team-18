import SearchBar from './SearchBar';
import Card from './Card';
import Modal from './Modal';

export default function Main() {
  return (
    <div>
      <Modal />
      <br />
      <SearchBar />
      <div className="flex flex-wrap justify-center mb-12">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
