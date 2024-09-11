// popup.test.js
const ativarBloqueio = require('./popup'); // Importa o módulo que deseja testar

test('Ativa o bloqueio de anúncios', () => {
    expect(ativarBloqueio()).toBe('Bloqueio ativado'); // Executa o teste
});
