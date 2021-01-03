import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Sidebar} from './Sidebar';
import {Card} from './Card';
import {useState} from 'react';
import { SortBar } from './SortBar';
import { Footer } from './Footer';
import { Documentation } from './Documentation/Documentation';

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`App background ${theme}`} style={{minHeight: '100vh'}}>
      <Header toggleTheme={() => {theme == "dark" ? setTheme("light") : setTheme("dark")}}/>
      <div className="container">
        <div className="flex row flex-wrap">
          <div className="margin-double padding flex-fill content">
          <SortBar />
            <div className="element contrast spaced semi-rounded margin">
              <Documentation />
            </div>
          </div>
          <div className="sidebar" style={{width: '300px', marginTop:'3rem', marginRight: '3rem'}}>
            <Sidebar/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
