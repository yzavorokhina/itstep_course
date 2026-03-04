/// <reference path="../../globals.d.ts" />;

import { createRoot } from 'react-dom/client';
import Table from './components/Table';
import '../scss/index.scss';

const tableElement: HTMLElement = document.getElementById('table');

const root: any = createRoot(tableElement);

const products: Array<Product> = [
{id: 1, name: "tovar1", count: 4, price: 45 },
{id: 2, name: "tovar2", count: 3, price: 45 },
{id: 3, name: "tovar3", count: 4, price: 7 },
{id: 4, name: "tovar4", count: 4, price: 45 },
{id: 5, name: "tovar5", count: 8, price: 9 },
{id: 6, name: "tovar6", count: 4, price: 45 },
{id: 7, name: "tovar7", count: 4, price: 7 },
{id: 8, name: "tovar8", count: 9, price: 45 },
{id: 9, name: "tovar9", count: 4, price: 45 },
{id: 10, name: "tovar10", count: 4, price: 45 },
{id: 11, name: "tovar11", count: 3, price: 45 },
{id: 12, name: "tovar12", count: 4, price: 7 },
{id: 13, name: "tovar13", count: 9, price: 45 },
{id: 14, name: "tovar14", count: 4, price: 9 },
{id: 15, name: "tovar15", count: 4, price: 45 }
];

root.render(<Table products={products}/>);
