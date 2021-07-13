import Category from "./list_item_comp/Category";
import Media from "./list_item_comp/Media";
import Cashback from "./list_item_comp/Cashback";
import Name from "./list_item_comp/Name";

export default function ListItem({ offer }) {
    return (
        <li key={offer.venues[0]._id}>
            <Media offerMedia={offer.media} />
            <Name name={offer.name} />
            <Cashback cashback={offer.dv_cashback} />
            <Category nameOfCategory={offer.dv_category} />
        </li>
    );
}
