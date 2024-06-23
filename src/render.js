import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addNewMessage, updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addNewMessage={addNewMessage}
                    updateNewMessageText={updateNewMessageText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

