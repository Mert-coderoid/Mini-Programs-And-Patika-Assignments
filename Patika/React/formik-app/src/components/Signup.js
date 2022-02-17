import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Signup() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			gender: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, "Must be 15 Characters or less")
				.required("Required"),
			lastName: Yup.string()
				.max(20, "Must be 15 Characters or less")
				.required("Required"),
			email: Yup.string().required("Required").email("Invalid email"),
			gender: Yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="input-container">
					<input
						placeholder="Firstname"
						type="text"
						id="firsName"
						name="firstName"
						onChange={formik.handleChange}
						value={formik.values.firstName}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.firstName && formik.errors.firstName ? (
						<p>*{formik.errors.firstName}</p>
					) : null}
				</div>
				<div className="input-container">
					<input
						placeholder="Lastname"
						type="text"
						id="lastName"
						name="lastName"
						onChange={formik.handleChange}
						value={formik.values.lastName}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.lastName && formik.errors.lastName ? (
						<p>*{formik.errors.lastName}</p>
					) : null}
				</div>
				<div className="input-container">
					<input
						placeholder="Email"
						type="text"
						id="email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.email && formik.errors.email ? (
						<p>*{formik.errors.email}</p>
					) : null}
				</div>
				<div className="input-container">
					<label htmlFor="female">Female</label>
					<input
						type="radio"
						name="gender"
						id="female"
						value="female"
						onChange={formik.handleChange}
					/>
					<label htmlFor="male">Male</label>
					<input
						type="radio"
						name="gender"
						id="male"
						value="male"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.gender && formik.errors.gender ? (
						<p>*{formik.errors.gender}</p>
					) : null}
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
