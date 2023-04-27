import { MigrationInterface, QueryRunner } from "typeorm"

export class Post1682549261729 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE post(
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                description VARCHAR NOT NULL
            );
            `,
        );
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE post`,
        );
    }
}
