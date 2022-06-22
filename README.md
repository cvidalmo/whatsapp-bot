/**********************************************************************************************************************
   AUTOR........: Carlos Vidal.
   CONTATOS.....: (85) 9 8402-3820 - cvidalmo@gmail.com.
   DATA.........: Setembro de 2020.
   DESCRIÇÂO....: Sistema IA - Sistema de Inteligência Artificial para WhatsApp.
   TECNOLOGIAS..: WhatsApp, JavaScript, NodeJS, Puppeteer, venom-bot.
***********************************************************************************************************************
   COMO FUNCIONA:
   --------------
   Teremos no Sistema IA, os seguintes WhatsApp: da Empresa, do Coordenador, dos Atendentes, dos contatos Clientes e dos
   contatos NÃO Clientes.

   A finalidade é que o atendimento seja feito para os Clientes CADASTRADOS no WhatsApp da Empresa. As demais mensagens, 
   de contatos que NÃO sejam Clientes, serão direcionadas para o WhatsApp do Coordenador.

   Deve-se criar uma sigla que identifique a Empresa, essa sigla, deve ser usada como um prefixo, colocada na frente do 
   nome de todos os contatos que sejam Clientes. Ela pode fazer ou não sentido.
   Exemplo: SRI (Sistema de Rastreamento Independente) ou XXX, se o nome do Cliente for Carlos Vidal, passará a ser 
           'SRI Carlos Vidal' ou 'XXX Caros Vidal'.

   Deve ser criado um grupo no WhatsApp da Empresa e adicionado a esse grupo o WhatsApp do Coordenador e dos Atendentes. 
   O nome desse grupo não tem relevância para o sistema, vamos chamar aqui de Grupo IA.

   Para iniciar o Sistena IA, o Coordenador deve enviar uma mensagem para o Grupo IA, com a frase 'iniciar ia' ou 
   'iniciando ia', essa frase pode ter letras maiúsculas ou minúsculas.
   
   Com o Sistema IA ativo, quando um Cliente enviar qualquer mensagem para o WhatsApp da Empresa, esse Cliente receberá 
   uma saudação de boas vindas e a mensagem será encaminhada para o Grupo IA. Nessa mensagem tem o número do WhatsApp do 
   Cliente e seu nome.

   O atendente que ficará responsável para atender o Cliente, deve responder a essa mensagem no Grupo IA, pode fazer isso 
   de duas forma, a primeira é marcando a mensagem do Cliente e selecionando a opção 'Responder', outra forma é copiando 
   o número do Cliente, colando na primeira linha de sua mensagem e escrever começa sua mensagem na SEGUNDA linha.

   Ao responder a mensagem do Cliente no Grupo IA, o Sistema IA, irá enviar essa mensagem para o Cliente e colocará o nome 
   do Atendente no topo da mensagem, isso para o Cliente saber quem está lhe atendendo.

   Como a mensagem está sendo enviada para o grupo, todos que estão no grupo poderão visualizá-la.
   
   Caso chegue uma mensagem de um NÃO Cliente, esse contato receberá uma mensagem de boas vindas e sua mensagem será 
   encaminhada somente para o WhatsApp do Coordenador, esse se comunicará com o NÃO Cliente, da mesma forma que o 
   Atendente, respondendo a sua mensagem ou copiando e colando seu número na primeira linha de sua mensagem de resposta e 
   começando a mensagem a ser enviada na SEGUNDA linha. Essas mensagens trocadas entre esse NÃO Cliente, NÃO será enviada 
   para o Grupo IA, então os Atendentes NÃO conseguirão visualizá-las.

   Caso o Coordenador queira que os Atendentes respondam a um NÃO Cliente, ele deve incluir ou alterar o nome do NÃO 
   Cliente, no WhatsApp da Empresa, colocando o prefixo (sigla) que foi criado.

   Para parar o Sitema IA, o Coordenado deve passar a frase 'parar ia' ou 'parando ia', no Grupo IA.

   O sistema pode trabalhar com mais de uma equipe de atendimento, basta que seja criado mais de um grupo no WhatsApp da 
   Emoresa, cada grupo com uma equipe, o Coordenador inicia o grupo que desejar, enviando no grupo a frase de 'iniciar ia'. 
   Nessa versão, o controle é somente de um grupo por vez, ou seja, antes de iniciar um grupo, o Coordenador deverá parar
   o anterior com a frase 'parar ia'.

   CONFIGURAÇÕES NO WHATSAPP:
   --------------------------
   .O WhatsaApp NÃO deve ser o BUSINESS.
   .No celula, que tenha o WhatsApp da empresa, crie um novo grupo e adicione a esse grupo os WhatsApps dos Atendentes que 
    receberão as mensagens e o WhatsApp do Coordenador. 
   .Para cada novo Atendente que entrar na empresa, você deve incluí-lo nesse grupo. 
   .Para cada Atendente que sair da empresa, você deve excluí-lo desse grupo.
   .Renomear TODOS os seus CLIENTES, somente os Clientes, para que seu nome inicie com uma sigla. Essa sigla PODE ou NÃO 
    fazer sentido.
    Exemplo: SRI Vanessa (SRI de Sistema de Rastreamento Independente), 
             LU Carlos.Diego (LU de Livraria União),
             ABCD Carla.Andressa (ABCD de Escola Bom Pastor),
             XXX Ian Alves (XXX de Cantina Fogo na Brasa),
             XPTO Carlos Felipe (XPTO de Qualquer Coisa).

   INSTALAÇÃO NO COMPUTADOR: 
   -------------------------
   1.Instale o NodeJS: https://nodejs.org/pt-br/ ou https://nodejs.org/en/. 
     Se não sabe instalar, assista ao vídeo:https://www.youtube.com/watch?v=7iSylg2UvU0.
   2.Crie uma pasta onde será guardado todos os arquivos do Sistema IA.
   3.Abra a pasta e no local onde tem o caminho da pasta, digite: cmd e dê um <ENTER>. Será aberto um prompt de comando, já
     nessa pasta ou se preferir, abra um prompt de comando e entre na pasta com o comando: cd <local onde está a pasta>.
   4.Denro desta pasta, crie os arquivos iniciais com o comando: npm init -y
   5.Ainda dentro da pasta, instale o Puppeteer com o comando: npm i puppeteer
   6.Instale também, nessa pasta, o venom-bot com o comando: npm i --save venom-bot
     Mais informações sobre o venom_bot no link: https://github.com/orkestral/venom
   7.Copie esse arquivo 'index.js' para a pasta criada.
   8.Execute: node index.js (ANTES DE EXECUTAR FAÇA AS ALTERAÇÕES LISTADAS BAIXO, NO ARQUIVO index.js).
     Ao executar pela primeira vez, será mostrado um código QR, para ser feito o emparelhamento com o WhatsApp da Empresa. 
     Com o celular da empresa, clique nos 3 pontinhos e na opção WhatsApp Web, clique no botão de adicionar (+) e leia com 
     a câmera o código QR do computador.

   ALTERAÇÕES NO ARQUIVO index.js:
   -------------------------------
   1.Na constante 'NOME_EMPRESA' (linha: 113), coloque um nome com uma ou duas palavras, que identifique a empresa, Será 
     usado no inicio das mensagens de retorno para o Cliente.
   2.Na variável 'contatosDoGrupoIA' (linha: 135), coloque os ID's de todos os Atendentes do grupo criado, separados por 
     virgula. O ID, é formado pelo número do celular com o código do país e DDD, SEM o número '9' + '@c.us'.
     Exemplo: 55 85 8402-3820 => 558584023820@c.us
              55 85 9699-6983 => 558596996983@c.us
     Na variável ficaria assim: "558584023820@c.us,558596996983@c.us,". 
   3.Na constante 'ID_COORDENADOR' (linha: 115), colocar o ID do coordenador da empresa, esse ID também deve fazer parte do 
     grupo criado no WhatsApp da Empresa.
   4.Na constante 'SIGLA_EMPRESA' (linha: 116), criar um prefixo que deve ser usado antes do nome dos contatos, para que o 
     Sistema IA identifique-os como Clientes.
****************************************************************************************************************************/
