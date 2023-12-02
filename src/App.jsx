import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import FAQuestions from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";
import UserForm from "./components/ContactUs/UserForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <FAQuestions />
      <ContactUs />
      <UserForm />
      <Footer />
    </>
  );
}

export default App;
