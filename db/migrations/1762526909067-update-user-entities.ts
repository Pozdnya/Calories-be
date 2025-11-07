import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserEntities1762526909067 implements MigrationInterface {
    name = 'UpdateUserEntities1762526909067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "firstName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('admin', 'user')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "appLanguage"`);
        await queryRunner.query(`CREATE TYPE "public"."users_applanguage_enum" AS ENUM('ua', 'en')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "appLanguage" "public"."users_applanguage_enum" NOT NULL DEFAULT 'ua'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "birthDate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "gender"`);
        await queryRunner.query(`CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "gender" "public"."users_gender_enum" NOT NULL DEFAULT 'other'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "gender" character varying NOT NULL DEFAULT 'other'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "birthDate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "appLanguage"`);
        await queryRunner.query(`DROP TYPE "public"."users_applanguage_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "appLanguage" character varying NOT NULL DEFAULT 'ua'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" character varying NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "firstName" SET NOT NULL`);
    }

}
