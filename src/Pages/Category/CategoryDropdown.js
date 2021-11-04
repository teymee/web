import React from 'react'

function CategoryDropdown({title, subtitle}) {
    return (
        <div className="p-5 text-sm">
          <span className="mr-5">{title} </span>
            <div className="dropdown inline-block relative">
                
              <button className="  bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1 ">{subtitle}</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 md:w-60 sm:w-20" >
                <li className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    Price: Low - High
                </li>
                <li className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    2
                </li>
             
              </ul>
            </div>
          </div>
    )
}

export default CategoryDropdown
