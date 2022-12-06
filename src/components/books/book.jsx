import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import dateFormat from "dateformat"

const Book = () => {
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
            {book && (<div>
                <h2>Name: {book.title}</h2>
                <h4>Author: {book.author}</h4>
                <h4>Year: {book.year}</h4>
                <p>Lorem ipsum dolor sit
                    amet consectetur adipisicing
                    elit. Dolore excepturi quos
                    alias cumque sit asperiores commodi
                    nemo iure cupiditate aspernatur eaque
                    consectetur libero, assumenda, saepe
                    delectus. Dolorem est vel placeat.
                </p>
                <h4>Read at: {book.readAt}</h4>
            </div>)}
        </>
    )
}

export default Book