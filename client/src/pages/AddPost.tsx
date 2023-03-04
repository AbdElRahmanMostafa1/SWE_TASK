import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Thumbnail } from "../components";
import { useForm } from "react-hook-form";
import { PostFormData } from "../interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addPost } from "../store/actions/post";

const AddPost = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedImg, setSelectedImg] = useState<File>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PostFormData>();
  const image = watch("image");

  const submitPost = handleSubmit(async (data) => {
    const { caption, image } = data;
    const formData = new FormData();

    formData.append("caption", caption);
    formData.append("image", image);

    dispatch(addPost(formData));
  });

  useEffect(() => {
    if (image) {
      setSelectedImg(image[0]);
    }
  }, [image]);

  return (
    <>
      <h3 className="text-center mb-3">Add Post</h3>
      {selectedImg && (
        <Thumbnail
          selectedImgUrl={URL.createObjectURL(selectedImg)}
          className="mx-auto mb-2"
        />
      )}

      <form onSubmit={submitPost}>
        <input
          className="form-control form-control-sm mb-2"
          type="file"
          accept="image/*"
          {...register("image", {
            required: {
              value: true,
              message: "Image is required",
            },
          })}
        ></input>
        {errors.image && (
          <p className="text-danger text-center">
            {errors?.image?.message?.toString()}
          </p>
        )}

        <FloatingLabel controlId="floatingTextarea2" label="Caption">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "60px" }}
            {...register("caption", {
              required: {
                value: true,
                message: "Caption is required",
              },
              maxLength: {
                value: 30,
                message: `Maximum characters for caption field is 30 characters`,
              },
            })}
          />
          {errors.caption && (
            <p className="text-danger text-center">{errors.caption?.message}</p>
          )}
        </FloatingLabel>

        <Button
          type="submit"
          variant="success"
          className="w-75 d-block mx-auto my-3"
        >
          Add Post
        </Button>
      </form>
    </>
  );
};

export default AddPost;
