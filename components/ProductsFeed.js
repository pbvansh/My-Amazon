import Product from "./Product"
import dynamic from 'next/dynamic'
const ProductsFeed = ({ products }) => {
    return (
        <section className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-60 mx-auto">

            {products.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            ))}

            <img
                className="md:col-span-full mx-auto"
                src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                alt=""
            />

            <div className="md:col-span-2">
            {products.slice(4,5).map(({ id, title, price, description, category, image, rating }) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating}
                />
                ))}
            </div>

            {products.slice(5,products.length).map(({ id, title, price, description, category, image, rating }) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating}
                />
            ))}

        </section>

    )
}

export default dynamic(() => Promise.resolve(ProductsFeed), { ssr: false });
