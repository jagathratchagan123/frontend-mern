
import ProductCard from './ProductCard';
import OrderSummary from './OrderSummary';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Camera",
            price: 3000,
            image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
        },

        {

            id: 2,
            name: "photo Frame",
            price: 200,
            image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*8k2DvhD6yjAOGbIh8G6XUA.jpeg"
        },
        {

            id: 3,
            name: "Beach Frame",
            price: 300,
            image: "https://picsum.photos/id/27/200"
        },

    ]

    return (
        <>
            <div className="mx-auto flex flex-col gap-4 bg-purple-200  w-[1000px] p-4 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center">Product List</h1>
                <div className="flex flex-row  justify-center gap-4 space-around">

                    {products.map((product) => {

                        return (
                            <ProductCard key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image} />
                        )
                    })}
                    <OrderSummary />

                </div>
            </div>
        </>
    )
}

export default ProductList;