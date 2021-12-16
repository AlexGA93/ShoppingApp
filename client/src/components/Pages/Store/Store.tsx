import React, { useState } from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import ReactPaginate from "react-paginate";

import './Store.scss';

import Product from '../../Product/Product';

interface stateProducts {
    favorite: number,
    id: string,
    image_url: string,
    price: number,
    productDescription: string,
    productName: string,
    stock: number
};

interface SelectedPagination {
    selected: number
}


const Products = () => {
    // console.log(stateProducts);
    // pages numbers
    const [pageNumber, setPageNumber] = useState(0);
    // products perpage
    const productsPerPage = 12;
    // pages visited
    const pagesVisited = pageNumber*productsPerPage;

    //access to the state
    const stateProducts = useSelector<RootStateOrAny, stateProducts[]>(state => state.products);
    // console.log(stateProducts);

    const displayProducts = stateProducts
    .slice(pagesVisited, pagesVisited+productsPerPage)
    .map( element => <Product className="products__list_element" key={element.id} element={element} />);

    const pageCount = Math.ceil(stateProducts.length / productsPerPage);

    const changePage = ({ selected }: SelectedPagination) => {
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