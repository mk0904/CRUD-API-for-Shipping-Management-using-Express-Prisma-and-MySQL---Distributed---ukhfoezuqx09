-- CreateTable
CREATE TABLE `Shipping` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `productiD` INTEGER NOT NULL,
    `count` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    UNIQUE INDEX `Shipping_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
