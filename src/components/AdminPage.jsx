const AdminPage=()=>{
    return (
        <>
        <div className="flex-col  mt-50  rounded-xl ml-175 bg-slate-500  shadow-2xl h-[500px] w-[500px] py-20 flex justify-center">
            <h1 className="flex mb-5 justify-center mt-1 text-3xl mb-6 font-bold ">Add Product</h1>
            <div className="flex-col  flex align-center justify-center">
                <input type="text" placeholder="Product Name" className="flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5"/>
                <input type="text" placeholder="Product Price" className="flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5"/>
                {/* <input type="text" placeholder="Product Description" className="flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5"/> */}
                <input type="text" placeholder="Product url" className=" flex border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-6 mx-7 p-5"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white  mb-3 mx-20 font-bold p-5 rounded-lg">Add Product</button>
            </div>
            
        </div>
        </>
    )
}
export default AdminPage;