import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)}>
            <div className="form-login__item">
                <label>FirstName</label>
                <input
                    {...register("firstName", { required: true, maxLength: 10 })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && <p>Field required. Max length 10</p>}
            </div>
            <div className="form-login__item">
                <label>LastName</label>
                <input
                    {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && <p>Field required. ABC required</p>}
            </div>
            <div className="form-login__item">
                <label>Age</label>
                <input
                    type="number"
                    {...register("age", { min: 18, max: 99 })}
                    aria-invalid={errors.age ? "true" : "false"}
                />
                {errors.age && <p>Min 18. Max 99</p>}
            </div>
            <div className="form-login__item">
                <label>Date</label>
                <input
                    type="date"
                    {...register("date", { required: true })}
                    aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.date && <p>Field required</p>}
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}

export default Login