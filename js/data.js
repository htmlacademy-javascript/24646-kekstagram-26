import { getRandomPositiveInteger} from './util.js';

const messageTemplates = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const nameTemplates = [
  'Василий',
  'Петр',
  'Семён',
  'Иван',
  'Андрей',
  'Александр',
  'Алексей',
  'Александр'
];


export const generateTemplateData = function (amount) {
  const fakeData = [];
  for (let i = 1; i <= amount; i++) {
    const template = {};
    template.id = i;
    template.url = `photos/${i}.jpg`;
    template.description = 'Красота-то какая! Лепота!';
    template.likes = getRandomPositiveInteger(15, 200);
    template.comments = [{
      id: getRandomPositiveInteger(1, 100),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 7)}.svg`,
      message: messageTemplates[getRandomPositiveInteger(0, messageTemplates.length - 1)],
      name: nameTemplates[getRandomPositiveInteger(0, nameTemplates.length - 1)]
    }];
    fakeData.push(template);
  }
  return fakeData;
};
