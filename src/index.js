import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Boris' },
  { id: 3, name: 'Helena' },
  { id: 4, name: 'John' },
];

let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hello, how are you?" },
  { id: 3, message: "I'm fine, and you?" },
];

let personalInfos = [
  { id: 1, personalinfo: "Date of Birth: 21 march" },
  { id: 2, personalinfo: "City: SPB" },
  { id: 3, personalinfo: "Education: MGTU'16" },
  { id: 4, personalinfo: "Web Site: https://it-cool.com" },
]

let posts = [
  {
    id: 1,
    postMessage: "hi, whatsuuuup",
    likeCount: 15
  },
  {
    id: 2,
    postMessage: "it's my first project",
    likeCount: 20
  },
];

root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} personalInfos={personalInfos} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
