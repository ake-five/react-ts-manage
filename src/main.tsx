import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import "antd/dist/antd.css";

// if (window.__POWERED_BY_QIANKUN__) {
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
// }
export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props: any) {
  console.log(props)
  console.log('主应用传递过来的值，在这里通过 props接收')

  createRoot(props.container ? props.container.querySelector('#root') : document.getElementById('root')).render(<App />);
}

export async function unmount(props: any) {
  const rootElement = props.container ? props.container.querySelector('#root') : document.getElementById('root');
  if (rootElement) {
    // ReactDOM.unmountComponentAtNode(rootElement);
  }
}

export async function update(props: any) {
  console.log('update props', props);
}

// !(window as any).__POWERED_BY_QIANKUN__ && mount({})
if (!(window as any).__POWERED_BY_QIANKUN__) {
  mount({})
}
