describe('Página Inicial', () => {
    it('deve carregar a página inicial com sucesso', () => {
      // Aguarde 2 segundos antes de visitar a página
      cy.wait(2000);

      // Visite a página inicial com a URL completa
      cy.visit('http://localhost:3000/');
  
      // Verifique se o título da página contém o nome da empresa
      cy.title().should('include', 'INOVTOUR');
  
      // Verifique se o cabeçalho principal contém o texto esperado
      cy.get('h1').should('contain.text', 'Sua empresa com atendimento de excelência em Gerenciamento de Viagens Corporativas');
  
      // Verifique se o botão "Saiba mais" está visível e clicável
      cy.get('a').contains('Saiba mais').should('be.visible').click();
  
      // Verifique se a navegação ocorreu corretamente após o clique
      cy.url().should('include', '/destino-do-link');
    });
});
