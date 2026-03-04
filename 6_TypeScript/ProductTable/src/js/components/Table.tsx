/// <reference path="../../../globals.d.ts" />;
//import * as React from 'react';
//import React from 'react';
import React, {JSX, useState} from 'react';

const PER_PAGE: number = 5;

export default function Table({products} : {products: Array<Product>}){

    const createPagesLinks = () => {

        let links = [];
        for (let i: number = 1 ; i <= pages; i++){
            // links.push(<button key={i} onClick={getPageProducts} data-page={i}>{i}</button>);
            links.push(<button key={i} onClick={getPageProducts} data-page={i}>{i}</button>);
        }
        return links;
    }

    const [productPerPage, setProductsPerPage] = useState(products.slice(0, PER_PAGE));
    const [perPage, setPerPage] = useState(PER_PAGE);
    const [pages, setPages] = useState(Math.round(products.length / PER_PAGE));
    const [pagesLinks, setPagesLinks] = useState();
    const getPageProducts = function (event:React.MouseEvent<HTMLButtonElement>) {
        let pageNumber: number = parseInt(event.currentTarget.dataset.page);
        const items: Array<Product> = products.slice((pageNumber - 1) * perPage, pageNumber * perPage);

        setProductsPerPage(items);
    }


    return(<table>
      <thead>
        <tr >
          <th style={{ color: '#007bff', textAlign: 'center'}}>№</th>
          <th style={{ color: '#007bff', textAlign: 'center'}}>Название </th>
          <th style={{ color: '#007bff', textAlign: 'center'}}>Количество</th>
          <th style={{ color: '#007bff', textAlign: 'center'}}>Цена</th>
        </tr>
      </thead>
      <tbody>
        { 
            (productPerPage.length > 0) ? productPerPage.map(function(item) {
                return (
                <tr key={item.id}>
                    <td style={{ textAlign: 'center'}}>{item.id}</td>
                    <td style={{ textAlign: 'center'}}>{item.name}</td>
                    <td style={{ textAlign: 'center'}}>{item.count}</td>
                    <td style={{ textAlign: 'center'}}>{item.price}</td>
                 </tr>
            )}): <tr><td colSpan={4}>No</td></tr>
        } 
      </tbody>
      <tfoot>
            <tr>
                <td colSpan={4}>{
                    pagesLinks.map(function(link, index){
                        return <button key={index} onClick={getPageProducts} data-page={link}>{link}</button>;
                    })
                }
                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                </td>
            </tr>
      </tfoot>
    </table>);
}