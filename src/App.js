
import './App.css';
import Welcome from './components/Welcome';
import Header from './components/Header';
import UploadMessage from './components/Upload';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome/>
      <UploadMessage/>
      <Messages />
    </div>
  );
}

export default App;
