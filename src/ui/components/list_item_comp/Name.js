export default function Name({ name }) {
    const normalizingName = name.toUpperCase();
    return <h2>{normalizingName}</h2>;
}
