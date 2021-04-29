import Router from './Router/Router';
import GlobalStateProvider from './Global/GlobalStateProvider'
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Header />
        <Router />
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
