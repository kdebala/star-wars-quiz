const createElement = (
  elementName: string,
  elementClass?: string,
  imageSource?: string,
  imageClass?: string,
  elementTextContent?: string,
) => {
  const newDivElement = document.createElement(elementName);
  if (elementClass) {
    newDivElement.classList.add(elementClass);
  }
  if (elementTextContent) {
    newDivElement.textContent = elementTextContent;
  }
  if (imageSource) {
    const image = new Image();
    image.src = imageSource;
    if (imageClass) {
      image.classList.add(imageClass);
    }
    newDivElement.appendChild(image);
  }
  return newDivElement;
};

export default createElement;
