
import React from 'react'
import Head from './Head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { data } from './data'

class Root extends React.Component {
  render () {
    return (
      <html>
        <Head title={data.title} />
        <body className='px3'>
          <Header title={data.title} />
          <Main imgs={data.img} />
          <Footer />
          <script src={data.links.scroll}/>
          <script src={data.links.main} />
          <script dangerouslySetInnerHTML={{ __html: data.ga }} />
        </body>
      </html>
    )
  }
}

export default Root
