import puppeteer from "puppeteer";


const getDailyLotteryResults = async (date) => {
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: true,
  });
  const page = await browser.newPage();

    await page.goto(
      `https://xoso.com.vn/xsmb-${
        date.getDate() >= 10
          ? date.getDate()
          : "0" + date.getDate()
      }-${
        date.getMonth() + 1 >= 10
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1)
      }-${date.getFullYear()}.html`,
      {
        waitUntil: "load",
      }
    );

    try {
      const allPrize = await page.evaluate(() => {
        const special = document
          .querySelectorAll("span.special-prize")[0]
          .textContent.trim();

        const prize1 = document
          .querySelectorAll("span.prize1")[0]
          .textContent.trim();

        let prize2 = [];
        document.querySelectorAll("span.prize2").forEach((prize) => {
          prize2 = [...prize2, prize.textContent.trim()];
        });
        let prize3 = [];
        document.querySelectorAll("span.prize3").forEach((prize) => {
          prize3 = [...prize3, prize.textContent.trim()];
        });
        let prize4 = [];
        document.querySelectorAll("span.prize4").forEach((prize) => {
          prize4 = [...prize4, prize.textContent.trim()];
        });
        let prize5 = [];
        document.querySelectorAll("span.prize5").forEach((prize) => {
          prize5 = [...prize5, prize.textContent.trim()];
        });
        let prize6 = [];
        document.querySelectorAll("span.prize6").forEach((prize) => {
          prize6 = [...prize6, prize.textContent.trim()];
        });
        let prize7 = [];
        document.querySelectorAll("span.prize7").forEach((prize) => {
          prize7 = [...prize7, prize.textContent.trim()];
        });

        return {
          special,
          prize1,
          prize2,
          prize3,
          prize4,
          prize5,
          prize6,
          prize7,
        };
      });
        console.log(allPrize);
    } catch {(error)=>{
      console.log(error);
    }}
};

export default{
  getDailyLotteryResults
}