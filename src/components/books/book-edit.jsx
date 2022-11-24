import BookForm from "./books-form"
import { useParams } from "react-router-dom"

const bookData = {
    id: 1,
    title: 'Be loved',
    author: 'Toni Morrison',
    year: '1987',
    readAt: '2022-10-07'
}

const BookEdit = () => {
    const { id } = useParams()

    return (
        <>
            <h1>This is the edition form from book # {id}</h1>
            <BookForm data={bookData} />
        </>
    )
}

export default BookEdit