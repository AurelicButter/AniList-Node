const puppeteer = require('puppeteer');
const settings = require('./settings.json');
const fs = require('fs');

async function authorization(email, password) {
    if (!email || !password) { throw new Error("Email or password not provided for authorization"); }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://anilist.co/api/v2/oauth/authorize?client_id=${settings.clientID}&response_type=token`);

    if (page.url().startsWith("https://anilist.co/login")) {
        await page.click('#app > div.page-content > div > div > form > div:nth-child(1) > input');
        await page.keyboard.type(email);

        await page.click('#app > div.page-content > div > div > form > div:nth-child(2) > input');
        await page.keyboard.type(password);

        await page.click('#app > div.page-content > div > div > form > div.submit');
        await page.waitForNavigation();
    };

    if (page.url().startsWith('https://anilist.co/api/v2/oauth/authorize')) {
        await page.click('body > div > div > div > div > div.panel-body > div > form:nth-child(1) > button');
        await page.waitForNavigation();
    };

    var token = await page.evaluate(() => document.getElementById('token').value);
    await fs.writeFile("./token.txt", token, function (err) { if (err) { throw err; } console.log("Authorization completed") });
    await browser.close();
};

authorization(settings.email, settings.password);