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
        
        name: 'Raspberry Pi',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        
        name: 'Kids Story',
        category: 'School',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Science',
        rating: 4.5,
        numReviews: 10,
        description: 'Read Story',
      },
      {
        
        name: 'Raspberry Pi',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        
        name: 'Raspberry Pi',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
       
        name: 'Raspberry Pi',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Iot',
      },
      {
        
        name: 'Raspberry Pi',
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