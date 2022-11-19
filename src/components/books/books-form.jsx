
const BookForm = ({ data }) => {
    const createBook = () => {
        console.log('Create book')
        console.log(data)
    }

    const updateBook = () => {
        console.log('Update book')
        console.log(data)
    }

    return (
        <>
            {data.length != 0 ? updateBook() : createBook()}
            <form>
                {/*Here goes the book form*/}
            </form>
        </>
    )
}

export default BookForm