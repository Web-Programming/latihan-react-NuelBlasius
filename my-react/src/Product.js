import React  from "react";
import image1 from './public/asus.png'
import image2 from './public/acer.jpg'
import image3 from './public/lenovo.png'

function Product() {
    const product = [
        { id : "P001", nama : "Asus", harga : 8000000, image : image1 },
        { id : "P002", nama : "Acer", harga : 7000000, image : image12 },
        { id : "P003", nama : "Lenovo", harga : 9000000, image : image3 },
    ];
    const displayProduct = product.map((product) => (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nama}</td>
            <td>{product.harga}</td>
            <td>
                <img src={product.image} alt={product.nama} style={{ width: '50px', height: 'auto' }} />
            </td>
        </tr>
    )) ;
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                    <th>Gambar</th>
                </tr>
            </thead>
            <tbody>
                {displayProduct}
            </tbody>
        </table>
    ) 
}

export default Product;