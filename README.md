Manual do Usuário
Introdução
A Block Ads Extension é uma extensão de navegador fácil de usar, desenvolvida para bloquear anúncios indesejados enquanto você navega. Este manual fornece instruções detalhadas para instalação, uso e solução de problemas da extensão.

Instalação da Extensão
Google Chrome
Baixe o projeto: Acesse o repositório GitHub e faça o download ou clone o repositório.
Acesse as ferramentas de desenvolvedor no Chrome:
Abra o Chrome e digite chrome://extensions na barra de endereços.
Habilite o Modo Desenvolvedor no canto superior direito da tela.
Carregue a extensão:
Clique em “Carregar sem compactação” e selecione o diretório do projeto clonado (block-ads-extension/).
Mozilla Firefox
Baixe o projeto: Acesse o repositório GitHub e faça o download ou clone o repositório.
Acesse o modo desenvolvedor de extensões:
Abra o Firefox e digite about:debugging na barra de endereços.
Carregue a extensão:
Clique em “Carregar Manifesto Temporário” e selecione o arquivo manifest.json no diretório do projeto.
Utilização
Abrir o popup da extensão:
Após instalar, clique no ícone da extensão na barra de ferramentas do navegador para abrir a interface.
Ativar e Desativar o Bloqueio de Anúncios:
Para desativar o bloqueio de anúncios, clique no botão "Desativar". O texto exibido será alterado para "Desativado!".
Para ativar novamente, clique no botão.
Solução de Problemas
1. O botão não está funcionando
Verifique se a extensão foi corretamente instalada.
Atualize a página e tente clicar novamente.
2. Os anúncios não estão sendo bloqueados
Certifique-se de que o bloqueio de anúncios está ativado (o botão deve exibir "Desativar").
Verifique se há atualizações disponíveis para o navegador.
3. Erro ao carregar a extensão
Certifique-se de que o diretório da extensão está corretamente estruturado e que o arquivo manifest.json está no diretório raiz.
Suporte
Para suporte técnico, consulte a página de issues no GitHub.

Block Ads Extension
Este projeto é uma extensão de navegador que bloqueia anúncios em páginas da web. A extensão permite que o usuário ative ou desative o bloqueio de anúncios de forma interativa, manipulando o conteúdo exibido em uma página HTML.

Funcionalidades
Bloqueio de anúncios: Habilita ou desabilita o bloqueio de anúncios.
Interface simples: Interface gráfica minimalista para fácil uso.
Personalização: Testes de integração com Puppeteer.
Requisitos do Sistema
Node.js (v12 ou superior)
npm (v6 ou superior)
Navegador compatível com extensões (Chrome, Firefox)
Puppeteer (para testes de integração)
Instalação
Clone o repositório para o seu diretório local:

bash
Copiar código
git clone https://github.com/seu-usuario/block-ads-extension.git
cd block-ads-extension
Instale as dependências do projeto:

bash
Copiar código
npm install
Para rodar os testes automatizados, execute:

bash
Copiar código
npm test
Estrutura do Projeto
bash
Copiar código
block-ads-extension/
├── src/
│   ├── popup.js          # Script principal que manipula a interface da extensão
│   ├── popup.html        # Página HTML da extensão
│   └── styles.css        # Estilos para a interface da extensão
├── tests/
│   ├── popup.test.js     # Testes unitários para popup.js
│   ├── integration.test.js # Testes de integração usando Puppeteer
├── jest.config.js        # Configuração do Jest para testes com jsdom
├── package.json          # Configurações e dependências do projeto
└── README.md             # Documentação técnica do projeto
Configuração para Testes
Este projeto utiliza Jest para rodar testes unitários e de integração. Os testes são divididos em:

Unitários: Testes da lógica interna, como a alteração do texto na página.
Integração: Utilizando Puppeteer para simular interações com o navegador.
Para executar os testes, rodar:

bash
Copiar código
npm test
Configuração do Jest
Certifique-se de que o Jest esteja configurado corretamente com o ambiente jsdom:

javascript
Copiar código
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
};
Testes de Integração com Puppeteer
Caso haja necessidade de testar a interface completa com o Puppeteer, utilize:

bash
Copiar código
npm install puppeteer --save-dev
Contribuição
Faça o fork do projeto.
Crie um branch para a sua feature (git checkout -b minha-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Faça o push para o branch (git push origin minha-feature).
Abra um Pull Request.
Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
