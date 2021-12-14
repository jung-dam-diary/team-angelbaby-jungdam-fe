const getUploadImageUrls = (images) => {
  const imageUrls = [];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      imageUrls.push(fileReader.result);
    };

    fileReader.readAsDataURL(image);
  }

  return imageUrls;
};

export default getUploadImageUrls;
