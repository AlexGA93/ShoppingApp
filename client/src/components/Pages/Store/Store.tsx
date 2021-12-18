import React, { useState } from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import ReactPaginate from "react-paginate";

import Axes from '../../../imgs/axes.png';

import {elementProduct} from '../../../Redux/type'

import './Store.scss';

import Product from '../../Product/Product';



interface SelectedPagination {
    selected: number
}


const Products = (): JSX.Element => {
    // console.log(stateProducts);
    // pages numbers
    const [pageNumber, setPageNumber] = useState(0);
    // products perpage
    const productsPerPage = 24;
    // pages visited
    const pagesVisited = pageNumber*productsPerPage;

    //access to the state
    const stateProducts = useSelector<RootStateOrAny, elementProduct[]>(state => state.products);
    //console.log(stateProducts);

    const displayProducts = stateProducts.slice(pagesVisited, pagesVisited+productsPerPage).map( element => (
        <Product className="products__list_element" key={element.id} element={element} />
    ));

    const pageCount = Math.ceil(stateProducts.length / productsPerPage);

    const changePage = ({ selected }: SelectedPagination) => {
        setPageNumber(selected);
    };

    return (
        <div className="products">
            <div className="products__title">
                <img src={Axes} style={{width:'70px'}}/>
                <h1>Product List</h1>
                <img src={Axes} style={{width:'70px'}}/>
            </div>
            <hr />
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
            <div>© 2021 Vikingz Shop · Built by <a href="https://github.com/AlexGA93">Alejandro Gimeno Ataz</a></div>
        </div>
    )
}



export default Products;