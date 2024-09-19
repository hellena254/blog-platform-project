import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Adjust the import based on your setup

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: string; // 'admin' or 'regular'
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'regular'),
    defaultValue: 'regular',
  },
}, {
  sequelize,
  tableName: 'users',
});

export default User;
