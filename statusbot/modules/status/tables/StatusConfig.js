import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export default class StatusConfig {
    @PrimaryColumn()
    id;

    @Column({ type: "varchar", length: 255 })
    type;

    @Column({ type: "varchar", length: 255 })
    text;
}
