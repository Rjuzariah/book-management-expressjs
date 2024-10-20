import Book from "./book_model";

const seedBooks = async () => {
    const books = [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960,
        genre: 'Fiction',
        description: 'A novel about the serious issues of rape and racial inequality in the American South.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '1984',
        author: 'George Orwell',
        publishedYear: 1949,
        genre: 'Dystopian',
        description: 'A story about a totalitarian regime that uses surveillance and mind control to dominate its citizens.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedYear: 1925,
        genre: 'Fiction',
        description: 'A tragic story of Jay Gatsby’s love for Daisy Buchanan set in the Roaring Twenties.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Moby-Dick',
        author: 'Herman Melville',
        publishedYear: 1851,
        genre: 'Adventure',
        description: 'The epic tale of Captain Ahab’s obsessive quest to kill the white whale, Moby-Dick.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publishedYear: 1813,
        genre: 'Romance',
        description: 'A romantic novel that charts the emotional development of Elizabeth Bennet.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        publishedYear: 1951,
        genre: 'Fiction',
        description: 'A story about teenage alienation and rebellion as seen through the eyes of Holden Caulfield.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
  
    await Book.bulkCreate(books);
    console.log('Books have been seeded successfully!');
  };

export default seedBooks;