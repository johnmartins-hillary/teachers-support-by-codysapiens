export const getImagePreviewFile = (imgData) => {
  const url = URL.createObjectURL(imgData[0]);
  return url;
};
