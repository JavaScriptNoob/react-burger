


/* eslint-disable no-restricted-globals */
 const defCoords = (elem) => {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + pageYOffset),
    left: Math.round(box.left + pageXOffset)
  };
}
export const coordAxel = (className) => {
  const bunTitleTopCoords = defCoords(document.querySelector('#bun')).top
  const sauceTitleTopCoords = defCoords(document.querySelector('#sauce')).top
  const mainTitleTopCoords = defCoords(document.querySelector('#main')).top
  const mainContainerTopCoords = defCoords(document.querySelector(`.${className}`)).top

  const absoluteCoords = [
    {
      title: 'bun',
      value: Math.abs(mainContainerTopCoords - bunTitleTopCoords),
    },
    {
      title: 'sauce',
      value: Math.abs(mainContainerTopCoords - sauceTitleTopCoords),
    },
    {
      title: 'main',
      value: Math.abs(mainContainerTopCoords - mainTitleTopCoords)
    },
  ]

  const coordsValues = absoluteCoords.map(coord => coord.value)
  const minValue = Math.min(...coordsValues)
  const targetBlockTitle = absoluteCoords.find(coord => coord.value === minValue).title

  return targetBlockTitle
}