
import { useRef } from 'react';

const data = [
    {
        titlex: "Title 1",
        subtitle: "Subtitle 1",
        color: "yellow",
    },
    {
        titlex: "Title 2",
        subtitle: "Subtitle 2",
        color: "pink",
    },
    {
        titlex: "Title 3",
        subtitle: "Subtitle 3",
        color: "green",
    }
]

function App() {
    const h1Ref = useRef();
    const titleRefs = data.map(() => ({
        titleRef: useRef(),
        subtitleRef: useRef()
    }));

    const changeColors = () => {
        h1Ref.current.style.color = "blue";

        data.forEach((v, index) => {
            titleRefs[index].titleRef.current.style.color = v.color;
            titleRefs[index].subtitleRef.current.style.color = v.color;
        });
    }

    return (
        <div className="App container mt-5">
            <h1 ref={h1Ref} onClick={changeColors}>Hello</h1>


            <main>
                {data.map((v, index) => (
                    <div key={v.titlex}>
                        <h2 ref={titleRefs[index].titleRef}>{v.titlex}</h2>
                        <p ref={titleRefs[index].subtitleRef}>{v.subtitle}</p>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;