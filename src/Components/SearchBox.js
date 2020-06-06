import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className = 'pa3 ba b--greeb bg-lightest-blue'
                type ='search'
                placeholder ='Search Robot' 
                onChange = {searchChange}
            />
        </div>
    );
}

export default Searchbox;