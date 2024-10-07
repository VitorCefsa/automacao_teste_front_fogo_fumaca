module.exports = {
    use: {
      headless: false,  // Para ver o navegador durante os testes. Mude para 'true' para testes headless
      baseURL: 'http://localhost:5000',  // URL do seu servidor Flask
      browserName: 'chromium',
      video: 'on-first-retry',  // Gravação de vídeo apenas se o teste falhar
    },
    retries: 2,  // Número de tentativas em caso de falha
  };
  