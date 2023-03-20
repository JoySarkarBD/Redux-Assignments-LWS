import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooksAction } from '../redux/FilterBooks/actions';
import loadBooksThunk from '../redux/StoreBooks/thunk/loadBooks';
import SingleBook from './SingleBook';

const BookList = () => {

    const books = useSelector(state => state.books)
    const filter = useSelector(state => state.filter.filterType);
    const searchBook = useSelector(state => state.searchBook.bookName);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooksThunk)
    }, [])

    const changeFilterHandler = (filterType) => {
        dispatch(filterBooksAction(filterType))
    }

    //fetch all books from server
    return (
        <div className='order-2 xl:-order-1'>
            <div className='flex items-center justify-between mb-12'>
                <h4 className='mt-2 text-xl font-bold'>Book List</h4>
                {/* FILTER BUTTON HERE */}
                <div className='flex items-center space-x-4'>
                    {/* all button */}
                    <button className={filter === 'All' ? 'filter-btn active-filter' : 'filter-btn'} id="lws-filterAll" onClick={() => changeFilterHandler('All')}>All</button>

                    {/* featured button */}
                    <button className={filter !== 'All' ? 'filter-btn active-filter' : 'filter-btn'} onClick={() => changeFilterHandler('Featured')}>Featured</button>
                </div>
            </div>
            {/* BOOK SHOWCASE CONTAINER HERE */}
            <div className='lws-bookContainer'>
                {/* <!-- Card 1 --> */}
                {
                    books
                        .filter(book => {
                            if (filter === 'All') {
                                return book;
                            } else {
                                return book.featured
                            }
                        })
                        .filter(book => {
                            if (searchBook === '') {
                                return book;
                            } else {
                                return book.name.toLowerCase().includes(searchBook.toLowerCase())
                            }
                        })
                        .map(book => <SingleBook key={book.id} book={book} />)
                }

            </div>
        </div >
    );
};

export default BookList;