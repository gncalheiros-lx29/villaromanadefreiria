# Analise do Regulamento do PPVRF: lacunas, inconsistencias e plano de acao

Data: 10-07-2026. Fonte primaria: transcricao integral do DR 2.a serie n.o 157, 13-08-2010, Aviso n.o 16203/2010 (documento do projeto "DR Aprovacao do PP de Freiria_13082010.md"), lida na integra: Artigos 1.o a 48.o, Quadro Anexo I e Quadro Anexo III. O Quadro Anexo II (valores parciais por parcela) NAO esta transcrito no documento; e uma imagem no DR original e nao foi verificavel nesta analise.

Correcao factual imediata: o Regulamento tem 48 artigos, nao 35 como consta na wiki do projeto (plano-e-regulamento.md). Corrigido na wiki nesta data.

## P0: Bloqueiam pagamentos e a Certidao do Plano

### 1. Contradicao de sinal no Art. 37.o (n.o 10 vs n.o 11), confirmada no texto literal

- Art. 37.o n.o 10 (formula transitoria ate haver regulamento municipal): V = [(EA - EC) / IMU] x P.
- Art. 37.o n.o 11: V positivo corresponde ao montante a cobrar pelo municipio por EXCESSO de edificabilidade; V negativo corresponde a compensacao devida pelo Fundo ao proprietario com edificabilidade em FALTA.
- Contradicao: EA - EC > 0 significa EC inferior a EA, ou seja, edificabilidade em FALTA (deveria receber), mas o n.o 11 trata o valor positivo como excesso (a pagar). A literalidade dos dois numeros e incompativel.
- O Quadro Anexo III resolve na pratica: define Comp.Equiv > 0 como excesso (a cobrar pelo municipio) e Comp.Equiv < 0 como falta (devido pelo Fundo). A leitura coerente do sistema e aplicar a formula com o sinal do Anexo III, isto e, V = [Comp.Equiv / IMU] x P, com Comp.Equiv aferido apos cedencia/atribuicao de parcelas (ECaf vs EAt).
- Verificacao numerica (P = 450,80 EUR/m2, IMU = 0,34): art. 1297 Comp.Equiv -89,60 da V = -118.799 EUR (a receber); art. 1322 Comp.Equiv -726,87 da V = -963.744 EUR (a receber); art. 1321 Comp.Equiv +521,40 da V = +691.315 EUR (a pagar). Coerente com os modelos xlsx do projeto (diferencas de centimos por arredondamento do Comp.Equiv).
- Acao: pedido de despacho interpretativo a CMC (minuta preparada, ver Entregaveis). Sem ele, qualquer liquidacao do Fundo e juridicamente contestavel.

### 2. Regulamento municipal do Fundo de Compensacao (Art. 41.o)

O Art. 41.o (ultimo paragrafo) obriga o Municipio a submeter a Assembleia Municipal, no prazo de 6 meses apos a aprovacao do Plano (ou seja, ate aprox. fevereiro de 2011), os regulamentos do Fundo de Compensacao e da operacionalidade da perequacao. Nao existe no projeto qualquer evidencia de que esses regulamentos existam. Nao consigo confirmar a sua existencia; e um facto a apurar junto da CMC/DRU. Consequencia se nao existirem: os Arts. 37.o n.os 6 e 8, 38.o n.os 4 a 7 e 39.o n.o 4 remetem para regulamento inexistente e o regime aplicavel e o transitorio (Regulamento Municipal de Compensacao, por remissao dos Arts. 37.o n.o 9 e 38.o n.o 7).

### 3. Preco P: a base regulamentar e o quadro I do Regulamento Municipal de Compensacao

O Art. 37.o n.o 9 define P como o produto do salario minimo nacional pelos indices publicados do quadro I anexo ao Regulamento Municipal de Compensacao de Cascais. O calculo em uso no projeto (P = 920,00 x 1,40 x 0,35 = 450,80 EUR/m2, SMN 2026 verificado no DL 139/2025) assume CL = 1,40 e fator 0,35, valores que NAO constam do Regulamento do PPVRF e que nao consigo confirmar sem o quadro I do RMC em vigor. Enquanto nao for confirmado, todos os valores em euros do modelo de perequacao sao provisorios. Acao: obter da CMC/DRU o RMC vigente e o quadro I aplicavel a zona.

## P1: Defeitos de redacao do Regulamento a tratar por despacho interpretativo ou declaracao de retificacao

### 4. Referencias cruzadas erradas ao "artigo 31.o"

