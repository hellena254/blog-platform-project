import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Comment extends Model {
  public id!: number;
  public content!: string;
  public authorId!: number; // Relationship with User
  public postId!: number; // Relationship with Post
}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'comments',
});

export default Comment;
