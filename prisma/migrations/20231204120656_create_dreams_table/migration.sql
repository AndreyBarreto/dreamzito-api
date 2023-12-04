-- CreateTable
CREATE TABLE "dreams" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "account_id" UUID,

    CONSTRAINT "dreams_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dreams" ADD CONSTRAINT "dreams_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
