const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

test.describe('Página Inicial', () => {

  test('Deve carregar a página inicial corretamente', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.goto();
    
    // Verifica o título da página
    await expect(page).toHaveTitle('Detecção de Fogo');

    // Verifica o texto de boas-vindas
    const headingText = await homePage.getHeadingText();
    await expect(headingText).toBe('Bem-vindo ao Projeto de Detecção de Fogo');
  });

});
