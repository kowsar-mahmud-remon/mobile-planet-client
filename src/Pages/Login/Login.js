import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);


  // const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const handleLogin = data => {
    console.log(data);
    setLoginError('');

    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        // setLoginUserEmail(data.email);
      })
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message);
      });

  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);

        const users = {
          name: user.displayName,
          email: user.email,
          category: 'Buyer'
        };

        fetch('https://mobile-planet-server.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(users)
        })
          .then(res => res.json())
          .then(data => {
            console.log('addUser', data);
          });


        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='h-[600px] flex justify-center items-center'>
      <div className="w-96 p-7">
        <h2 className='text-3xl text-center text-primary'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Email</span>
            </label>
            <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full max-w-xs" />
            {errors?.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Password</span>
            </label>
            <input {...register("password", {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be 6 characters or longer' }
            })} type="password" className="input input-bordered w-full max-w-xs" />
            {errors?.password && <p className='text-red-600'>{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text-alt">Forget Password?</span>
            </label>
          </div>


          <input className='btn btn-primary w-full' value='Login' type="submit" />
          <div className="">
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p>New to Mobile Planer <Link className='text-primary' to='/signup'>Create a new Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;