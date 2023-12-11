/*
  Warnings:

  - Added the required column `role` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "roles" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" "roles" NOT NULL;
