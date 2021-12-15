const getBase64ToFile = (images, setValues) => {
  const imageUrls = [];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    let fileReader = new FileReader();

    fileReader.readAsDataURL(image);

    fileReader.onloadend = () => {
      imageUrls.push(fileReader.result);
      setValues([...imageUrls]);
    };
  }
};

export default getBase64ToFile;
