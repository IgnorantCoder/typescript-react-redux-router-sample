import * as React from 'react';
import NavBar from '../containers/NavBar';

const component: React.SFC = () => {
    return (
        <NavBar
            data={[
                { display: 'to home', path: '/' },
                { display: 'to foo', path: '/foo' },
                { display: 'to bar', path: '/bar' },
            ]}
        />
    );
};

export default component;
