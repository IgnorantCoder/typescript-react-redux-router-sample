import * as React from 'react';
import DefaultNavBar from '../components/DefaultNavBar';

const component: React.SFC = () => {
    return (
        <div>
            <DefaultNavBar/>
            <div>
                This is Bar.
            </div>
        </div>
    );
};

export default component;
