import { useForm } from "react-hook-form";

export default function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    reset();
  }

  return (
    <div>
      React Hook Form
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
          />
          {
            errors.email && errors.email.type === 'required'
            ? <p style={{color: 'red', fontWeight: 'bolder', margin: '10px'}}>Email is required</p>
            :null
          }
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            name="password"
            type="password"
          />
          {
            errors.password && errors.password.type === 'required'
            ? <p style={{color: 'red', fontWeight: 'bolder', margin: '10px'}}>Password is required</p>
            :null
          }
        {
            errors.password && errors.password.type === 'minLength'
            ? <p style={{color: 'red', fontWeight: 'bolder', margin: '10px'}}>Password should be atleast 8 characters</p>
            :null
          }

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
