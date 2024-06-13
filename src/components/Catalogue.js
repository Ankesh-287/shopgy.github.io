import React from 'react'
import '../style/Catalogue.css'

const Catalogue = ({catalogue}) => {
  return (
    <div>
      <div className="catalogue-container">
        <div className='catalogues'>
            <div className="items">
            {catalogue.map((item, index) => 
                <img src={item} alt={item} />
            )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue
