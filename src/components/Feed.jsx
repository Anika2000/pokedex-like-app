import React from 'react'
import Cards from './Cards'

const Feed = () => {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-auto mt-30">
      {/* Empty column for offset (hidden on mobile) */}
        <section className="hidden md:block"></section>
      {/* Main section with 3 columns for Pokemon cards */}
        <section className="col-span-3">
            <Cards />
        </section>
      {/* Empty column for offset (hidden on mobile) */}
        <section className="hidden md:block"></section>
      </main>
    </>
  )
}

export default Feed