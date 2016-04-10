import React from 'react'

const Main = ({ imgs }) => (

  <main className='py4'>
    <div className='clearfix'>
      <div className='md-col md-col-6 || fadeUp'>
        <div className='px2'>
          <img src={imgs.rowOne1} alt='' />
        </div>
      </div>
      <div className='md-col md-col-6 || fadeUp'>
        <div className='px2'>
          <img src={imgs.rowOne2} alt='' />
        </div>
      </div>
    </div>
  </main>

)

export default Main
