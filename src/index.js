// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App2 from './App2';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//  ==============================================

// -------------------------- 1. Концепция №1 : react-элементы --------------------------
// import React from 'react';
import ReactDOM from 'react-dom'; //это библиотека для рендера react-элементов


import App from './App';

// const elem1 = React.createElement('span', { children: 'ПРИВЕТ' });
// const elem2 = React.createElement('span', {children: 'МИР!'})

const elem1 =<span>ПРИВЕТ</span>
const elem2 =<span> МИР!</span>

// const element = React.createElement('div', {
//     a: 5,
//     b: 10,
//     // children: [elem1, ' ', elem2]
//     children: 'Привет мир!'
// });

// console.log(element);
// ReactDOM.render(element, document.querySelector('#root'))


// const jsxElement = <div>Привет мир!</div>


const jsxElement = <div>
        { elem1 }
        { elem2}
    </div>

console.log("jsxElement : ", jsxElement);
// ReactDOM.render(jsxElement, document.querySelector('#root'))


// -------------------------- 2. Концепция №2 : react-компоненты --------------------------

// import paintings from '../src/paintings.json'; // импортируем json-файл с данными (для примера динаммического изменения данных)

const data = {
    "id": "id-1",
    "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    "title": "Feathers. Art abstract",
    "price": 500,
    "author": {
        "tag": "ractapopulous",
        "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
};



// ReactDOM.render(painting, document.querySelector('#root'))

 
 
// const painting = paintings[2]; 

// ReactDOM.render(<Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     authorUrl={painting.author.url}
//     price={painting.price}
//     />,
//     document.querySelector('#root')
// );

 ReactDOM.render(<App />, document.querySelector('#root')
 );