import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Correo requerido').email('Ingrese un correo valido'),
	password: Yup.string().required('Contraseña requerida'),
});

const Basic = () => {
	const onSubmit = (values, arg) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<div className='bg-white p-5 rounded-lg'>
			<h1 className='text-4xl mb-5 '>Formulario Básico!</h1>
			<Formik
				initialValues={{ email: 'correo@correo.com', password: '' }}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form
						className='border border-gray-300 p-5 flex flex-col gap-4'
						onSubmit={handleSubmit}
					>
						{isSubmitting && (
							<div className='bg-green-700 rounded-2xl  p-2 '>
								<h2 className='text-xl text-center text-white font-bold'>¡Enviado!</h2>
							</div>
						)}

						<div className='flex flex-col  '>
							<div className='flex flex-col gap-2 justify-between'>
								<label className='text-2xl font-semibold' htmlFor='id-email'>
									Correo
								</label>
								<input
									className='rounded bg-gray-200 grow py-3 px-4'
									name='email'
									id='id-email'
									type='email'
									placeholder='Ingrese su correo'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								/>
							</div>

							{errors.email && touched.email && (
								<span className='text-red-600 font-semibold'>{errors.email} </span>
							)}
						</div>

						<div className='flex flex-col  '>
							<div className='flex flex-col gap-2 justify-between'>
								<label className='text-2xl font-semibold' htmlFor='id-password'>
									Contraseña
								</label>
								<input
									placeholder='Ingrese su contraseña'
									className='rounded bg-gray-200 grow py-3 px-4'
									name='password'
									id='id-password'
									type='password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								/>
							</div>

							{errors.password && touched.password && (
								<span className='text-red-600 font-semibold'>{errors.password} </span>
							)}
						</div>

						<div className='flex justify-end'>
							<button
								className='bg-green-700 text-white py-2 px-5 rounded disabled:bg-gray-400 disabled:cursor-not-allowed'
								type='submit'
								disabled={isSubmitting}
							>
								Enviar
							</button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Basic;
