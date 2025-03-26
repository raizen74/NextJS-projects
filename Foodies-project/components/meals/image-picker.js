"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef(); // allows to access the input element

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0]; //get hold of that picked file

    if (!file) {
      setPickedImage(null); // no file picked, preview is reset
      return;
    }
    // construct the preview URL, FileReader is javascript API
    const fileReader = new FileReader(); // read the file
    fileReader.onload = () => {
      // function that will be executed once the file is read
      setPickedImage(fileReader.result); // set the preview URL
    };

    fileReader.readAsDataURL(file); // read the file as data URL
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='The image selected by the user.'
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpg'
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        {/* type="button" prevents submitting the form -> granular control */}
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
