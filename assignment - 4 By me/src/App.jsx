import BookList from './../src/components/BookList'
import Navbar from './../src/components/Navbar'
import BookForm from './components/BookForm'
function App() {

  return (
    <>
      <Navbar />
      <main className='py-12 2xl:px-6'>
        <div className='container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8'>
          <BookList />
          <BookForm />
        </div>
      </main>
    </>
  )
}

export default App
