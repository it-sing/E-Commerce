// // UpdateProduct.tsx
// "use client";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import React, { useState, useEffect } from "react";
// import * as Yup from "yup";
// import Image from "next/image";
// import axios from "axios";
// import { base_URI_Api } from "@/app/constants/baseApi";
// import { ProductForm } from "@/types/ProductForm";
// import { myHeaders } from "@/app/constants/token";

// const fieldStyle = "border border-gray-300 rounded-md";
// const FILE_SIZE = 1024 * 1024 * 5; // 5MB
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

// const validationSchema = Yup.object().shape({
//   // Define your validation schema here
// });

// const UpdateProductForm = () => {
//   const [product, setProduct] = useState<ProductForm>({
//     id: "", // Add the 'id' property with an initial value
//     category: "",
//     name: "",
//     desc: "",
//     image: undefined,
//     price: 0,
//     quantity: 0,
//   });

//   useEffect(() => {
//     // Fetch product details based on ID from URL
//     const fetchProduct = async () => {
//       try {
//         const productId = window.location.pathname.split("/").pop();
//         const response = await fetch(`${base_URI_Api}products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProduct();
//   }, []);

//   const handleSubmit = async (values: any) => {
//     try {
//       // Handle form submission here (e.g., update product details)
//       const headers: AxiosRequestHeaders = Object.fromEntries(myHeaders.entries());
//       const response = await axios.put(`${base_URI_Api}products/${product.id}`, values, {
//         headers,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   return (
//     <div className="w-full pt-9">
//       <Formik
//         initialValues={product}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting, setFieldValue }) => (
//           <Form className="flex flex-col gap-4 bg-slate-50 p-10">
//             <div className="flex flex-col gap-2">
//               <label htmlFor="name">Product Name:</label>
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="Enter product name"
//                 className={fieldStyle}
//               />
//               <ErrorMessage name="name" component="div" className="text-red-500" />
//             </div>
//             {/* Add more fields for other product details */}
//             <button
//               type="submit"
//               className="w-[140px] py-3 bg-blue-600 text-white rounded-md"
//               disabled={isSubmitting}
//             >
//               Update
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default UpdateProductForm;
