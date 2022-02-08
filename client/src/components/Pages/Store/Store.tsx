import React, { useEffect, useState } from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import ReactPaginate from "react-paginate";

import Axes from '../../../imgs/axes.png';

import {IAppState, IelementProduct} from '../../../Redux/type'

import './Store.scss';

import Product from '../../Product/Product';
import { rootStore } from '../../../Redux';
import { dispatch } from 'react-hot-toast/dist/core/store';
import { getAllProducts } from '../../../Redux/actions/shopping';



interface SelectedPagination {
    selected: number
}


const Store = (): JSX.Element => {
    //access to the state
    const stateProducts = useSelector<IAppState, IAppState['shopping']['products']>(state => state.shopping.products);
    //console.log(stateProducts);
    
    
    // pages numbers
    const [pageNumber, setPageNumber] = useState(0);
    // products perpage
    const productsPerPage = 6;
    // pages visited
    const pagesVisited = pageNumber*productsPerPage;

    
    
    const displayProducts = stateProducts.slice(pagesVisited, pagesVisited+productsPerPage).map((element: IelementProduct) => (
        <Product className="products__list_element" key={element.id} id={element.id} />
    ));

    const pageCount = Math.ceil((stateProducts? stateProducts.length: 0 )/ productsPerPage);

    const changePage = ({ selected }: SelectedPagination) => {
        setPageNumber(selected);
    };

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllProducts());
    // }, [dispatch]);

    return (
       
        <div className="products">
            <div className="products__title">
                <img alt="axes" src={Axes} style={{width:'70px'}}/>
                <h1>Product List</h1>
                <img alt="axes" src={Axes} style={{width:'70px'}}/>
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



export default Store;
