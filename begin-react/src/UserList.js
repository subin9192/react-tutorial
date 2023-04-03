import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b style={{
                color: user.active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => {
                dispatch({
                type: 'TOGGLE_USER',
                id: user.id });
        }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => {
                dispatch({
                type: 'REMOVE_USER',
                id: user.id });
            }}
            >
                삭제
                </button>
        </div>
    );
});

function UserList({ users, onRemove }) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (
                    <User user={user}
                     key={user.id}
                     onRemove={onRemove}
                    />
                    )
                )
            }        
        </div>
    );
}

export default React.memo(UserList);