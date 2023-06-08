


/* eslint-disable no-restricted-globals */
interface Coords {
  top: number;
  left: number;
}

const defCoords = (elem: HTMLElement): Coords => {
  let box = elem.getBoundingClientRect();

  return {
    top: Math.round(box.top + window.pageYOffset),
    left: Math.round(box.left + window.pageXOffset)
  };
};

export const coordAxel = (className: string): string => {
  const bunTitleTopCoords = defCoords(document.querySelector('#bun') as HTMLElement).top;
  const sauceTitleTopCoords = defCoords(document.querySelector('#sauce') as HTMLElement).top;
  const mainTitleTopCoords = defCoords(document.querySelector('#main') as HTMLElement).top;
  const mainContainerTopCoords = defCoords(document.querySelector(`.${className}`) as HTMLElement).top;

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
  ];

  const coordsValues = absoluteCoords.map(coord => coord.value);
  const minValue = Math.min(...coordsValues);
  const targetBlockTitle = absoluteCoords.find(coord => coord.value === minValue)?.title || '';

  return targetBlockTitle;
};
