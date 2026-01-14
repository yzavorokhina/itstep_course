import '../scss/index.scss';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import TodoList from './components/TodoList';

const appElement = document.getElementById('app');
const newAppElement = document.getElementById('app-2');

const root = createRoot(appElement);
const newRoot = createRoot(newAppElement);

root.render(<App/>);
newRoot.render(<TodoList/>);