Tres disposicoes remetem a aquisicao municipal de solos RAN/REN para o "artigo 31.o do regulamento do Plano": a definicao de CC no Art. 4.o, o Art. 38.o n.o 3 e as definicoes de SC e CC no Quadro Anexo III. Ora o Art. 31.o trata do emparcelamento por interesse publico; o regime de aquisicao municipal com o fator 0,10 e o Art. 40.o. Padrao tipico de renumeracao nao propagada na versao final. Nota: a wiki do projeto reproduzia o erro ("Art. 31: aquisicoes de propriedade pela CMC"); corrigido nesta data.

### 5. Art. 41.o alinea d1): "ICM" onde deveria ler-se "IMU"

A alinea d1) manda pagar compensacoes a "proprietarios com edificabilidade em falta relativamente ao ICM fixado". Edificabilidade afere-se pelo IMU (Art. 37.o); o ICM respeita a cedencias (Art. 38.o). As alineas a), b) e d2) usam os indices corretamente, o que confirma o lapso.

### 6. Art. 29.o: erro de data e portaria substituida

- Cita "Lei n.o 91/95, de 25 de Setembro"; a Lei 91/95 (AUGI) e de 2 de Setembro, como o proprio Art. 28.o cita corretamente.
- Cita a Portaria 1136/2001 para dimensionamento de estacionamento; essa portaria foi substituida pela Portaria 216-B/2008, de 3 de marco, ANTES da publicacao do Plano (facto verificado; a 216-B/2008 foi entretanto alterada, incluindo pela Portaria 75/2024). Confirmar com a CMC qual o referencial de dimensionamento aplicado hoje na apreciacao dos SPO.

### 7. Inconsistencias numericas no Quadro Anexo I (verificadas por calculo nesta data)

- IMU impresso "0,339..." vs 0,34 fixado no Art. 37.o n.o 1. Recalculo: (164.000,17 - 5.944,00) / 465.750,51 = 0,33936.
- Area com capacidade aedificandi impressa 465.750,51 m2; o calculo pela propria definicao (585.230,00 - 113.078,02 - 6.185,97) da 465.966,01 m2 (delta 215,50 m2). O parse do Quadro 14.3.6 soma 466.180,13 m2 (delta +429,62 m2 face ao impresso). Tres valores proximos mas nao coincidentes; a fonte canonica para execucao deve ser fixada com a CMC.
- ICM: recalculo 258.636,04 / (158.056,17 - 7.030,61) = 1,7125 vs 1,70 fixado no Art. 38.o n.o 1. A diferenca de indice usado nas liquidacoes deve ser a do valor regulamentar fixado (1,70), salvo interpretacao em contrario da CMC.
- Sigla "IMC" no Anexo I vs "ICM" no articulado. Densidades com arredondamentos ligeiros (17,31 recalculado vs 17,29 impresso; 48,47 vs 48,43). Sem impacto material, mas a registar.

## P2: Execucao e conformidade temporal

### 8. Art. 28.o: prazos expirados desde agosto de 2013

O regime transitorio de manutencao de construcoes desconformes era de 3 anos apos a entrada em vigor (13-08-2010), prorrogavel uma unica vez. Expirou ha mais de uma decada. O estatuto atual das construcoes nao legalizadas nas 6 AUGIs precisa de enquadramento formal pela CMC antes da instrucao final dos SPO e da certidao; caso contrario ha risco de vicio na emissao.

### 9. Art. 6.o (paragrafo final): sequenciamento obrigatorio

As obras de construcao previstas no Plano so podem iniciar-se apos o termino das obras de regularizacao de cursos de agua e retencao de cheias do estudo hidrologico. Ou seja, BR1 a BR4 e a regularizacao sao pre-condicao regulamentar das obras nas UE, nao apenas condicao da DIA. Reforca o caminho critico: visto do Tribunal de Contas + TURH + elementos pre-execucao da DIA antes de qualquer obra de edificacao nas UE.

### 10. Art. 44.o: base regulamentar da exigencia de legitimacao

O pedido de certidao para efeitos de registo predial deve ser subscrito pelos proprietarios de cada UE ou pela Comissao de Administracao que os represente, e, havendo obras de urbanizacao, precedido da aprovacao municipal dos respetivos projetos. A exigencia da CMC de 25-11-2025 (9 documentos de legitimacao) decorre diretamente daqui: UE7 e UE9 sem representacao legitimada bloqueiam a certidao nos termos do proprio Regulamento.

### 11. Referencias legislativas desatualizadas

