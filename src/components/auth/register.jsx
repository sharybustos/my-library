import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => {
        axios
            .post("http://localhost:4000/users/create", data)
            .then(response => {
                if (response.status === '200') {
                    alert('Success!')
                }
            })
        console.log('register data', data)
    }

    return (
        <>
            <h2>Welcome to register</h2>
            <form className="form" onSubmit={handleSubmit(customSubmit)}>
                <div className="form__item">
                    <label>Username</label>
                    <input
                        {...register("username", { required: true, maxLength: 10 })}
                        aria-invalid={errors.username ? "true" : "false"}
                    />
                    {errors.username && <p>Field required. Max length 10</p>}
                </div>
                <div className="form__item">
                    <label>Email</label>
                    <input
                        {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p>Field required. ABC required</p>}
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

export default Register