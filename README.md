# WebStore Potions

Sistema web para gerenciamento e visualização de poções mágicas, desenvolvido com HTML, CSS, JavaScript, Node.js, Express, Sequelize e SQLite.

## Estrutura do Projeto

```
webstore-potions/
├─ backend/
├─ frontend/
└─ README.md
```

* **Frontend:** páginas da loja e painel administrativo.
* **Backend:** API REST responsável pelo gerenciamento das poções e upload de imagens.
* **Banco de Dados:** SQLite utilizando Sequelize.

---

# Requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm (geralmente já instalado junto com o Node.js)

---

# Instalação

Entre na pasta do backend:

```bash
cd backend
```

Instale todas as dependências do projeto:

```bash
npm install
```

As principais bibliotecas utilizadas são:

| Biblioteca | Finalidade                                                        |
| ---------- | ----------------------------------------------------------------- |
| express    | Criação do servidor web e da API REST                             |
| sequelize  | ORM utilizado para comunicação com o banco de dados               |
| sqlite3    | Driver do SQLite utilizado pelo Sequelize                         |
| multer     | Upload de arquivos (imagens das poções)                           |
| cors       | Permite comunicação entre frontend e backend em portas diferentes |

Caso seja necessário instalar manualmente alguma dependência, utilize:

```bash
npm install express sequelize sqlite3 multer cors
```


---

# Executando o Servidor

Na pasta `backend`, execute:

```bash
node index.js
```

O servidor será iniciado na porta configurada no projeto (localhost:3000).

---

# Executando o Frontend

Abra a pasta `frontend` utilizando uma extensão de servidor local, como o **Live Server** do VS Code.

Ao iniciar o servidor local, a página principal poderá ser acessada por uma URL semelhante a:

```
http://127.0.0.1:5500/index.html
```

ou

```
http://localhost:5500/index.html
```

---

# Páginas Disponíveis

## Loja (Página Pública)

Acesso:

```
http://localhost:5500/index.html
```

Nesta página são exibidas:

* Informações da loja;
* Histórico da loja;
* Catálogo de poções disponíveis;
* Informações de contato (simulação).

As poções são carregadas dinamicamente através da API.

---

## Painel Administrativo

Acesso:

```
http://localhost:5500/admin.html
```

ou alterando manualmente a URL da página pública para:

```
.../admin.html
```

Nesta página é possível:

* Cadastrar novas poções;
* Visualizar o estoque atual;
* Remover poções cadastradas.

---

# Banco de Dados

O projeto foi desenvolvido utilizando SQLite através do Sequelize.

Por padrão, o sistema pode ser configurado para funcionar em modo memória:

```javascript
storage: ":memory:"
```

Nesse modo, todos os dados são apagados quando o servidor é encerrado.

---

## Banco Persistente

O projeto inclui um arquivo:

```
backend/database/database.sqlite
```

contendo algumas poções já cadastradas.

Para utilizar esse banco persistente, altere a configuração do Sequelize em:

```
backend/models/dbconfig.js
```

Substituindo:

```javascript
storage: ":memory:"
```

por:

```javascript
storage: "./database/database.sqlite"
```

Assim os dados permanecerão salvos entre diferentes execuções do servidor.

---

# Upload de Imagens

As imagens enviadas pelo painel administrativo são armazenadas na pasta:

```
backend/uploads/
```

O caminho da imagem é salvo no banco de dados e utilizado posteriormente para exibição no catálogo da loja.

---

# Observações

* O funcionamento das páginas é intuitivo e não requer configuração adicional após a inicialização do servidor.
* A integração entre frontend, backend e banco de dados está implementada e funcional.
* As operações de cadastro, listagem e remoção de poções são realizadas através da API REST desenvolvida para o projeto.
