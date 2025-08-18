# Flux Website

Este projeto é o website oficial da Flux, construído com tecnologias modernas para melhor performance e experiência de desenvolvimento.

## Tecnologias Utilizadas

- **Vite** - Build tool rápido e moderno
- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **Tailwind CSS v4** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI baseados em Radix UI
- **Lucide React** - Ícones SVG

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada automaticamente quando você fizer edições.\
Você também verá erros de lint no console.

### `npm run build`

Constrói o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para melhor performance.

A construção é minificada e os nomes dos arquivos incluem hashes.\
Seu aplicativo está pronto para ser implantado!

### `npm run preview`

Serve a versão de produção localmente para teste.\
Execute após `npm run build` para visualizar a versão otimizada.

## Saiba Mais

Para aprender mais sobre as tecnologias utilizadas:

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://reactjs.org/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Publicação no GitHub Pages

Este projeto está configurado para ser publicado no GitHub Pages usando o GitHub Actions.

### Configuração inicial

1. Faça um fork ou clone este repositório para sua conta do GitHub.
2. Edite o arquivo `package.json` e atualize o campo `homepage` com seu nome de usuário:
   ```json
   "homepage": "https://seu-usuario.github.io/site-fluxomize"
   ```
3. Configure os seguintes secrets no seu repositório GitHub (Settings > Secrets and variables > Actions):
   - `VITE_EMAILJS_SERVICE_ID`: Seu ID de serviço do EmailJS
   - `VITE_EMAILJS_TEMPLATE_ID`: Seu ID de template do EmailJS
   - `VITE_EMAILJS_PUBLIC_KEY`: Sua chave pública do EmailJS

4. Habilite o GitHub Pages no seu repositório:
   - Vá para Settings > Pages
   - Na seção "Build and deployment", selecione a fonte como "GitHub Actions"

5. Faça um push para a branch principal (main ou master):
   ```bash
   git add .
   git commit -m "Configuração inicial para GitHub Pages"
   git push
   ```

6. O GitHub Actions irá automaticamente construir e implantar seu site. Você poderá acessá-lo em:
   `https://seu-usuario.github.io/site-fluxomize`

### Implantação manual

Você também pode implantar manualmente com o comando:

```bash
npm run deploy
```

### Estrutura de arquivos do workflow

O workflow do GitHub Actions está configurado no arquivo `.github/workflows/deploy.yml` e realiza as seguintes etapas:

1. Checkout do código
2. Configuração do Node.js
3. Instalação das dependências
4. Build do projeto com as variáveis de ambiente configuradas
5. Upload do artefato gerado
6. Implantação no GitHub Pages
