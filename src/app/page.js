import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-stone-200 min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
