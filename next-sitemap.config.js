/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://inovtour.com', // Substitua pelo domínio do seu site
  generateRobotsTxt: true, // Gera o arquivo robots.txt
  sitemapSize: 7000, // Número máximo de URLs por sitemap
  changefreq: 'weekly', // Frequência de mudanças do conteúdo
  priority: 0.7, // Prioridade das páginas
  exclude: ['/admin/*'], // Exclua rotas específicas, se necessário
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://inovtour.com/sitemap-0.xml', // Atualize o caminho do seu sitemap
    ],
  },
};
