import React from 'react';

const Pagination = ({postsPerPage,totalPosts}) => {
    const pageNumbers=[]

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    return (
        <nav>
            <ul >
                {pageNumbers.map(number=>(
                    <li key={number}>
                        <a href="!#" className=''>
                            {number}

                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;