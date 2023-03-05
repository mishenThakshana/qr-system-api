import {
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  DataType,
  Model,
} from "sequelize-typescript";

interface QrCodeInterface {
  id?: number;
  code: string;
  createdAt: string;
}

@Table({
  timestamps: false,
  tableName: "qr_codes",
})
class QrCode extends Model<QrCodeInterface> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.BIGINT,
  })
  id!: number;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  code!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  createdAt!: string;
}

export default QrCode;
