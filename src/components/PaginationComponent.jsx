import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginationComponent = ({pageCount, getPage}) => {

  const handleChange = (data)=>{
    console.log(data.selected+1);
    getPage(data.selected);
  }

  return (

    <div className='flex justify-center items-conter pt-5 z-20'>
      <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handleChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="Previous"
      containerClassName='text-white bg-theme px-3 py-2 rounded-xl shodow shodow-slate-900 flex justify-center items-conter gap-5'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      activeClassName='rounded bg-white w-10 text-blue-500 font-bold flex justify-center items-center'
    />
    </div>
    
  )
}

export default PaginationComponent