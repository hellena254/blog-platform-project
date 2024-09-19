import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public authorId!: number; // Relationship with User
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'posts',
});

export default Post;
