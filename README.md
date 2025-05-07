# 🧩 Configuração personalizada para Biome

Este pacote fornece uma configuração personalizada para o Biome, com foco em projetos que utilizam JavaScript, TypeScript e JSON. Ele define regras de formatação, linting e organização de imports com uma padronização consistente para ambientes de desenvolvimento modernos.

# 🚀 Como usar
1. Instale o Biome (caso ainda não tenha)
```bash
pnpm i -d @biomejs/biome
#yarn add -d @biomejs/biome
#npm i -d @biomejs/biome
```

2. Execute o comando de geração do arquivo de configuração do Biome (caso ainda não tenha)
```bash
pnpm biome init
#yarn biome init
#npx @biomejs/biome init
```

3. Instale o pacote como dependência de desenvolvimento
```bash
pnpm i -d @lbfrancisco/biome-config
#yarn add -d @lbfrancisco/biome-config
#npm i -d @lbfrancisco/biome-config
```

4. Adicione a configuração ao seu projeto
```json
// biome.json 
{
	"$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["@lbfrancisco/biome-config"]
}
```

5. Configure os scripts para formatação
```json
// package.json
{
  "scripts": {
    "format": "biome format . --write",
    "lint": "biome lint .",
    "lint:fix": "npm run lint -- --write",
  }
}
```