O Art. 44.o assenta no art. 92.o-A do DL 380/99 (redacao do DL 316/2007), regime revogado pelo DL 80/2015 (RJIGT). O artigo correspondente no RJIGT vigente nao foi confirmado nesta analise; deve ser identificado pelo apoio juridico antes de formalizar o requerimento da certidao. O estado atual do regime AUGI (Lei 91/95, com prorrogacoes sucessivas de vigencia) tambem deve ser confirmado.

### 12. Oportunidade nao aproveitada: Art. 42.o (reducao de taxas)

Reducao de 20% nas taxas para operacoes ligadas a turismo, servicos ou ambiente consideradas prioritarias, e ate 30% para operacoes com reducao de consumo energetico ou de agua. Nenhum documento de execucao do projeto refere o uso destes incentivos. Potencial poupanca real nos licenciamentos das 9 UE; incluir nos SPO onde aplicavel.

## P3: Higiene documental da pasta do projeto

- Duplicados (aprox. 57 MB recuperaveis): "zilyjQOn" e um zip que contem exatamente o mesmo PDF das atas ASDL (md5 identico ao conteudo de PPVRF-ASDL-ATAS-...zip e ao PDF solto); cada um dos 2 zips duplica o PDF solto correspondente; existem ainda 2 derivados (150dpi e compressed) do mesmo PDF ASDL. Sugestao: manter 1 original de cada e eliminar o resto (nao eliminei nada sem autorizacao).
- 11 ficheiros de lock orfaos (.~lock.*.xlsx#) do LibreOffice na pasta Perequacao_UE1-UE9; podem ser apagados.
- Quadro Anexo II do DR nao esta em formato tabular no projeto; a unica fonte tabular da perequacao e o Quadro 14.3.6 (Vol. II). Se o Anexo II divergir do 14.3.6, prevalece o que a CMC determinar; recomenda-se extrair/verificar o Anexo II do PDF original quando disponivel.
- Wiki corrigida nesta data: numero de artigos (48) e referencia Art. 31 -> Art. 40.

## Plano de acao priorizado

| # | Acao | Referencia | Prioridade | Proximo passo |
|---|------|-----------|------------|---------------|
| 1 | Pedido de despacho interpretativo a CMC (sinal de V; refs. art. 31 vs 40; Art. 41 d1; regime do Art. 28) | Arts. 37, 38, 40, 41, 4, 28 | P0 | Rever e enviar a minuta preparada |
| 2 | Confirmar existencia dos regulamentos do Art. 41 (Fundo de Compensacao) | Art. 41 | P0 | Pedido formal a CMC/DRU no mesmo oficio |
| 3 | Obter RMC vigente + quadro I; confirmar CL = 1,40 e fator 0,35 do P | Art. 37 n.o 9 | P0 | Pedido a CMC/DRU; atualizar xlsx se P mudar |
| 4 | Confirmar referencial de estacionamento (216-B/2008 na redacao atual vs PDM) | Art. 29 | P1 | Questionar DRU na proxima reuniao |
| 5 | Mapear art. 92.o-A do DL 380/99 para o RJIGT vigente antes do requerimento da certidao | Art. 44 | P1 | Apoio juridico |
| 6 | Resolver legitimacao UE7/UE9 (exigencia com base regulamentar no Art. 44) | Art. 44 | P0 (ja em curso) | Segunda reuniao na Junta |
| 7 | Incluir pedidos de reducao de taxas (Art. 42) nos licenciamentos elegiveis | Art. 42 | P2 | Avaliar elegibilidade por UE |
| 8 | Limpeza da pasta (duplicados, locks) e extracao do Anexo II | n/a | P3 | Mediante autorizacao do utilizador |

## Entregaveis desta analise

1. Este relatorio: Analise_Regulamento_PPVRF_10-07-2026.md
2. Minuta de oficio a CMC: Minuta_Despacho_Interpretativo_CMC.docx
3. Correcoes na wiki: plano-e-regulamento.md e perequacao.md

## Limitacoes e confianca

- O Quadro Anexo II nao foi verificado (nao transcrito). Confianca alta nas citacoes do articulado (texto lido na integra na transcricao do projeto); a transcricao pode conter erros de OCR (ex.: "IMPERMIABILIDADE", "ARQUIOLOGICA" no Anexo I) e, em caso de duvida, prevalece o PDF/DR original.
- Nao consigo confirmar: existencia do regulamento do Fundo de Compensacao; CL = 1,40 e fator 0,35; artigo do RJIGT vigente correspondente ao 92.o-A; estado atual de vigencia do regime AUGI.
- Verificado por fonte externa: Portaria 216-B/2008 substituiu a Portaria 1136/2001 (2008, antes da publicacao do Plano).
