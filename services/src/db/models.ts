import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

// CHEFS TABLE
@Table({
  defaultScope: {
    attributes: { exclude: ["deleted_at"] },
  },
  paranoid: true,
  tableName: "chefs",
})
export class Chef extends Model<Chef> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @HasMany(() => Restaurant)
  restaurants!: Restaurant[];
}

// RESTAURANTS TABLE
@Table({
  defaultScope: {
    attributes: { exclude: ["deleted_at"] },
  },
  paranoid: true,
  tableName: "restaurants",
})
export class Restaurant extends Model<Restaurant> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
  })
  @ForeignKey(() => Chef)
  chef_id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @BelongsTo(() => Chef)
  chef!: Chef;

  @HasMany(() => Menu)
  menu!: Menu[];
}

// MENU TABLE
@Table({
  defaultScope: {
    attributes: { exclude: ["deleted_at"] },
  },
  paranoid: true,
  tableName: "menu",
})
export class Menu extends Model<Menu> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED,
  })
  @ForeignKey(() => Restaurant)
  restaurant_id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  price!: number;

  @BelongsTo(() => Restaurant)
  restaurant!: Restaurant;
}

export default [Chef, Restaurant, Menu];
