import fs from "fs";
import jsdom from 'jsdom';
import puppeteer from "puppeteer";
const { JSDOM } = jsdom;

const htmlFile = fs.readFileSync('example.html', "utf-8");
const dom1 = new JSDOM(htmlFile);
const document = dom1.window.document;

const anchors = document.querySelectorAll('.card__main a');
console.log(`Found ${anchors.length} anchors`);

for (let i = 0; i < 11; i++) {
    console.log(anchors[i].href);

    puppeteer
        .launch({
            defaultViewport: {
                width: 790,
                height: 600,
            },
        })
        .then(async (browser) => {
            const page = await browser.newPage();
            await page.goto(anchors[i].href);
            page.setDefaultNavigationTimeout(24000);
            const element = await page.$('.c-viewer__iframe');

            if (!element) {
                console.error("Element not found");
                await browser.close();
                return;
            }
            // Define the starting point of the drag
            const startPoint = await element.boundingBox();
            const startX = startPoint.x + startPoint.width / 2;
            const startY = startPoint.y + startPoint.height / 2;
            const width = startPoint.width;
            const height = startPoint.height;

            // Define the ending points of the drag
            const endPointA = { x: startX + (width / 8), y: startY };
            const endPointB = { x: startX + (width / 4), y: startY };
            const endPointC = { x: startX + ((width * 3) / 8), y: startY };
            const endPointD = { x: startX - (width / 8), y: startY };
            const endPointE = { x: startX - (width / 4), y: startY };
            const endPointF = { x: startX + ((width * 3) / 8), y: startY };


            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointA.x, endPointA.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "a.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointB.x, endPointB.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "b.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointC.x, endPointC.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "c.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointD.x, endPointD.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "d.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointE.x, endPointE.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "e.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointF.x, endPointF.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "f.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })


            await browser.close();
        });
    console.log("anchor" + i + "done");
}