import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Profile name="Anu" role="Developer" />
      <Profile name="Priya" role="Designer" />
      <Profile name="Rahul" role="Tester" />

      <Footer />
    </div>
  );
}

export default App;