import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = ({loading}) => {
    const override = {
        display:'block', 
        margin: '100px auto'
    }
  return (
    <ClipLoader color='#f00' loading={loading} css={override} size={150} />
  )
}

export default Spinner