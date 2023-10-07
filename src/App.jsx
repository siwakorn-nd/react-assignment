import Layout from './Layout'

function App() {
  return (
    <Layout>
      <section className='flex flex-col content-center flex-wrap my-5'>
        <article className='mb-5'>
        <h2 className='text-4xl text-center'>Admin Panel</h2>
        </article>
        <article>
        <button className='btn btn-active btn-accent mx-3'><a href={'/userhomepage'}>User Home Selector</a></button>
        <button className='btn btn-active btn-accent mx-3'><a href={'/adminpanel'}>Admin Home Selector</a></button>
        </article>
      </section>
    </Layout>
  )
}

export default App
