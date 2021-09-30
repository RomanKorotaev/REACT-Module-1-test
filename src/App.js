import Painting from './components/Painting'
import paintings from './paintings.json'; // импортируем json-файл с данными (для примера динаммического изменения данных)

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

//  ---------------------------Start  4. Рендеринг коллекции  ---------------------------