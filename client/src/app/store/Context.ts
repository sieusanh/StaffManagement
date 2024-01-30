
import { createContext } from 'react';


// https://hackernoon.com/creating-context-in-reactjs-using-typescript
// const Context = createContext({
//     value: []
// });


// type contextType = { state: any, dispatch: any };
// const Context = createContext<contextType | null>(null);
const Context = createContext(null);


export default Context;
