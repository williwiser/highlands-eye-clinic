import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Navigation />
      <Header
        title="Oops - Page not found"
        desc="It seems the page you're looking for doesn't exist."
      />
      <Footer />
    </>
  );
}

export default NotFound;
