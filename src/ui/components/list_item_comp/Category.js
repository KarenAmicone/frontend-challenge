export default function Category({ nameOfCategory }) {
    let category;
    switch (nameOfCategory) {
        case "restaurants-bars":
            category = "Restaurantes y bares";
            break;
        case "health-beauty":
            category = "Salud y belleza";
            break;
        case "food-beverages":
            category = "Comida y bebida";
            break;
        case "fashion-accessories":
            category = "Moda y accesorios";
            break;
        case "ecommerce":
            category = "Comercio electrónico";
            break;
        default:
            category = "Otros";
    }
    return <p>Categoría: {category}</p>;
}
