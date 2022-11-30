import BookForm from "./books-form"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import dateFormat from "dateformat"

const BookEdit = () => {
    const { id } = useParams()
    const [book, setBook] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:4000/books/" + id)
            .then(response => {
                console.log(response.data)
                const readAt = response.data.readAt
                response.data['readAt'] = dateFormat(readAt, "yyyy-mm-dd")
                setBook(response.data)
            })
    }, [])

    return (
        <>
            {book ? (
                <>
                    <h1>This is the edition form from book # {id}</h1>
                    <BookForm data={book} bookId={id} />
                </>
            ) : ''}
        </>
    )
}

export default BookEdit