import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Sidebar} from './Sidebar';
import {Card} from './Card';
import {useState} from 'react';
import { SortBar } from './SortBar';
import { Footer } from './Footer';
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`App background ${theme}`} style={{minHeight: '100vh'}}>
      <Header toggleTheme={() => {theme == "dark" ? setTheme("light") : setTheme("dark")}}/>
      <div className="container">
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <div className="margin-double padding " style={{flex: 1}}>
          <SortBar />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div>
            <Sidebar/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
