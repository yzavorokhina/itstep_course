import {loremIpsum} from 'lorem-ipsum';
import { Outlet } from 'react-router';

export default function Portfolio(){
    return (
        <>
            <h1> Portfolio </h1>
            <p>{loremIpsum({count: 10})}</p>
            <Outlet />
        </>
    )
}