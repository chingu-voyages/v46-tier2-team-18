import SearchBar from './SearchBar';
import Card from './Card';
import WelcomeModal from './WelcomeModal';

export default function Main() {
  return (
    <div>
      <WelcomeModal />
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
