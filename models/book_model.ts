// book.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from './database';

class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public releaseYear!: number;
  public genre!: string;
  public description!: string;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Title is required.' },
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'books',
  }
);

export default Book;
