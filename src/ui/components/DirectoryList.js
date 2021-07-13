import ListItem from "./ListItem";

export default function DirectoryList({ fetchResults }) {
    const [data, setData] = useState(fetchResults.data);
    const sortedArray = () =>
        fetchResults.data.sort((a, b) => {
            return -a.discount + b.discount;
        });

    const handleClick = () => {
        setData(sortedArray());
        return data;
    };

    return (
        <div>
            {fetchResults.isLoading ? (
                <div className="loader-container">
                    <h2>Cargando...</h2>
                </div>
            ) : (
                <div className="offers-list-container">
                    <button onClick={handleClick} className="sort-button">
                        Ordenar por mayor recompensa
                    </button>
                    <ul className="offers-list appear">
                        {fetchResults.data.map(offer => (
                            <ListItem
                                key={offer.venues[0].name}
                                offer={offer}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
