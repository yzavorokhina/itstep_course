import '../scss/index.scss';
import { createRoot } from 'react-dom/client';
import App from './components/App.js'

let element = document.querySelector(".tracker");

let rootElement = createRoot(element);
rootElement.render(<App />);
