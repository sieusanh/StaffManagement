import { useReducer, ReactNode } from 'react';
import reducer, { initState } from './reducer';
import Context from './Context';
// import { createContext } from 'react';

// type contextType = 'Haha';
// const Context = createContext<contextType>({ state: '', dispatch: '' });
// const Context = createContext<contextType>('Haha');

// console.log('reducer: ', reducer)
// console.log('initState: ', initState)
function Provider({ children }: { children?: ReactNode }) {
    // console.log('con: ', Context)
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider value= {{ state, dispatch }
    { children }
    < /Context.Provider>
    )
}

export default Provider;
