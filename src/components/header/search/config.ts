import { v4 as uuid } from 'uuid'
const CONFIG = [
  {
    id: uuid(),
    name: 'anime',
    url: encodeURI('anime'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'developers & startup',
    url: encodeURI('developers & startup'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'health & fitness',
    url: encodeURI('health & fitness'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'home & lifestyle',
    url: encodeURI('home & lifestyle'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'motivation',
    url: encodeURI('motivation'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'nature',
    url: encodeURI('nature'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'parenting',
    url: encodeURI('parenting'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'photography',
    url: encodeURI('photography'),
    thumbnail: '#'
  },
  {
    id: uuid(),
    name: 'programing',
    url: encodeURI('programing'),
    thumbnail: '#'
  }
]

export default CONFIG