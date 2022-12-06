import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const customSubmit = (data) => {
        axios
            .post("http://localhost:4000/users/login", data)
            .then(response => {
                if (response.data.length != 0) {
                    localStorage.setItem('user_id', response.data[0]._id)
                    navigate("/books")
                } else {
                    alert('Invalid input data. Please, try again')
                    setValue('password', '')
                }
            })
    }

    return (
        <>
            <h2>Welcome to Login</h2>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>
                <div className="form__item">
                    <label>Username</label>
                    <input
                        {...register("username", { required: true, maxLength: 10 })}
                        aria-invalid={errors.userName ? "true" : "false"}
                    />
                    {errors.userName && <p>Field required. Max length 10</p>}
                </div>
                <div className="form__item">
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", { required: true, minLength: 6 })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <p>Field required. Min length 6</p>}
                </div>
                <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default Login