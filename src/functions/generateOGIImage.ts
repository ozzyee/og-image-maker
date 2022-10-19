import chromium from "chrome-aws-lambda";

export const generateOGIImage = async (_url: string) => {
  try {
    const browser = await chromium.puppeteer.launch({
      ignoreDefaultArgs: ['--disable-extensions'],
      // executablePath: await chromium.executablePath,
    });
    const page = await browser.newPage();
    await page.goto(_url);
    await page.setViewport({ width: 2048, height: 1170 });
    const image = await page.screenshot();

    await browser.close();
    return image;
  } catch (error) {
    console.log(error);
  }
}