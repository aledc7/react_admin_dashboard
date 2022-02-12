import { Chart } from '../../Charts/Chart.jsx';
import './product.css';
import { productData } from '../../../dummyData.js';
import { Publish } from '@mui/icons-material';
import { useContext } from '../../../customHooks/useContext.jsx'

function Product() {

    const {
        dataStatus,
        todosFiltered,
        toggleCompleteTodo,
        deleteTodo,
        editTodo,
        openModal,
        setOpenModal,
        setIsUpdate,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        newTodoValue,
        setNewTodoValue,
        productName,
        setProductName,
        isUpdate,
        idEditado,
        setIdEditado,
    } = useContext();


    const onSubmit = (event) => {
        event.preventDefault();

        editTodo(productName);


        addTodo(newTodoValue, isUpdate, idEditado);

        // cierro el modal
        setOpenModal(false);
    }

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1>Product</h1>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        data={productData}
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
                <form className="productForm">

                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text"  name='name' id='name'/>
                        <label>Price</label>
                        <input type="text" placeholder='u$30' name='price' id='price' />

                        <label>in Stock</label>
                        <select name="inStock" id="instock">
                            <option value="yes">Si</option>
                            <option value="no">No</option>
                        </select>

                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Si</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://picsum.photos/50" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" name="uploadproduct" id="uploadproduct" className='uploadproduct' />
                        </div>

                    </div>

                </form>

            </div>

            <div className="outer">
                <div className="inner">
                    <button className="cancelBtn">Cancel</button>

                    <button
                        onClick={onSubmit}
                        type='submit'
                        className="updateBtn"
                    >Update </button>


                </div>
            </div>
        </div>
    )
}




export { Product };
