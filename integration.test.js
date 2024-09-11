const puppeteer = require('puppeteer');
const path = require('path'); // Aqui está o 'require' para o path

describe('Teste de Integração para Bloqueio de Anúncios', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
    }, 30000); // Aumenta o tempo limite para 30 segundos

    afterAll(async () => {
        // Remova ou comente a linha abaixo para manter o navegador aberto
        // await browser.close();
    });

    test('Verifica se os anúncios são bloqueados', async () => {
        // Aqui está o uso do 'path.resolve' para abrir o arquivo local
        const filePath = `file://${path.resolve(__dirname, 'popup.html')}`;
        await page.goto(filePath);

        // Aguarda até que o corpo do documento esteja carregado
        await page.waitForSelector('body');

        // Adiciona uma captura de tela para verificar o estado da página
        await page.screenshot({ path: 'screenshot.png' });

        const ads = await page.evaluate(() => {
            const adElements = document.querySelectorAll('.ad, iframe');
            return adElements.length;
        });

        expect(ads).toBe(0); // Verifica se nenhum anúncio foi encontrado

        // Mantém o navegador aberto indefinidamente
        await new Promise(() => {}); // Isto irá manter o processo rodando
    }, 30000); // Remove o limite de tempo
});
