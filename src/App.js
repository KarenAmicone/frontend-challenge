import "./index.scss";
import DirectoryList from "ui/components/DirectoryList";

const fetchOffersList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory",
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err.message));
    }, []);

    return { data, isLoading };
};

export default function App() {
    return (
        <main>
            <div className="intro">
                <h1>Afiliados Reworth</h1>
                <p>
                    Conococe las recompensas que puedes obtener al comprar con
                    ellos
                </p>
            </div>
            <DirectoryList fetchResults={fetchOffersList()} />
        </main>
    );
}
