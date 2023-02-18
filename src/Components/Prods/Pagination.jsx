import React from 'react'

function Pagination({totalPosts, postsPerPage, setCurrentPage}) {

    let pages = []

    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }

  return (
    <div className='gap-10'>
      {pages.map(
        (el, index) => {
            return(
                <button 
                className='border-2 border-[#3c9379] px-3 py-2 bg-[#fff] shadow-2xl mt-12 m-4'
                onClick={() => setCurrentPage(el)}
                key={index}>{el}</button>
            )
        }
      )}
    </div>
  )
}

export default Pagination