import puppeteer from "puppeteer";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const PROMO_WIDTH = 1080;
const PROMO_HEIGHT = 1080;

const LOGO_PATH =
  "M116.419 16.3268C109.59 11.5679 97.9222 5.96914 90.2388 3.72965C72.8798 -1.58913 59.1794 1.40491 50.114 4.56947C32.4704 10.7281 21.3721 18.8462 11.412 33.6828C-4.23949 56.6375 -1.96292 93.869 17.1035 114.864C21.3721 119.903 23.6487 119.063 40.1539 107.026C40.723 106.466 38.4465 102.827 35.0316 98.6278C27.3481 89.11 22.7949 71.754 25.0715 61.9563C32.4704 31.1634 70.3187 14.6472 94.7919 31.4433C100.199 35.0825 117.273 50.199 132.64 65.0356C155.691 86.8706 162.52 91.9094 168.212 91.3496C173.903 90.7897 175.895 88.8301 176.464 82.6715C177.318 75.9531 174.757 72.034 161.667 60.2767C152.845 52.1585 145.731 44.8802 145.731 43.4805C145.731 42.3608 151.707 37.6019 159.105 33.1229C206.914 3.1698 258.421 62.7961 218.581 101.987C213.459 107.026 204.353 112.345 198.377 114.024C191.547 115.704 159.959 117.104 120.688 117.104C47.2683 117.104 43.2842 117.943 23.9332 135.02C-0.824636 157.134 -6.51609 194.926 10.8429 222.359C33.3241 258.191 81.7016 267.149 115.85 241.675L128.372 232.157L142.885 241.675C166.504 257.351 185.571 260.431 208.621 252.872C254.722 237.476 271.796 179.809 241.916 141.178C238.501 136.979 236.794 136.699 232.241 138.939C218.297 146.777 218.581 146.217 226.834 163.013C233.094 175.89 234.233 180.929 232.81 190.727C228.826 215.361 210.044 231.877 186.14 231.877C167.643 231.877 161.667 228.238 127.518 195.486C109.59 178.689 93.0845 164.693 90.8079 164.693C86.5393 164.693 77.433 173.371 77.433 177.57C77.433 178.689 85.1165 187.647 94.7919 197.165L112.151 214.241L101.906 222.08C65.7655 249.233 14.2578 216.761 26.2098 174.211C29.9093 161.333 42.9996 147.057 55.5209 142.578C60.3586 140.618 90.2388 139.498 130.648 139.498C204.922 139.498 213.744 138.099 230.818 123.542C281.757 80.9919 252.161 0.930299 185.571 1.21023C166.22 1.21023 155.691 5.12933 137.762 18.2863L128.656 25.0048L116.419 16.3268Z";

interface PromoConfig {
  lang: "en" | "es";
  headline: string;
  subheadline: string;
  cta: string;
  tagline: string;
  filename: string;
}

const promos: PromoConfig[] = [
  {
    lang: "en",
    headline: "Coming Soon",
    subheadline: "Learn. Build. Ship.",
    cta: "Stay tuned",
    tagline: "Free • Community-driven • No shortcuts",
    filename: "promo-en.png",
  },
  {
    lang: "es",
    headline: "Próximamente",
    subheadline: "Aprende. Construye. Lanza.",
    cta: "Mantente atento",
    tagline: "Gratis • Impulsado por la comunidad • Sin atajos",
    filename: "promo-es.png",
  },
];

function generateHTML(config: PromoConfig): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Hedvig+Letters+Sans&family=Hedvig+Letters+Serif&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            width: ${PROMO_WIDTH}px;
            height: ${PROMO_HEIGHT}px;
            background: #0A0A0A;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
          }
          
          /* Dotted background pattern */
          .dotted-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0);
            background-size: 12px 12px;
            opacity: 0.6;
            mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%);
          }
          
          .content {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 60px;
          }
          
          .logo {
            width: 32px;
            height: 32px;
            margin-bottom: 32px;
          }
          
          .headline {
            font-family: 'Hedvig Letters Sans', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: #FFD500;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: 32px;
          }
          
          .subheadline {
            font-family: 'Hedvig Letters Serif', serif;
            font-size: 72px;
            font-weight: 400;
            line-height: 1.1;
            max-width: 820px;
            margin-bottom: 48px;
            letter-spacing: 0.02em;
          }
          
          .word-1 { color: #666666; }
          .word-2 { color: #AAAAAA; }
          .word-3 { color: #FAFAFA; }
          
          .cta-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            border: 1px solid #2a2a2a;
            background: rgba(255, 255, 255, 0.02);
            margin-bottom: 40px;
          }
          
          .cta-dot {
            width: 8px;
            height: 8px;
            background: #FFD500;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          
          .cta-text {
            font-family: 'Hedvig Letters Sans', sans-serif;
            font-size: 16px;
            color: #FAFAFA;
            letter-spacing: 0.05em;
          }
          
          .tagline {
            font-family: 'Hedvig Letters Sans', sans-serif;
            font-size: 14px;
            color: #555555;
            letter-spacing: 0.1em;
          }
          
          .url {
            font-family: 'Hedvig Letters Sans', sans-serif;
            font-size: 16px;
            color: #444444;
            margin-top: 32px;
            letter-spacing: 0.05em;
          }
          
          .brand-watermark {
            position: absolute;
            bottom: -60px;
            font-family: 'Hedvig Letters Sans', sans-serif;
            font-size: 280px;
            font-weight: 400;
            color: #141414;
            text-transform: lowercase;
            letter-spacing: -0.02em;
            user-select: none;
            pointer-events: none;
          }
        </style>
      </head>
      <body>
        <div class="dotted-bg"></div>
        
        <div class="content">
          <svg class="logo" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="${LOGO_PATH}" fill="#FFD500"/>
          </svg>
          
          <div class="headline">${config.headline}</div>
          
          <div class="subheadline">
            ${config.lang === "en" 
              ? '<span class="word-1">Learn.</span> <span class="word-2">Build.</span> <span class="word-3">Ship.</span>'
              : '<span class="word-1">Aprende.</span> <span class="word-2">Construye.</span> <span class="word-3">Lanza.</span>'
            }
          </div>
          
          <div class="cta-badge">
            <div class="cta-dot"></div>
            <span class="cta-text">${config.cta}</span>
          </div>
          
          <div class="tagline">${config.tagline}</div>
          
          <div class="url">crafters.run</div>
        </div>
        
        <div class="brand-watermark">crafters</div>
      </body>
    </html>
  `;
}

async function generatePromo() {
  const outputDir = join(process.cwd(), "public", "promo");
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewport({ width: PROMO_WIDTH, height: PROMO_HEIGHT });

  for (const config of promos) {
    const html = generateHTML(config);
    await page.setContent(html, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.evaluateHandle("document.fonts.ready");
    await new Promise((r) => setTimeout(r, 1000));

    const screenshot = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: PROMO_WIDTH, height: PROMO_HEIGHT },
    });

    const outputPath = join(outputDir, config.filename);
    writeFileSync(outputPath, screenshot);

    console.log(`Generated: ${config.filename} (${config.lang.toUpperCase()})`);
  }

  console.log(`\nPromo images saved to: ${outputDir}`);
  console.log(`Dimensions: ${PROMO_WIDTH}x${PROMO_HEIGHT}`);

  await browser.close();
}

generatePromo().catch(console.error);

