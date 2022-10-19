import chromium from "chrome-aws-lambda";
import core from 'puppeteer-core';

const exePath = process.platform === 'win32'
  ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';


export const generateOGIImage = async (_url: string) => {
  try {
    // const browser = await chromium.puppeteer.launch({
    //   ignoreDefaultArgs: ['--disable-extensions'],
    //   // executablePath: await chromium.executablePath,
    // });

    const browser = await core.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
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

/*let _page: core.Page | null;
async function getPage(isDev: boolean) {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
}

export async function getScreenshot(html: string, type: any, isDev: boolean) {
  const page = await getPage(isDev);
  await page.setViewport({ width: 2048, height: 1170 });
  await page.setContent(html);
  const file = await page.screenshot({ type });
  return file;
}


interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean) {
  let options: Options;
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true
    };
  } else {
    options = {
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    };
  }
  return options;
}*/
