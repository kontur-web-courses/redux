import ProductTag from '../constants/ProductTag';

const products = [
  {
    id: 1,
    name: 'Бонито ролл',
    description: 'Лосось, сливочный сыр, стружка тунца',
    price: 155,
    image: 'bonito.jpg',
    tags: []
  },
  {
    id: 2,
    name: 'Филадельфия',
    description: 'Лосось, огурец, сливочный сыр, зеленый лук',
    price: 275,
    image: 'philadelphia.jpg',
    tags: []
  },
  {
    id: 3,
    name: 'Авокадо маки',
    description: 'Ролл со спелым авокадо',
    price: 75,
    image: 'avocado.jpg',
    tags: [ProductTag.veg]
  },
  {
    id: 4,
    name: 'Сяке маки',
    description: 'Ролл с лососем',
    price: 105,
    image: 'salmon.jpg',
    tags: []
  },
  {
    id: 5,
    name: 'Текка маки',
    description: 'Ролл с тунцом',
    price: 90,
    image: 'tuna.jpg',
    tags: []
  },
  {
    id: 6,
    name: 'Унаги маки',
    description: 'Копченый угорь, огурец, кунжут, соус кабаяки',
    price: 120,
    image: 'eel.jpg',
    tags: []
  },
  {
    id: 7,
    name: 'Окинава',
    description: 'Угорь, такуан, сливочный сыр, соус унаги, кунжут',
    price: 245,
    image: 'okinava.jpg',
    tags: [ProductTag.new]
  },
  {
    id: 8,
    name: 'Овощной ролл',
    description: 'Томат, огурец, салат айсберг, баклажан, чесночный соус',
    price: 155,
    image: 'vegetables.jpg',
    tags: [ProductTag.veg]
  },
  {
    id: 9,
    name: 'Пад тай',
    description:
      'Черный рис, болгарский перец, ананас, креветка, кокосовая стружка, соус спайси и  сливочный сыр',
    price: 200,
    image: 'padtai.jpg',
    tags: [ProductTag.hot, ProductTag.new]
  },
  {
    id: 10,
    name: 'Филадельфия Де Люкс',
    description:
      'Больше лосося, больше нежного сливочного сыра, больше икры лосося',
    price: 485,
    image: 'delux.jpg',
    tags: [ProductTag.new]
  }
];

export default products;
