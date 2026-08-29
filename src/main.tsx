import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// StrictMode is intentionally omitted so the visible render counters
// are easier to understand in this performance demo.
createRoot(document.getElementById('root')!).render(<App />);
