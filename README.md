# MemeVerse  

## Descrição do Projeto  
O **MemeVerse** é uma plataforma de compartilhamento de memes desenvolvida com **Next.js 15**, focada em componentização, reutilização de código e estilização com **CSS Modules**. O objetivo é criar uma interface interativa e responsiva, seguindo as melhores práticas de desenvolvimento frontend.  

## Estrutura do Projeto  

### Componentes Criados  
1. **Header**  
    - Props: `logo`, `navItems`  
    - Descrição: Componente de cabeçalho com logo, navegação e barra de busca.  

2. **HeroSection**  
    - Props: `memeOfTheDay`  
    - Descrição: Seção principal exibindo o meme do dia.  

3. **MemeCard**  
    - Props: `id`, `title`, `description`, `image`, `author`, `category`, `likes`, `comments`  
    - Descrição: Card individual reutilizável para exibir memes.  

4. **InteractionBar**  
    - Props: `likes`, `comments`  
    - Descrição: Barra de interação com botões de curtir e comentar.  

5. **CategoriesSection**  
    - Props: `categories`  
    - Descrição: Seção de navegação por categorias de memes.  

6. **Footer**  
    - Props: `footerData`, `socialLinks`  
    - Descrição: Rodapé com links de navegação e informações da empresa.  

7. **Sidebar**  
    - Props: `events`, `premiumFeatures`, `popularTags`  
    - Descrição: Barra lateral com conteúdo complementar, como eventos e tags populares.  

### Organização do Código  
- **Estrutura de Pastas:**  
  - `components/`: Contém os componentes reutilizáveis.  
  - `app/`: Contém as páginas e estilos globais.  
- **Estilização:** Cada componente possui seu próprio arquivo CSS Module para garantir modularidade e evitar conflitos de estilos.  

## Instruções de Instalação e Execução  

### Pré-requisitos  
- Node.js (versão 16 ou superior)  
- Gerenciador de pacotes npm ou yarn  

### Passos  
1. Clone o repositório:  
    ```bash  
    git clone https://github.com/seu-usuario/memeverse.git  
    ```  
2. Acesse o diretório do projeto:  
    ```bash  
    cd memeverse  
    ```  
3. Instale as dependências:  
    ```bash  
    npm install  
    ```  
4. Inicie o servidor de desenvolvimento:  
    ```bash  
    npm run dev  
    ```  
5. Acesse a aplicação no navegador:  
    ```  
    http://localhost:3000  
    ```  

## Decisões de Design  
- **Componentização:** Cada componente foi projetado para ser reutilizável e seguir o princípio de responsabilidade única.  
- **Estilização:** Utilizamos **CSS Modules** para garantir modularidade e responsividade.  
- **Props:** Todos os dados dinâmicos foram passados via props para manter a separação de responsabilidades.  

## Desafios e Soluções  
- **Desafio:** Realizar o props dos componentes.  
  - **Solução:** Não consegui por falta de conhecimentos. A solução aplicada foi utilizar IA para entender o como e onde aplicar.  
- **Desafio:** Corrigir problemas que não permitiam abrir a aplicação.  
  - **Solução:** Revisei a configuração do ambiente e corrigi erros no código.  
- **Desafio:** A página principal estava sem alguns estilos.  
  - **Solução:** Revisei o arquivo CSS da página principal e o código jsx. Corrigi os erros encontrados e coloquei items que estavam faltando.  

## Tecnologias Utilizadas  
- **Next.js 15**  
- **CSS Modules**  
- **React.js**  

## Conclusão  
O projeto **MemeVerse** foi desenvolvido com foco em boas práticas de desenvolvimento frontend, garantindo uma interface interativa, responsiva e bem estruturada.  

## Autor  
- Nome: [Seu Nome]  
- GitHub: [Seu GitHub]  
- LinkedIn: [Seu LinkedIn]  