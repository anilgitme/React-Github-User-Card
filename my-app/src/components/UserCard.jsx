import React from 'react';

function UserCard(props) {
    return(
        <div className='cardContainer'>
            <div className='card'>
                <img src={props.data.avatar_url} width='200px' alt='userpic'/>
            <h3>{props.data.name}</h3>
            <p>Handle: <a href={props.data.html_url}>{props.data.login}</a></p>
            <p>Followers: {props.data.followers}</p>
            <p>Following: {props.data.following}</p>
            <p>Location: {props.data.location}</p>
            </div>
            <div className='followers'>
            <h3>Followers</h3>
            {props.followers.map(follower => {
                return(
                    <div>
                        <p>{follower.login}</p>
                        <img src={follower.avatar_url} width='200px' alt='follower pic'/>
                        <p>Handle: <a href={follower.html_url}>Link</a></p>
                        </div>
                )
            })}
            </div>
    </div>
    )
}

export default UserCard;