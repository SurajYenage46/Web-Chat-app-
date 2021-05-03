import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav";
import Chatbody from './components/chatbody/chatbody';
function App() {
  return (
    <div className="__main">
         <Nav /> 
         <Chatbody />
    </div>
  );
}

export default App;
