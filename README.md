# Projeto Livre_Eline Pimentel

**ATENÇÃO: Texto em construção e formatação**

Projeto final do curso de Desenvolvimento Web em Back-End realizado pelo bootcamp da Reprograma em parceria com o M.I.N.As / Porto Digital.

![Logotipo com o nome do projeto](./images/logo3.png)

Banco de Dados que reúne profissionais negrxs de diversas áreas em um só lugar!

<h2>Documentação</h2>

Para este projeto rodar, você precisará:

**Programas instalados**


***Comandos de Inicialização***


<h2>Um pouco de história e contextualização</h2>

Sabe-se que história dos negros no Brasil é permeada por escravização de povos vindos do continente africano, estupro por meio de reprodução forçada e muito trabalho pesado não remunerado. Com a abolição da escravatura, os negros foram jogados nas ruas sem trabalho. Sem condições para viver, ocuparam as áreas marginalizadas das cidades. Durante muitos anos, esta parcela da população não teve condições para se profissionalizar e ocupar vagas de emprego melhores. Além do fato, de terem sido inferiorizados e discriminados.

Apesar de a mudança ser lenta, mediante tantos anos de história, mais negros estão conseguindo se qualificar. No entanto, ainda é difícil encontrar tais profissionais sem que se faça uma busca minuciosa. Neste sentido, objetiva-se com este banco de dados reunir o máximo de profissionais negros, facilitando o acesso aos diversos públicos e permitindo ampliar a divulgação de tais profissionais e seus trabalhos. 

<h2>Sobre a População Brasileira</h2>

O IBGE pesquisa a cor ou raça da população brasileira com base na autodeclaração. Ou seja, as pessoas são perguntadas sobre sua cor de acordo com as seguintes opções: branca, preta, parda, indígena ou amarela. De acordo com dados da Pesquisa Nacional por Amostra de Domicílios (PNAD) 2019, 42,7% dos brasileiros se declararam como brancos, 46,8% como pardos, 9,4% como pretos e 1,1% como amarelos ou indígenas.
 
<h2>Conhecendo as rotas da API</h2>

O banco de dados está rodando na porta 5002, para as rotas serem acessadas localmente, faz-se necessário usar o endereço: http://localhost:5002/, para acessar o conteúdo. Após a barra, é necessário acrescentar os caminhos do que se deseja acessar. 
Importante saber: É possível que em outra máquina a porta esteja sendo utilizada em outro aplicação. Basta alterar para outra como: 3000, 8000, 8080, 8083.

Caso queira saber como fechar uma porta em uso ou descobrir se ela está sendo utilizada, é possível através deste link: https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902


**Rotas/Métodos Principais** 
## CRUD Profissionais ##
---

| Verbo            | Método        | Recurso                | Descrição                                      |
| ------------     |------------   | ---------------------- | ------------------------------------------     |
| 1.POST           | createNew     | `/profissionais`       | Cadastrar novo  profissional                   |
| 2.GET            | selectAll     | `/profissionais`       | Retornar todos os profissionais                |
| 3.PUT            | update        | `/profissionais/:id`   | Substituir todas as informações de um registro |
| 4.DELETE         | delete        | `/profissionais/:id`   | Deletar um cadastro específico                 |

---

***Rotas/Métodos secundários***

---

| Verbo              | Método             | Recurso                | Descrição                                              |
| ------------       |------------        | ---------------------- | -----------------------------------------------------  |
| 1.GET              | selectById         | `/profissionais`       | Retornar um profissional por id                        |
| 2.GET              | selectByName       | `/profissionais`       | Retornar um profissional por nome                      |
| 3.GET              | selectByAreaSubarea| `/profissionais/:id`   | Retornar os profissionais por área e subárea de atuação|
| 4.GET              | selectByAddress    | `/profissionais/:id`   | Retornar um profissional por local de atuação          |
| 5.PATCH            | replaceOne         | `/profissionais/:id`   | Atualizar um campo específico do cadastro              |
---

**Rotas/Métodos Principais** 
## CRUD Administradoras ##

| Verbo              | Método        | Recurso                | Descrição                               |
| ------------       |------------   | ---------------------- | -------------------------------------   |
| 1.GET              | createNew     | `/administradoras`     | Retornar todos os profissionais         |
| 2.POST             | selectAll     | `/administradoras`     | Cadastrar novo profissional             |
| 3.PUT              | update        | `/administradoras/:id` | Atualizar um cadastro específico        |
| 4.DELETE           | delete        | `/profissionais/:id`   | Deletar um cadastro específico          |


<h2></h2>

Para gerar a chave privada, usar o site: https://travistidwell.com/jsencrypt/demo/

### Referências:

1. Sobre a População Brasileira. https://educa.ibge.gov.br/jovens/conheca-o-brasil/populacao/18319-cor-ou-raca.html
2. Estudos sobre cor e raça. Disponível em: https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/14057-asi-ibge-divulga-resultados-de-estudo-sobre-cor-ou-raca
3. Com identificar uma porta HTTP. Disponível em: https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902.




