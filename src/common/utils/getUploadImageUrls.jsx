const getUploadImageUrls = (images, setValues, name) => {
  const imageUrls = [];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    let fileReader = new FileReader();

    fileReader.readAsDataURL(image);

    fileReader.onloadend = () => {
      imageUrls.push(fileReader.result);
      setValues((value) => ({ ...value, [name]: imageUrls }));
    };
  }
};

export default getUploadImageUrls;
