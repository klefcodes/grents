import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript"


@Table({
    defaultScope: {
        attributes: {exclude: ["deleted_at"]}
    },
    paranoid: true,
    tableName: "chefs"
})
export class Chef extends Model<Chef> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
    })
    id!: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    name!: string

    @HasMany(() => Restaurant)
    restaurants!: Restaurant[]
}

@Table({
    defaultScope: {
        attributes: {exclude: ["deleted_at"]}
    },
    paranoid: true,
    tableName: "restaurants"
})
export class Restaurant extends Model<Restaurant> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED
    })
    id!: string

    @Column({
        allowNull: false,
        type: DataType.INTEGER.UNSIGNED
    })
    @ForeignKey(() => Chef)
    chef_id!: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    name!: string

    @BelongsTo(() => Chef)
    chef!: Chef
}

export default [Chef, Restaurant]