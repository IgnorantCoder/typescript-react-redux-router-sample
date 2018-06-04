import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../modules';

type OwnProps = {
    data: {
        display: string;
        path: string;
    }[];
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
    return {
        items: ownProps.data.map((e) => {
            return {
                display: e.display,
                to: e.path,
                disabled: state.router.location == null
                    ? false
                    : state.router.location.pathname === e.path,
            };
        }),
    };
};

type Props = {
    className?: string;
    items: {
        display: string;
        to: string;
        disabled: boolean;
    }[];
};

const component: React.SFC<Props> = (props: Props) => {
    return (
        <ul className={props.className}>
            {
                props.items.map((e) => {
                    return (
                        <li key={e.display}>
                            {
                                e.disabled
                                    ? e.display
                                    : <Link to={e.to}>{e.display}</Link>
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default connect(mapStateToProps)(component);
