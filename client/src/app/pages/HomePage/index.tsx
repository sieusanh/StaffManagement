
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import PostList from '../../components/PostList';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
// import { Provider } from 'react-redux';
import PostModal from '../../components/PostModal';

export default function HomePage() {
    // const { showInsertModal } = actionPost;
    // const [value, setValue] = useState();
    // const [change, setChange] = useState();

    // store.subscribe(() => {
    //     setChange(!change);
    // });

    return (
        // <Provider store={store}>
        <>
            <Header />
            <PostList />
            <PostModal />
            {/* <Fab
                color='primary'
                style={{ position: 'fixed', bottom: '2px', right: '2px' }}
                onClick={ }
            >
                <Add />
            </Fab> */}
        </>
        // </Provider>
    )
}

