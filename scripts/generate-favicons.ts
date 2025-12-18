import sharp from "sharp";
import { join } from "path";

const publicDir = join(process.cwd(), "public");
const sourceImage = join(process.cwd(), "app", "icon.png");

async function generateFavicons() {
  // Generate different sizes
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(sourceImage)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name));
    console.log(`Generated: ${name} (${size}x${size})`);
  }

  // Generate ICO file (just copy 32x32 as favicon.ico for simplicity)
  await sharp(sourceImage)
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, "favicon.ico"));
  console.log("Generated: favicon.ico");

  console.log("\nAll favicons generated!");
}

generateFavicons().catch(console.error);
