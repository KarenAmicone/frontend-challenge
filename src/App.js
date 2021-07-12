import DirectoryList from "ui/components/DirectoryList";

const fetchOffersList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(
            "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory",
        )
            .then(res => {
                return res.json();
            })
            .then(data => setData(data.data));
    }, []);
    return data;
};

export default function App() {
    return <DirectoryList offerList={fetchOffersList()} />;
}
