const books = [
  {
    id: '1',
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    description: 'A chilling tale of a dystopian society under constant surveillance.',
    rating: '4.8',
    coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/b468d093312907.5e6139cf2ab03.png'
  },
  {
    id: '2',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    description: 'Explores the history and evolution of humankind.',
    rating: '4.6',
    coverImage: 'https://m.media-amazon.com/images/I/713jIoMO3UL.jpg'
  },
  {
    id: '3',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    description: 'An epic sci-fi saga of politics, prophecy, and power on a desert planet.',
    rating: '4.7',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg'
  },
  {
    id: '4',
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Biography',
    description: 'A woman’s journey from a survivalist family to academic success.',
    rating: '4.5',
    coverImage: 'https://m.media-amazon.com/images/I/71-4MkLN5jL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '5',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    category: 'Fiction',
    description: 'A futuristic society shaped by technology and control.',
    rating: '4.4',
    coverImage: 'https://m.media-amazon.com/images/I/91D4YvdC0dL.jpg'
  },
  {
    id: '6',
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    description: 'Looks at what the future holds for humanity.',
    rating: '4.5',
    coverImage: 'https://m.media-amazon.com/images/I/71N6LbagzSL.jpg'
  },
  {
    id: '7',
    title: 'The Martian',
    author: 'Andy Weir',
    category: 'Sci-Fi',
    description: 'A stranded astronaut fights to survive on Mars.',
    rating: '4.8',
    coverImage: 'https://m.media-amazon.com/images/I/71Tp86ptAtL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '8',
    title: 'Becoming',
    author: 'Michelle Obama',
    category: 'Biography',
    description: 'The inspiring memoir of the former First Lady of the U.S.',
    rating: '4.9',
    coverImage: 'https://m.media-amazon.com/images/I/81PqV3HCeEL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '9',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    category: 'Fiction',
    description: 'A dystopian world where books are banned and burned.',
    rating: '4.3',
    coverImage: 'https://m.media-amazon.com/images/I/715y6JcmQZL._UF1000,1000_QL80_.jpg'
  },
  {
    id: '10',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Non-Fiction',
    description: 'A revolutionary view of evolution and natural selection.',
    rating: '4.6',
    coverImage: 'https://m.media-amazon.com/images/I/71+Ggj5aqKL._UF1000,1000_QL80_.jpg'
  },
  {
    id: '11',
    title: 'Dracula',
    author: 'Bram Stoker',
    category: 'Fiction',
    description: 'The classic gothic horror that introduced Count Dracula.',
    rating: '4.2',
    coverImage: 'https://m.media-amazon.com/images/I/61jl29eQPSL._UF1000,1000_QL80_.jpg'
  },
  {
    id: '12',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    category: 'Biography',
    description: 'The life story of Apple’s visionary co-founder.',
    rating: '4.6',
    coverImage: 'https://m.media-amazon.com/images/I/71PTAp96xLL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '13',
    title: 'Hyperion',
    author: 'Dan Simmons',
    category: 'Sci-Fi',
    description: 'Seven pilgrims journey through a far-future universe.',
    rating: '4.1',
    coverImage: 'https://m.media-amazon.com/images/I/91V0S0qjKwL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '14',
    title: 'The Wright Brothers',
    author: 'David McCullough',
    category: 'Biography',
    description: 'A detailed biography of the aviation pioneers.',
    rating: '4.7',
    coverImage: 'https://m.media-amazon.com/images/I/71TYHByzngL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '15',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    description: 'A powerful story of justice and racial prejudice.',
    rating: '4.9',
    coverImage: 'https://m.media-amazon.com/images/I/81gkyAx5-RL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '16',
    title: 'Cosmos',
    author: 'Carl Sagan',
    category: 'Non-Fiction',
    description: 'A journey through space, time, and the universe.',
    rating: '4.8',
    coverImage: 'https://m.media-amazon.com/images/I/91stRjShWFL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '17',
    title: 'Neuromancer',
    author: 'William Gibson',
    category: 'Sci-Fi',
    description: 'A cyberpunk thriller that shaped modern sci-fi.',
    rating: '4.0',
    coverImage: 'https://m.media-amazon.com/images/I/81pIICZO2PL.jpg'
  },
  {
    id: '18',
    title: 'Man’s Search for Meaning',
    author: 'Viktor E. Frankl',
    category: 'Non-Fiction',
    description: 'A Holocaust survivor’s insight into life and purpose.',
    rating: '4.9',
    coverImage: 'https://m.media-amazon.com/images/I/61157LApbuL.jpg'
  },
  {
    id: '19',
    title: 'Foundation',
    author: 'Isaac Asimov',
    category: 'Sci-Fi',
    description: 'A scientist predicts the fall of a galactic empire.',
    rating: '4.5',
    coverImage: 'https://m.media-amazon.com/images/I/81LT+V9G4IL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    id: '20',
    title: 'Long Walk to Freedom',
    author: 'Nelson Mandela',
    category: 'Biography',
    description: 'The autobiography of South Africa’s great leader.',
    rating: '4.9',
    coverImage: 'https://m.media-amazon.com/images/I/81ROb+GiBdL._AC_UF1000,1000_QL80_.jpg'
  }
];

export default books;