
import paintings from './paintings.json'; // импортируем json-файл с данными (для примера динаммического изменения данных)
import Painting from './components/Painting'
import PaintingList from './components/PaintingList'

import Section from './components/Section'


export default function App() {
    return ( <div>
        <Painting
            // imageUrl={paintings[0].url}
            title={paintings[0].title}
            authorName={paintings[0].author.tag}
            authorUrl={paintings[0].author.url}
            // price="101dgdfgd"
            price={paintings[0].price}
            quantity={paintings[0].quantity }
        />

         <Painting
            imageUrl={paintings[1].url}
            title={paintings[1].title}
            authorName={paintings[1].author.tag}
            authorUrl={paintings[1].author.url}
            price={paintings[1].price}
            quantity={paintings[1].quantity }
        />

         <Painting
            imageUrl={paintings[2].url}
            title={paintings[2].title}
            authorName={paintings[2].author.tag}
            authorUrl={paintings[2].author.url}
            price={paintings[2].price}
            quantity={paintings[2].quantity }
        />
    </div>
    );
}


//  ---------------------------Start  3. Рендеринг по условию  ---------------------------

export function App3() {
    const isOnline1 =true;
    const isOnline2 =true;

    return (<div>
        <span>Это пример рендериинга по условию в React: </span>
        <br></br>
        {isOnline1 && 'Online! '}  
         {isOnline2 ? 'Online!' : 'Offline!'}  
    </div>
    );
}

//  ---------------------------End  3. Рендеринг по условию  ---------------------------


//  ---------------------------Start  4. Рендеринг коллекции  ---------------------------
export function App4_collection() {
   
    return (<div>
        <span>Так в React рендерится коллекция: </span> 

        {[1, 2, 3, 4, 5].map(el => (<div>{el}</div>))}
        
        {paintings.map(painting =>
            <Painting
                key={ painting.id}
                imageUrl={painting.url}
                title={painting.title}
                authorName={painting.author.tag}
                authorUrl={painting.author.url}
                price={painting.price}
                quantity={painting.quantity }
            />
            )}
        
        </div>
    );
}

//  ---------------------------End  4. Рендеринг коллекции  ---------------------------


//  ---------------------------Start  5. Рендеринг коллекции через отдельный компонент с айдишником (который в React DevTools отображается как ключ key)  ---------------------------

//Это функция рендеринга массива карточек. Вызываем функцию PaintingList, которой в пропсах передаём массив с исходными данными из json файла
export function AppRenderList() {
    return (
        <dev>
            <PaintingList items={paintings} />
        </dev>
    );
}


//  ---------------------------End  5. Рендеринг коллекции через отдельный компонент с айдишником (который в React DevTools отображается как ключ key)  ---------------------------



//  ---------------------------Start  6. Секции  ---------------------------
export function AppSection() {
    return (
        <dev>
            {/* <PaintingList items={paintings} /> */}
            <Section title="Топ недели" />
            <Section  />
        </dev>
    );
}


// Такая "ёлка" из вложенных компотентов, которые помещаются  как "дети" (а именно prop: children)
// называется Композиция
export function AppSection2() {
    return (
        <dev>
            {/* <PaintingList items={paintings} /> */}
            <Section title="Топ недели (Пример рендеринга Композиции)" >
                <PaintingList items={paintings} />
                </Section>
                
            <Section title="Лучшее (Пример рендеринга Композиции)">
                <PaintingList items={paintings} />
            </Section>
        </dev>
    );
}

//  ---------------------------End  6. Секции   ---------------------------
