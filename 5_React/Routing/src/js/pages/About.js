import {loremIpsum} from 'lorem-ipsum';

export default function About(){
    return (
        <>
            <h1> About us </h1>
            <p>{loremIpsum({count: 10})}</p>
        </>
    )
}