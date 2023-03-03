import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'src/ui/containers/GlobalStyles';
import reportWebVitals from 'src/reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(

  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,

);

reportWebVitals();
