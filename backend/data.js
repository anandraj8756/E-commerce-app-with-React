import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name:'Anand',
      email:'anand@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },

    {
      name:'Anand2',
      email:'user@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }

  ],
    products: [
      {
        _id: '1',
        name: 'Raspberry Pi4',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        _id: '2',
        name: 'Raspberry Pi4',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        _id: '3',
        name: 'Raspberry Pi4',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        _id: '4',
        name: 'Raspberry Pi4',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        _id: '5',
        name: 'Raspberry Pi4',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        _id: '6',
        name: 'Raspberry Pi4',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
    ],
  };
  export default data;