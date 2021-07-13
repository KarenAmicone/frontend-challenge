export default function Media({ offerMedia }) {
    return (
        <div className="media-container">
            <img src={offerMedia} alt="Offer logo" className="media-img" />
        </div>
    );
}
