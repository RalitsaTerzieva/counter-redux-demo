import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store.ts';
import Counter from './Counter.tsx';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Counter />
  </Provider>
)
