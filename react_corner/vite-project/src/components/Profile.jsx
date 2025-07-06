import React from 'react';

const Profile = ({person}) => {
    return (
        <div>
            <h1>This is the profile component</h1>
            <h2 className="text-center"><span className='font-bold'>Name:</span> {person.name}</h2>
            <h2 className="text-center"><span className='font-bold'>My age:</span> {person.age}</h2>
        </div>
    );
};

export default Profile;