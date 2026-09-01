# Zé Luiz do Candeeiro — Site Oficial

Site artístico e institucional desenvolvido para apresentar a trajetória, a poesia, a música e o trabalho educacional de **Zé Luiz do Candeeiro**.

O projeto combina **educação, poesia e música** em uma experiência digital minimalista, imersiva e inspirada na cultura e nas raízes brasileiras.

---

## ✨ Sobre o projeto

O site funciona como um espaço digital para explorar diferentes aspectos da trajetória artística e profissional de Zé Luiz do Candeeiro, incluindo:

* 📚 Trajetória e reflexões sobre educação
* ✍️ Poesias e composições musicais
* 🎵 Produções e manifestações artísticas
* 🇧🇷 Cultura e referências das raízes brasileiras
* 📝 Textos, escritos e fragmentos autorais

A identidade visual foi construída com foco em **estética escura, tipografia, movimento e elementos atmosféricos**, criando uma experiência visual mais próxima de um espaço artístico digital.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias modernas do ecossistema React:

* **Next.js 16** — Framework React utilizando App Router
* **React 19** — Biblioteca para construção da interface
* **Tailwind CSS** — Framework utilitário para estilização
* **Framer Motion** — Animações e transições
* **Lucide React** — Biblioteca de ícones
* **Next/Image** — Otimização e carregamento de imagens

---

## 🎨 Conceito visual

A interface foi inspirada em:

* Sites editoriais minimalistas
* Portfólios artísticos
* Estéticas cinematográficas e escuras
* Tipografia editorial
* Experiências digitais imersivas

A proposta é criar uma espécie de **palco digital**, onde palavras, música, memória e educação possam coexistir.

---

## ⚙️ Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir instalado:

* [Node.js](https://nodejs.org/) — versão compatível com o projeto
* npm, Yarn ou outro gerenciador de pacotes compatível

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/your-username/ze-luiz-site.git
```

Acesse o diretório do projeto:

```bash
cd ze-luiz-site
```

Instale as dependências:

```bash
npm install
```

---

## 🔐 Variáveis de ambiente

O projeto utiliza variáveis de ambiente para armazenar configurações que podem variar entre os ambientes de desenvolvimento, homologação e produção.

### 1. Crie o arquivo `.env.example`

O arquivo `.env.example` deve conter apenas os nomes das variáveis necessárias e valores fictícios ou de exemplo.

Exemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_SITE_URL=site_oficial
```

> **Importante:** nunca coloque senhas, tokens, chaves privadas ou credenciais reais no `.env.example`.

### 2. Crie o arquivo `.env.local`

No ambiente de desenvolvimento, copie o arquivo de exemplo:

```bash
cp .env.example .env.local
```

No Windows PowerShell, você também pode utilizar:

```powershell
Copy-Item .env.example .env.local
```

Depois, ajuste os valores de acordo com o seu ambiente.

Exemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=development
```

### 3. Não versione o `.env.local`

O arquivo `.env.local` deve estar no `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
```

Dessa forma, informações sensíveis não serão enviadas para o repositório.

---

## ▶️ Executando o projeto

Após instalar as dependências e configurar as variáveis de ambiente, execute:

```bash
npm run dev
```

O projeto estará disponível em:

```text
http://localhost:3000
```

Acesse o endereço pelo navegador para visualizar a aplicação.

---

## 🏗️ Build de produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Depois, para iniciar a aplicação:

```bash
npm run start
```

---

## 📦 Principais dependências

As principais bibliotecas utilizadas no projeto incluem:

```text
next
react
react-dom
framer-motion
lucide-react
tailwindcss
```

Para instalar ou atualizar as dependências, utilize:

```bash
npm install
```

---

## 🧠 Próximas evoluções

Algumas funcionalidades que podem ser incorporadas futuramente:

* [X] CMS para gerenciamento de poesias e artigos
* [X] Sistema de blog para textos e reflexões
* [X] Área administrativa
* [X] Sistema de autenticação
* [X] Melhorias de SEO
* [X] Melhorias de performance
* [ ] Player de áudio para composições musicais
* [ ] Integração com API de conteúdo
* [ ] Otimização de acessibilidade
* [ ] Integração com analytics

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

---

## 👤 Sobre

Projeto desenvolvido para o trabalho artístico e institucional de **Zé Luiz do Candeeiro**.

A aplicação utiliza tecnologias modernas para apresentar sua trajetória, poesia, música e atuação na área da educação em uma experiência digital autoral e imersiva.
