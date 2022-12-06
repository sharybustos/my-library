import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import axios from "axios"


const BookForm = ({ data, bookId }) => {
    const [isEdit, setIsEdit] = useState(false)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    const customSubmit = (dataForm) => {
        const bookObject = {
            title: dataForm.bookName,
            author: dataForm.authorName,
            year: dataForm.year,
            readAt: dataForm.readAt,
            userId: localStorage.getItem('user_id')
        }

        if (isEdit) {
            axios
                .put("http://localhost:4000/books/edit/" + bookId, bookObject)
                .then(response => console.log(response.data))
        } else {
            axios
                .post("http://localhost:4000/books/create", bookObject)
                .then(response => console.log(response.data))
        }
    }

    useEffect(() => {
        console.log(data)
        if (data.length !== 0) {
            setIsEdit(true)
            setValue('bookName', data.title)
            setValue('authorName', data.author)
            setValue('year', data.year)
            setValue('readAt', data.readAt)
        }
    }, [])

    return (
        <>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>
                <div className="form__item">
                    <label>Book's Name</label>
                    <input
                        {...register("bookName", { required: true })}
                        aria-invalid={errors.bookName ? "true" : "false"}
                    />
                    {errors.bookName && <p>Field required</p>}
                </div>
                <div className="form__item">
                    <label>Author's Name</label>
                    <input
                        {...register("authorName", { required: true })}
                        aria-invalid={errors.authorName ? "true" : "false"}
                    />
                    {errors.authorName && <p>Field required</p>}
                </div>
                <div className="form__item">
                    <label>Year</label>
                    <input
                        type="number"
                        {...register("year", { required: true, min: 868, max: 2022 })}
                        aria-invalid={errors.year ? "true" : "false"}
                    />
                    {errors.year && <p>Min 868. Max 2022</p>}
                </div>
                <div className="form__item">
                    <label>Read at</label>
                    <input
                        type="date"
                        {...register("readAt", { required: true })}
                        aria-invalid={errors.readAt ? "true" : "false"}
                    />
                    {errors.readAt && <p>Field required</p>}
                </div>
                <input type="submit" value={isEdit ? "Edit" : "Create"} />
            </form>
        </>
    )
}

export default BookForm