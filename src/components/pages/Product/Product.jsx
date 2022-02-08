import { Link } from 'react-router-dom';
import { Chart } from '../../Charts/Chart.jsx';
import './product.css';
import { productData } from '../../../dummyData.js';

function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                <Chart 
                    data={ productData } 
                    dataKey="Ventas" 
                    title="Registro de Ventas"
                />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://picsum.photos/50" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">29</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Ventas</span>
                            <span className="productInfoValue">329</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Activo:</span>
                            <span className="productInfoValue">Si</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">En Stock:</span>
                            <span className="productInfoValue">Si</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                
            </div>
        </div>
    )
}


export { Product }
