import logo from './logo.svg';
import './App.css';

import writers from "./writers"
import { ProfileCard } from './profileCard';

function App() {
  return (
    <div>
      <h1>Writer Profiles</h1>
     <div className="container">
       {writers.map((writer) => (
         <ProfileCard writer={writer} />
       ))} 
    
        </div>
    </div>
  );
}

export default App;
