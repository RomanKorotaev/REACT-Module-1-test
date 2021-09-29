import Painting from "./components/Painting"

export default function App() {
    return ( <div>
        <Painting
            url={painting.url}
            title={painting.title}
            authorName={painting.author.tag}
            authorUrl={painting.author.url}
            price={painting.price}
        />
    </div>
    );
}