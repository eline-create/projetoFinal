# Projeto Livre_Eline Pimentel

Projeto final do curso de Desenvolvimento Web em Back-End realizado pelo bootcamp da Reprograma em parceria com o M.I.N.As / Porto Digital.

**ATENÇÃO: Texto em construção e formatação.**

![Logotipo com o nome do projeto](./images/logo2.png)

Banco de Dados que reúne profissionais negrxs de diversas áreas em um só lugar!

<h2>Um pouco de história e contextualização</h2>

Sabe-se que história dos negros no Brasil é permeada por escravização de povos vindos do continente africano, estupro por meio de reprodução forçada e muito trabalho pesado não remunerado. Com a abolição da escravatura, os negros foram jogados nas ruas sem trabalho. Sem condições para viver, ocuparam as áreas marginalizadas das cidades. Durante muitos anos, esta parcela da população não teve condições para se profissionalizar e ocupar vagas de emprego melhores. Além do fato, de terem sido inferiorizados e discriminados.

Apesar de a mudança ser lenta, mediante tantos anos de história, mais negros estão conseguindo se qualificar. No entanto, ainda é difícil encontrar tais profissionais sem que se faça uma busca minuciosa. Neste sentido, objetiva-se com este banco de dados reunir o máximo de profissionais negros, facilitando o acesso aos diversos públicos e permitindo ampliar a divulgação de tais profissionais e seus trabalhos. 

<h2>Sobre a População Brasileira</h2>

O IBGE pesquisa a cor ou raça da população brasileira com base na autodeclaração. Ou seja, as pessoas são perguntadas sobre sua cor de acordo com as seguintes opções: branca, preta, parda, indígena ou amarela. De acordo com dados da Pesquisa Nacional por Amostra de Domicílios (PNAD) 2019, 42,7% dos brasileiros se declararam como brancos, 46,8% como pardos, 9,4% como pretos e 1,1% como amarelos ou indígenas.
 
<h2>Conhecendo as rotas da API</h2>

O banco de dados está rodando na porta 8080, para as rotas serem acessadas localmente, faz-se necessário usar o endereço: http://localhost:8080/, para acessar o conteúdo. Após a barra, é necessário acrescentar os caminhos do que se deseja acessar. Importante saber: É possível que em outra máquina a porta esteja sendo utilizada em outro aplicação. Basta alterar para outra como: 3000, 8000, 8083.

Caso queira saber como fechar uma porta em uso ou descobrir se ela está sendo utilizada, é possível através deste link: https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902

**Rotas/Métodos Principais**

1. CreateNew(POST) - /blacksAction – Adicionar um novo profissional;
2. ReadAll(GET) - /blacksAction – Listar todos os profissionais;
3. UpdateBlack(PACTH) - /blacksAction/:name – Atualizar algum campo do registro por nome;
4. Delete(DELETE)  - /:id - Remover um profissional através de seu nome.

***Rotas/Métodos secundários***

1.GetById(GET) - /blacksAction/:id – Listar os profissionais pelo id;
2.GetByGenre(GET) - /blacksAction/:genre – Listar os profissionais cadastrados a partir do gênero;
3.GetByArea(GET) - /blacksAction/:área – Listar os profissionais por área de atuação;
4.Replace (PUT) - /blacksAction/:id – Substituir todas as informações de um registro pelo id.

<h2></h2>



### Referências:

1. Sobre a População Brasileira. https://educa.ibge.gov.br/jovens/conheca-o-brasil/populacao/18319-cor-ou-raca.html
2. Estudos sobre cor e raça. Disponível em: https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/14057-asi-ibge-divulga-resultados-de-estudo-sobre-cor-ou-raca
3. Com identificar uma porta HTTP. Disponível em: https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902.




