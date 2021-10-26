import React,{useState} from 'react';
import {useSelector} from 'react-redux';
// component Navbar
import Product from './Product/Product';
import ReactPaginate from "react-paginate";


import './Products.scss';

const Products = () => {
    // access to the state
    const stateProducts = useSelector(state => state.products);

    // console.log(stateProducts);
    // pages numbers
    const [pageNumber, setPageNumber] = useState(0);
    // products perpage
    const productsPerPage = 10;
    // pages visited
    const pagesVisited = pageNumber*productsPerPage;


    var products = [];
    for(var productElement in stateProducts){
        products.push(stateProducts[productElement]);
    }
    // display products
    const displayProducts = products
    .slice(pagesVisited, pagesVisited+productsPerPage)
    .map( item => <Product key={item.id}  item={item} />);


    
    const pageCount = Math.ceil(products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="products">
            
            <div className="products__title">
                <h1>Product List</h1>
                <hr />
            </div>
            <div className="products__list">
                {displayProducts}
                {/* {
                    products.map(
                        item =>  {
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem>
                                    <Product key={item.id}  item={item} />
                                </PaginationItem>
                            </Pagination>
                        }
                    )
                } */}
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
        </div>
    )
}



export default Products;
