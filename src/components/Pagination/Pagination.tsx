import React from 'react'
import './Pagination.scss';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type Props = {
  nPages: number,
  currentPage: number,
  setCurrentPage: Function,
}

const Pagination: React.FC<Props> = (props) => {
  const { 
    nPages, 
    currentPage, 
    setCurrentPage 
  } = props;
  
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  const nextPage = () => {
    if(currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className='pagination-box'>
      {(pageNumbers.length > 1) && (
        <nav>
          <ul className='pagination-content'>
            <li className="pagination-content__item">
              <a 
                className="pagination-content__link" 
                onClick={prevPage} 
                href='/Characters-app/build/index.html#/characters/'
              >
                <AiFillCaretLeft />
              </a>
            </li>

            {pageNumbers.map(pgNumber => (
              <li key={pgNumber} 
                className= {`pagination-content__item ${currentPage === pgNumber ? 'active' : ''} `} >
                  <a 
                    onClick={() => setCurrentPage(pgNumber)}  
                    className='pagination-content__link'
                    href='/Characters-app/build/index.html#/characters/'
                  >
                    {pgNumber}
                  </a>
              </li>
            ))}
              
            <li className="pagination-content__item">
              <a 
                className="pagination-content__link" 
                onClick={nextPage}
                href='/Characters-app/build/index.html#/characters/'
              >
                <AiFillCaretRight />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Pagination;