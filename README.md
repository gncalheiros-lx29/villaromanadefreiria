# villaromanadefreiria.com

Site estático da Villa Romana de Freiria e do PPVRF (Plano de Pormenor do Espaço de Reestruturação Urbanística e Valorização Patrimonial da Área Envolvente à Villa Romana de Freiria), São Domingos de Rana, Cascais.

## Estrutura

| Caminho | Conteúdo | Acesso |
|---|---|---|
| `/` | Página da Villa: história, mosaico, Plano, parque, via estruturante, Rua da Casa Senhorial, fontes | público |
| `/modelo-3d/` | Modelo 3D dos 17 lotes da UE4 (tipologias, quadro sinótico, impermeabilização, visita, cinema) | público |
| `/tipologias/` | Três tipos de moradia com plantas cotadas | público |
| `/tipo-a/` | Sólido da moradia Tipo A | público |
| `/privado/` | Dossier: modelo completo da Rua da Casa Senhorial (CMC Follow-up, DIA, contratos, 63 desenhos ENGISTEP), versão para o avaliador, modelo v22, plantas interactivas, wiki, documentos, fotografias | Basic Auth |

## Alojamento (Vercel)

Projecto estático sem build (framework preset "Other", output directory `.`). O ficheiro `middleware.js` corre no Edge da Vercel e exige Basic Auth em `/privado/**`.

Variáveis de ambiente a definir no projecto Vercel (Settings → Environment Variables, Production):

- `PRIVADO_PASS`: password da área reservada (obrigatória; sem ela a área fica fechada).
- `PRIVADO_USER`: utilizador (opcional; por omissão `ppvrf`).

Depois de alterar variáveis, fazer *Redeploy*.

## DNS (GoDaddy)

Em Vercel → Settings → Domains adicionar `villaromanadefreiria.com` e `www.villaromanadefreiria.com`; a Vercel indica os registos exactos (tipicamente `A @ 76.76.21.21` e `CNAME www cname.vercel-dns.com`). Confirmar sempre os valores no painel da Vercel antes de os introduzir no GoDaddy. Desligar o GoDaddy Website Builder do domínio para os registos não serem sobrescritos.

## Como actualizar

Os ficheiros HTML são gerados a partir dos artifacts do claude.ai e da pasta PPVRF pelo script `build.py` (fora deste repositório). Editar e fazer commit; a Vercel publica em cada push para `main`.

## Blender MCP (Claude Code)

O ficheiro `.mcp.json` regista o servidor MCP `blender` ([ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp), pacote PyPI `mcp-for-blender`) com âmbito de projecto; é o equivalente a `claude mcp add --scope project blender -- uvx mcp-for-blender`. Ao abrir o repositório no Claude Code, este pede para aprovar o servidor.

Requisitos na máquina local:

- `uv` instalado (fornece `uvx`).
- Blender aberto com o add-on `addon.py` do repositório acima instalado e activo (painel lateral BlenderMCP → *Connect to Claude*). O servidor liga-se por socket a `localhost:9876` (alterável com `BLENDER_HOST` e `BLENDER_PORT`).

O servidor não funciona nas sessões cloud do Claude Code, porque o Blender tem de correr na mesma máquina. O `.vercelignore` impede que o `.mcp.json` seja publicado no site.

## Direitos

As 20 fotografias em `/privado/fotos/` são de terceiros sem licença de reutilização confirmada; não devem sair da área reservada. Os desenhos ENGISTEP, a DIA e os contratos são documentos do processo do PPVRF.
