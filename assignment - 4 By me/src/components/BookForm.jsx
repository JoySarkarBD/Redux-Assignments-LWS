import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import updateBookInfoThunk from '../redux/StoreBooks/thunk/updateBookInfo';
import addBooksThunk from './../redux/StoreBooks/thunk/addBooks';

const BookForm = () => {

    const [booksInfo, setBooksInfo] = useState({
        id: "",
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
    });

    const { name, author, thumbnail, price, rating, featured } = booksInfo;

    const [updateBooksInfo, setUpdateBooksInfo] = useState(false);

    const editAbleBook = useSelector(state => state.editBook);

    const dispatch = useDispatch();

    useEffect(() => {
        if (editAbleBook?.id) {
            setUpdateBooksInfo(true);
            setBooksInfo({
                name: editAbleBook.name,
                author: editAbleBook.author,
                thumbnail: editAbleBook.thumbnail,
                price: editAbleBook.price,
                rating: editAbleBook.rating,
                featured: editAbleBook.featured,
            })
        } else {
            setUpdateBooksInfo(false);
        }
    }, [editAbleBook])

    function handleBookInfo(e) {
        let value = e.target.value;
        let checked = e.target.checked;
        let type = e.target.type;
        if (type === 'text') {
            setBooksInfo({
                ...booksInfo,
                [e.target.name]: value
            })
        }
        else if (type === 'checkbox') {
            setBooksInfo({
                ...booksInfo,
                [e.target.name]: checked
            })
        };
    }

    function submitBookFrom(e) {
        e.preventDefault()
        dispatch(addBooksThunk(booksInfo));
        resetForm()
    }

    function updateBooksInfoToDB(e) {
        e.preventDefault();
        dispatch(updateBookInfoThunk(editAbleBook.id, booksInfo));
        resetForm()
    }

    function resetForm() {
        setBooksInfo({
            ...booksInfo,
            name: "",
            author: "",
            thumbnail: "",
            price: "",
            rating: "",
            featured: false,
        });
    }

    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form className="book-form" onSubmit={updateBooksInfo ? updateBooksInfoToDB : submitBookFrom}>
                    <div className="space-y-2">
                        <label htmlFor="name">Book Name</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookname"
                            name="name"
                            value={name}
                            onChange={handleBookInfo} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category">Author</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookauthor"
                            name="author"
                            value={author}
                            onChange={handleBookInfo} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="image">Image Url</label>
                        <input
                            required
                            className="text-input"
                            type="text"
                            id="input-Bookthumbnail" name="thumbnail"
                            value={thumbnail}
                            onChange={handleBookInfo} />
                        <small>*https://static1.eboighar.com/thumbimages/Books/book_79492021-09-28_1632817133.jpg</small>
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="price">Price</label>
                            <input
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookprice" name="price"
                                value={price}
                                onChange={handleBookInfo} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="quantity">Rating</label>
                            <input
                                required
                                className="text-input"
                                type="number"
                                id="input-Bookrating"
                                name="rating"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={handleBookInfo} />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="input-Bookfeatured"
                            type="checkbox"
                            name="featured"
                            className="w-4 h-4"
                            value={featured}
                            checked={featured}
                            onChange={handleBookInfo} />
                        <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="submit">{updateBooksInfo ? "Update Book" : "Add Book"}</button>
                </form>
            </div>
        </div>
    );
};

export default BookForm;