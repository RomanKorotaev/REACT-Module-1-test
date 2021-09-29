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

// export default function App() {
//     const isOnline1 =true;
//     const isOnline1 =false;

//     return (<div>
//         {isOnline1 && 'Online! '}  

//          {isOnline2 ? 'Online!' : 'Offline!'} 
       
//     </div>
//     );
// }


//  ---------------------------End  3. Рендеринг по условию  ---------------------------
