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

    it("contains the Search Box", async () => {
        let productTitle = await page.$('.searchBox') ? true : false;
        expect(productTitle).toBe(true);
    });
    it("Pagination limit of 100", async () => {
        const element = await page.$$('.product-list-card')
        expect(element.length).toEqual(100)
    });
    it("contains the Product name", async () => {
        let productTitle = await page.$('.product-title') ? true : false;
        expect(productTitle).toBe(true);
    });
    it("contains the Product price", async () => {
        const productPrice = await page.$(".product-price") ? true : false;
        expect(productPrice).toBe(true);
    });
    it("contains the Product sale_price", async () => {
        const productSalePrice = await page.$(".product-sale_price") ? true : false;
        expect(productSalePrice).toBe(true);
    });
    it("contains the Product gtin", async () => {
        const productGtin = await page.$(".product-gtin") ? true : false;
        expect(productGtin).toBe(true);
    });
    it("contains the Product gender", async () => {
        const productGender = await page.$(".product-gender") ? true : false;
        expect(productGender).toBe(true);
    });
    it("contains the Product Image", async () => {
        // const img = await page.$eval(".product-image", e => e.getAttribute("src"));
        await page.waitForSelector('.product-image')
        const img = await page.$(".product-image") ? true : false;
        // expect(img).toContain("https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg");
        expect(img).toBe(true);
    });
    it("Expands on click displaying another image", async () => {
        await page.click(".product-list-card")
        await page.waitForSelector('.modal-body')
        // const other_img = await page.$eval('.product-additional-image', e => e.getAttribute("src"))
        const other_img = await page.$(".product-additional-image") ? true : false;
        // expect(other_img).toContain("https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg")
        expect(other_img).toBe(true);
    });

    afterAll(() => browser.close());
})


describe('ProductList checking basic rendering of elements', () => {
    let browser;
    let page;

    let first_element = '';
    let second_element = '';

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();

        await page.goto("http://localhost:3000");
        await page.waitForSelector(".searchBox");
        
        await page.click(".searchBox")
      });
    
    it("checks product rendered on first keypress element", async () => {
        await page.type(".searchBox", "h")
        const productTitle = await page.$eval(".product-title", (e) => e.textContent);
        expect(productTitle).toContain("Weekday THURSDAY Jeans Slim Fit black");
        const gtin = await page.$eval(".product-gtin", (e) => e.textContent);
        expect(gtin).toContain("2001007926858");
        first_element = gtin;
    });
    it("checks product rendered on second keypress element and product different from previous entry", async () => {
        await page.click(".searchBox")
        await page.type(".searchBox", "ho")
        const gtin = await page.$eval(".product-gtin", (e) => e.textContent);
        second_element = gtin;
        expect(second_element).not.toEqual(first_element)
    });
    

    afterAll(() => browser.close());
})

// describe('Product List checking basic rendering of elements', () => {
//     let browser;
//     let page;

//     beforeAll(async () => {
//         browser = await puppeteer.launch({headless: true});
//         page = await browser.newPage();
//       });
    
//     it("contains the Product Image", async () => {
//         await page.goto("http://localhost:3000");
//         // await page.waitForSelector(".product-title");
//         let serachElemnt = ".product-image"
//         let checkForElement = await page.evaluate((sel)=>{
//             let elementCheck =Array.from(document.querySelectorAll(sel));
//             if(elementCheck.length){
//                 return true
//             }else return false;
 
//      },serachElemnt);
//      checkForElement
//         // const text = await page.$eval(".product-title", (e) => e.textContent);
//         // expect(text).toContain("Weekday THURSDAY Jeans Slim Fit black");
//     });
//     it("contains the Product price", async () => {
//         await page.goto("http://localhost:3000");
//         await page.waitForSelector(".product-price");
//         const text = await page.$eval(".product-price", (e) => e.textContent);
//         expect(text).toContain("39.95 EUR");
//     });
//     it("contains the Product sale_price", async () => {
//         await page.goto("http://localhost:3000");
//         await page.waitForSelector(".product-sale_price");
//         const text = await page.$eval(".product-sale_price", (e) => e.textContent);
//         expect(text).toContain("39.95 EUR");
//     });
//     it("contains the Product gtin", async () => {
//         await page.goto("http://localhost:3000");
//         await page.waitForSelector(".product-gtin");
//         const text = await page.$eval(".product-gtin", (e) => e.textContent);
//         expect(text).toContain("2001007926858");
//     });
//     it("contains the Product gender", async () => {
//         await page.goto("http://localhost:3000");
//         await page.waitForSelector(".product-gender");
//         const text = await page.$eval(".product-gender", (e) => e.textContent);
//         expect(text).toContain("female");
//     });

//     afterAll(() => browser.close());
// })