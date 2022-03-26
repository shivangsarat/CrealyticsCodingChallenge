import puppeteer from "puppeteer";

jest.setTimeout(30000)

describe('Product List checking basic rendering of elements', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();

        await page.goto("http://localhost:3000");
        await page.waitForSelector(".product-list-card");
    });

    it("Contains the Search Box", async () => {
        let productTitle = await page.$('.searchBox') ? true : false;
        expect(productTitle).toBe(true);
    });
    it("Pagination limit of 100", async () => {
        const element = await page.$$('.product-list-card')
        expect(element.length).toEqual(100)
    });
    it("Contains the Product name", async () => {
        let productTitle = await page.$('.product-title') ? true : false;
        expect(productTitle).toBe(true);
    });
    it("Contains the Product price", async () => {
        const productPrice = await page.$(".product-price") ? true : false;
        expect(productPrice).toBe(true);
    });
    it("Contains the Product sale_price", async () => {
        const productSalePrice = await page.$(".product-sale_price") ? true : false;
        expect(productSalePrice).toBe(true);
    });
    it("Contains the Product gtin", async () => {
        const productGtin = await page.$(".product-gtin") ? true : false;
        expect(productGtin).toBe(true);
    });
    it("Contains the Product gender", async () => {
        const productGender = await page.$(".product-gender") ? true : false;
        expect(productGender).toBe(true);
    });
    it("Contains the Product Image", async () => {
        // const img = await page.$eval(".product-image", e => e.getAttribute("src"));
        await page.waitForSelector('.product-image')
        const img = await page.$(".product-image") ? true : false;
        // expect(img).toContain("https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg");
        expect(img).toBe(true);
    });
    it("Expands on click displaying another image", async () => {
        await page.click(".product-list-card")
        await page.waitForSelector('.modal-body')
        await page.waitForSelector('.product-additional-image')
        // const other_img = await page.$eval('.product-additional-image', e => e.getAttribute("src"))
        const other_img = await page.$(".product-additional-image") ? true : false;
        // expect(other_img).toContain("https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg")
        expect(other_img).toBe(true);
    });

    afterAll(() => browser.close());
})


describe('Product List Checking Functionality', () => {
    let browser;
    let page;

    let first_element = '';
    let second_element = '';

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();

        await page.goto("http://localhost:3000");
        await page.waitForSelector(".searchBox");
        
        await page.click(".searchBox")
      });
    
    it("Checks product rendered on first keypress element", async () => {
        await page.type(".searchBox", "h")
        const productTitle = await page.$eval(".product-title", (e) => e.textContent);
        expect(productTitle).toContain("Weekday THURSDAY Jeans Slim Fit black");
        const gtin = await page.$eval(".product-gtin", (e) => e.textContent);
        expect(gtin).toContain("2001007926858");
        first_element = gtin;
    });
    it("Checks product rendered on second keypress element and product different from previous entry", async () => {
        await page.click(".searchBox")
        await page.type(".searchBox", "o")
        const gtin = await page.$eval(".product-gtin", (e) => e.textContent);
        second_element = gtin;
        expect(second_element).not.toEqual(first_element)
    });

    it("Checks for product rendered on price switch that sale price is less than product price", async () => {
        await page.click(".filter-price")
        const sale_price = await page.$eval(".product-sale_price", (e) => e.textContent);
        const sale_price_numeric = Number(sale_price.substring(15, sale_price.length-4));
        const price = await page.$eval(".product-price", (e) => e.textContent);
        const price_numeric = Number(price.substring(14, price.length-4));
        expect(price_numeric).toBeGreaterThan(sale_price_numeric)
    });
    it("Checks the product for gender matching to applied filter", async () => {
        await page.click(".filter-gender")
        const gender = await page.$eval("#filter-value-male", (e) => e.textContent);
        expect(gender).toBe('Male')
    });
    

    afterAll(() => browser.close());
})

describe('Product List checking basic rendering of elements', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250
        });
        page = await browser.newPage();

        await page.goto("http://localhost:3000");
        await page.waitForSelector(".product-list-card");
    });

    it("On click of Load More button add another 100 items in the list maintaining the Pagination limit of 100", async () => {
        await page.click(".loaad-more-button")
        // await page.waitForTimeout(4000)
        const element = await page.$$('.product-list-card')
        expect(element.length).toEqual(200)
    });

    afterAll(() => browser.close());
})