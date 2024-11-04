"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import React, { useState, ChangeEvent, useEffect } from "react";
import * as Yup from "yup";
import Image from "next/image";
import axios from "axios";
import { base_URI_Api } from "@/app/constants/baseApi";
import { ProductForm } from "@/types/ProductForm";
import { myHeaders } from "@/app/constants/token";

const fieldStyle = "border border-gray-300 rounded-md";

const FILE_SIZE = 1024 * 1024 * 5; // 5MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
  image: Yup.mixed()
    .test("fileSize", "File too large", (value: any) => {
      if (!value) {
        return true;
      }
      return value.size <= FILE_SIZE;
    })
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    }),
  name: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  quantity: Yup.number().required("Required"),
  desc: Yup.string().required("Required"),
});

const UpdateProductForm = ({ productId, initialValues }: { productId: string, initialValues: any }) => {
  const handleSubmitToServer = async (values: any) => {
    try {
      const response = await axios.post(`${base_URI_Api}/upload`, values.image);
      return response.data.image;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProduct = async (values: any, imageData: any) => {
    try {
      const imageUrl = await handleSubmitToServer(imageData);
      const response = await fetch(`${base_URI_Api}/${productId}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          ...values,
          image: imageUrl || values.image, // Use existing image if new image is not uploaded
        }),
      });
      console.log("Updated data: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pt-9">
      <Formik
        onSubmit={(values: any, { setSubmitting, resetForm }) => {
          const formData = new FormData();
          if (values.image instanceof File) formData.append("image", values.image);
          handleUpdateProduct(values, { image: formData });
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ isSubmitting, setFieldValue }) => (
          <div className="w-full flex justify-center items-center">
            <Form className="flex m-[30px] flex-col gap-4 bg-slate-50 p-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Product Name: </label>
                  <Field
                    placeholder="T-shirt"
                    className={fieldStyle}
                    name="name"
                    type="text"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category">Category: </label>
                  <Field
                    placeholder="Category"
                    className={fieldStyle}
                    name="category"
                    type="text"
                  />
                  <ErrorMessage name="category" component="div" className="text-red-500" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price">Price: </label>
                <Field
                  placeholder="100"
                  className={fieldStyle}
                  name="price"
                  type="number"
                />
                <ErrorMessage name="price" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="quantity">Quantity: </label>
                <Field
                  placeholder="1"
                  className={fieldStyle}
                  name="quantity"
                  type="number"
                />
                <ErrorMessage name="quantity" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="desc">Description: </label>
                <Field
                  placeholder="Product description"
                  className={fieldStyle}
                  name="desc"
                  type="text"
                />
                <ErrorMessage name="desc" component="div" className="text-red-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Field
                    name="image"
                    className={fieldStyle}
                    type="file"
                    setFieldValue={setFieldValue}
                    component={CustomInput}
                  />
                  <ErrorMessage name="image" component="div" className="text-red-500" />
                </div>
              </div>
              <div className="w-full flex justify-end space-x-4">
                <button
                  type="submit"
                  className="w-[140px] py-3 bg-blue-600 text-white rounded-md"
                  disabled={isSubmitting}
                >
                  Update
                </button>
                <button
                  type="reset"
                  className="w-[100px] py-3 bg-red-600 text-white rounded-md"
                  disabled={false}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default UpdateProductForm;

function CustomInput({ field, form, setFieldValue, ...props }: any) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(props.initialPreview || undefined);
  const name = field.name;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    setFieldValue(name, file);
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <input
        type="file"
        onChange={onChange}
        {...props}
        className="border border-gray-300 rounded-md"
      />
      {previewImage && (
        <Image
          className="rounded-md"
          src={previewImage}
          alt="Preview Image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
