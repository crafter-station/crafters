import puppeteer from "puppeteer";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function generateOG() {
  const outputDir = join(process.cwd(), "public");
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: OG_WIDTH, height: OG_HEIGHT });

  // HTML with the same styling as the watermark
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            width: ${OG_WIDTH}px;
            height: ${OG_HEIGHT}px;
            background: #0C0C0C;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          .watermark {
            font-family: 'Hedvig Letters Sans', sans-serif;
            font-size: 180px;
            font-weight: 400;
            color: #161616;
            text-transform: lowercase;
            letter-spacing: -0.02em;
            user-select: none;
          }
        </style>
      </head>
      <body>
        <div class="watermark">crafters</div>
      </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: "networkidle0" });

  // Wait for font to load
  await page.evaluateHandle("document.fonts.ready");

  const screenshot = await page.screenshot({
    type: "png",
    clip: { x: 0, y: 0, width: OG_WIDTH, height: OG_HEIGHT },
  });

  const outputPath = join(outputDir, "og.png");
  writeFileSync(outputPath, screenshot);

  console.log(`OG image generated: ${outputPath}`);
  console.log(`Dimensions: ${OG_WIDTH}x${OG_HEIGHT}`);

  await browser.close();
}

generateOG().catch(console.error);
