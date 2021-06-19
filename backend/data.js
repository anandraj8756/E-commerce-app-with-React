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
        
        name: 'Book Name1',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Technology',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About Book',
      },
      {
        
        name: 'Story Book',
        category: 'Story',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Bharti',
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
        
        name: 'Akabar Birbal',
        category: 'Story',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Bharti',
        rating: 4.5,
        numReviews: 10,
        description: 'Read Story book ',
      },
      {
       
        name: 'Math1',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Bharti',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn Math',
      },
      {
        
        name: 'Physics',
        category: 'Science',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Bharti',
        rating: 4.5,
        numReviews: 10,
        description: 'Learn About PHY',
      },
    ],
  };
  export default data;