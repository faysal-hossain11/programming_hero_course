import React from 'react';
import { people } from '../data/list_of_data';
import { getImageUrl } from '../utils';



const PackingList = () => {

    const chemist = people.filter((person) => (person?.profession === "chemist"));
    const everyOne = people.filter((person) => (person?.profession !== "chemist"));

    // function handleClick() {
    //     alert("Button clicked!");
    // }

    return (
        <>
            <h1 className='text-2xl font-bold mb-3'>Chemist list:</h1>
            <div className='grid grid-cols-2 gap-4'>
                {chemist.map((person) => {
                    return (
                        <div key={person?.id} className='p-2 rounded bg-sky-300 flex gap-2 mb-3' >
                            <div>
                                <img src={getImageUrl(person)} alt={person?.name} />
                            </div>
                            <div>
                                <h2>{person?.name}</h2>
                                <h2>{person?.profession}</h2>
                                <h2>{person?.accomplishment}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>

            <h1 className='text-2xl font-bold mb-3'>EveryOne list</h1>
            <div className='grid grid-cols-3 gap-4'>
                {everyOne.map((person) => {
                    return (
                        <div key={person?.id} className='p-4 rounded bg-sky-300 flex gap-2 mb-3 shadow' >
                            <div>
                                <img src={getImageUrl(person)} alt={person?.name} className='w-full rounded-full' />
                            </div>
                            <div>
                                <h2>{person?.name}</h2>
                                <h2>{person?.profession}</h2>
                                <h2>{person?.accomplishment}</h2>
                            </div>
                        </div>
                    )
                })}

                <div className='mb-80'>
                    <button onClick={() => {console.log("button clicked");
                    }} className='bg-sky-500 py-2 px-4 text-white rounded-md '>
                        I don't do anything
                    </button>
                </div>

            </div>
        </>
    );
};

export default PackingList;