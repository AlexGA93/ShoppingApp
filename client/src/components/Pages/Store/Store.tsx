import {useState} from 'react';
import {useSelector} from 'react-redux';
import ReactPaginate from "react-paginate";
import {IAppState, IelementProduct} from '../../../Redux/type'
import Product from '../../Product/Product';
import './Store.scss';


interface SelectedPagination {
    selected: number
}


const Store = (): JSX.Element => {
    //access to the state
    const stateProducts = useSelector<IAppState, IAppState['shopping']['products']>(state => state.shopping.products);
    // console.log(stateProducts);
    

    const [search, setSearch] = useState("");
    // pages numbers
    const [pageNumber, setPageNumber] = useState(0);
    // products perpage
    const productsPerPage = 6;
    // pages visited
    const pagesVisited = pageNumber*productsPerPage;

    
    
    // filtered products
    const filteredProducts = search.length === 0 ? (
        stateProducts
        ) : (
            stateProducts.filter( product => product.title.toLowerCase().includes(search.toLowerCase()))
        )

    // pagination
    const pageCount = Math.ceil((stateProducts? stateProducts.length: 0 )/ productsPerPage);

    const changePage = ({ selected }: SelectedPagination) => {
        setPageNumber(selected);
    };

    return (
       
        <div className="products">
            {/* search bar */}
            <input 
                type="text"
                placeholder="Product Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
            />
            {/* <hr /> */}
             <div className="products__list">
                {
                    filteredProducts.slice(pagesVisited, pagesVisited+productsPerPage).map((element: IelementProduct) => (
                        <Product className="products__list_element" key={element.id} id={element.id} />
                    ))
                }
            </div>
            <div className="products__pagination">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    breakLabel={"."}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>

        <div>© 2021 Vikingz Shop · Built by <a href="https://github.com/AlexGA93">Alejandro Gimeno Ataz</a></div>
        </div>
    )
}



export default Store;
