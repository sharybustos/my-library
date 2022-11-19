import { Link } from "react-router-dom"

const BooksHome = () => {
    return (
        <>
            <Link to='/books/new'>Create</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book's Name</th>
                        <th scope="col">Author's Name</th>
                        <th scope="col">Year</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <Link to='/books/1'>1</Link>
                        </th>
                        <td>Beloved</td>
                        <td>Toni Morrison</td>
                        <td>1987</td>
                        <td>
                            <Link to='/books/1/edit'>Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/books/2'>2</Link>
                        </th>
                        <td>Moby-Dick</td>
                        <td>Herman Meliville</td>
                        <td>1851</td>
                        <td><Link to='/books/2/edit'>Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/books/3'>3</Link>
                        </th>
                        <td>The Great Gatsby</td>
                        <td>Scott Fitzgerald</td>
                        <td>1925</td>
                        <td><Link to='/books/3/edit'>Edit</Link></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BooksHome