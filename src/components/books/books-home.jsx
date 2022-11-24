import { Link } from "react-router-dom"

const books = [
    {
        id: 1,
        title: 'Be loved',
        author: 'Toni Morrison',
        year: '1987',
        readAt: '2022-12-12'
    },
    {
        id: 2,
        title: 'Moby-Dick',
        author: 'Herman Meliville',
        year: '1851',
        readAt: '2022-12-12'
    },
    {
        id: 3,
        title: 'The Great Gatsby',
        author: 'Scott Fitzgerald',
        year: '1925',
        readAt: '2022-12-12'
    }]

const labels = [
    "#",
    "Book's Name",
    "Author's Name",
    "Year",
    "Read At",
    "Action"
]

const BooksHome = () => {
    return (
        <>
            <div className="books-home">
                <Link className="btn btn-primary books-home__create" to='/books/new'>Create</Link>
                <table className="table">
                    <thead>
                        <tr>
                            {labels.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">
                                        <Link to={'/books/' + book.id}>{book.id}</Link>
                                    </th>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.year}</td>
                                    <td>{book.readAt}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={'/books/' + book.id + '/edit'}>Edit</Link>
                                        <Link className="btn btn-danger" to={'/books/' + book.id + '/delete'}>Delete</Link>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BooksHome