import { Provider } from 'react-redux';
import './App.css';
import Layout from './components/layout';
import { Store } from './store/store';

function App() {
  return (
    <div className="App">
        <Provider store={Store}>
          <Layout />
        </Provider>
    </div>
  );
}

export default App;
