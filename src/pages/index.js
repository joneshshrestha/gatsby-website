import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const indexPage = () => {
  return (
    <div>
      < Layout>
      <h1>Hello.</h1>
      <h2>I am Jonesh, a web developer living in Nepal.</h2>
      <p>Need Developer? <Link to='/contact'>Contact</Link></p>
      </Layout>
    </div>
  )
}

export default indexPage