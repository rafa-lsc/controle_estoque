# Controle de Estoque — API REST

API backend para gerenciamento de estoque, desenvolvida em Node.js com TypeScript. O sistema permite o cadastro e autenticação de usuários, gerenciamento de categorias e fornecedores, controle de produtos com upload de imagens e registro de vendas com baixa automática de estoque.


Esse projeto é realizado no curso "Crie uma API com NodeJs, TypeScript, Express, Prisma,Swagger", com autoria de Marcos Júnior Passarella Naves, disponível na udemy. 

---

## Tecnologias Utilizadas

- **Runtime & Linguagem:** Node.js (ES Modules) + TypeScript (`^7.0.2`), executado em desenvolvimento com `tsx` (`^4.23.15`)
- **Framework Web:** Express 
- **ORM & Banco de Dados:** Prisma  + PostgreSQL
- **Autenticação & Segurança:** `jsonwebtoken` e `bcryptjs`
- **Upload de Arquivos:** `multer` 


## Como Executar

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente (.env)
# DATABASE_URL="postgresql://..."
# JWT_SECRET="sua-chave-secreta"

# Rodar as migrações do banco
npx prisma migrate dev

# Iniciar em modo de desenvolvimento (porta 3333)
npm run dev
```

---

## Aprendizados

Esse projeto foi muito importante para revisar e aplicar de forma prática diversos conceitos importantes:
- **Arquitetura em Camadas:** Separação clara de responsabilidades no fluxo `Rota → Middleware → Controller → Service → Prisma`, mantendo regras de negócio isoladas da camada HTTP.
- **Autenticação com JWT:** Emissão de tokens no login, criptografia de senhas com `bcryptjs`, validação via middleware (`Authorization: Bearer <token>`) e extensão de tipos no Express (`Request.user_id`).
- **Modelagem Relacional com Prisma ORM:** Definição de entidades (`User`, `Category`, `Supplier`, `Product`, `Item`), chaves UUID, relacionamentos 1:N e versionamento de banco com migrations.
- **Upload de Arquivos:** Processamento de requisições `multipart/form-data` com `multer` e geração de nomes únicos com `crypto` para evitar sobrescrita.
- **Padronização de Rotas RESTful:** Uso de middlewares por rota, agrupamento por domínio e evolução para convenções RESTful (recursos no plural e identificação via parâmetros de rota `/:id`, como em `/suppliers/:id`).