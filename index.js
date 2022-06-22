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

const { constants } = require('buffer');
const venom = require('venom-bot');

venom.create()
   .then((client) => start(client))
   .catch((erro) => { console.log(erro); });

var debugGeral = false;
var debugContato = false;
var menuGeral = false;
var menuContato = false;

const NOME_EMPRESA = "La Cerbo";  //Nome da empresa.
let ID_GRUPO_IA = "";  //Será preenchido automaticamente, após receber a mensagem de 'iniciar ia'.;
const ID_COORDENADOR = "558584023820@c.us"; 
const SIGLA_EMPRESA = "SRI ";  //Sistema de Rastreamento Independente.
const TAMANHO_SIGLA = SIGLA_EMPRESA.length;
const TEMPO_OCIOSO = 60;  //Em minutos. Tempo que se não houver nenhuma interação com o contao, reinicia um novo ciclo.

/* constantes que serão usadas somente para o Array 'listaDeContatos'. */
const ID_CONTATO = 0;
const NOME_CONTATO = 1;  
const EH_CLIENTE = 2;
const DATA_ATUAL = 3;
const NIVEL_MENU = 4;
const OPCAO_MENU = 5;
const DEBUG_CONTATO = 6;
const MENU_CONTATO = 7;

const FRASES_INICIAR = "iniciar ia, iniciando ia,";  //Aqui poderão ser incluídas diversas frase.
const FRASES_PARAR = "parar ia, parando ia,";        //Para iniciar e parar o Sistema IA.

function start(client) {
   /* TO DO: Pegará do 'Grupo IA' após ele ser identificado. Será usada a função 'await client.getGroupMembersIds(ID_GRUPO_IA)'. */
   let contatosDoGrupoIA = "558586500161@c.us,558596996983@c.us,558585053854@c.us,558581042320@c.us,558584023820@c.us,";
   let menuAtivo = (menuGeral || menuContato);
   let debugAtivo = (debugGeral || debugContato);  //Irá trabalhar assim, pegando sempre o que estiver 'true'.
   let saudacao = ", olá!"; 
   let dataHora = new Date();
   let horaAtual = dataHora.getHours();  // 0-23. 
   let ehCliente = false;
   let nomeContato = "Usuário inicial";
   let idContato = "123456789012@c.us";
   let nivelMenu = -1;  
   let opcaoMenu = 0; 

   var listaDeContatos = [];  //Array para guarda informações dos contatos.
   /* inclue um cliente para o Array não ficar vazio. */
   listaDeContatos.push([idContato, nomeContato, ehCliente, dataHora, nivelMenu, opcaoMenu, debugContato, menuContato]);  

   /* Evento que é disparado quando chega uma nova mensagem. */
   client.onMessage((message) => {
      /* Para iniciar o processo, basta que o coordenador passe uma mensagem no Grupo IA da empresa com uma das frases abaixo: 
      'Iniciar IA' ou 'Iniciando IA' = Para INICIAR o processo e 
      'Parar IA' ou 'Parando IA' = Para PARAR o processo. */
      if (message.isGroupMsg === true && message.isMedia === false && message.isMMS === false) {
         if (ID_GRUPO_IA.length == 0 && message.author == ID_COORDENADOR && 
            FRASES_INICIAR.indexOf(message.body.toLowerCase()) > -1) {
            ID_GRUPO_IA = message.from.toString();
            //const objIdContatosGrupo = pegarIdsContatosDoGrupoIA(ID_GRUPO_IA);  //TO DO:
            const mensagemAoIniciarIA = "*Sistema IA iniciado com sucesso.*\nA partir desse momento todos participantes do Grupo IA, estão habilitados a receberem as mensagens enviadas de nossos clientes.\n\nÉ importante lembrar que, para as mensagens chegarem aos clientes, o colaborador deve responder a mensagem do cliente ou colocar o número do cliente iniciado na primeira linha de sua mensagem.";
            console.log("------------------------------------------");
            console.log(mensagemAoIniciarIA);
            console.log("------------------------------------------");
            client.sendText(ID_GRUPO_IA, mensagemAoIniciarIA)
               .then((result) => {
                  //Retorno com sucesso do envio da mensagem.
               })
               .catch((erro) => {
                  console.error('Erro ao enviar mensagem de retorno: ', erro); //return object error
               }
            );
            callback();
         } else {
            if (ID_GRUPO_IA.length > 0 && message.author == ID_COORDENADOR && 
               FRASES_PARAR.indexOf(message.body.toLowerCase()) > -1) {
               const mensagemAoPararIA = "*Sistema IA parado com sucesso.*\nNesse momento todos os participantes estão desabilitados a receberem as mensagens enviadas de nossos cliente.";
               console.log("----------------------------");
               console.log(mensagemAoPararIA);
               console.log("----------------------------");
               client.sendText(ID_GRUPO_IA, mensagemAoPararIA);
               ID_GRUPO_IA = "";
            }
         }
      }

      /* Condições para ativar/desativar o DEBUG (mostra no 'console', informações dos Arrays: 'message' e 'result'). 
         Um contato deve enviar uma mensagem, que na sua primeira linha, comece com uma das palavras abaixo: 
         [debugGeral] = Vai ser mostrada para as mensagens de TODOS os contatos.
         [debugContato] = Vai ser mostrada SOMENTE para o contato que enviou o comando. 
         Aqui também é testado se a mensagem é TEXTO, ou seja, NÃO seja IMAGEM ou ÁUDIO. */
      if ((message.isMedia === false && message.isMMS === false && ID_GRUPO_IA.length > 0) || message.sender.isMyContact === false) {
         /* Se o contado é de alguém que não esteja nos meus contatos, o DEBUG é ativado para ele. */
         if (message.sender.isMyContact === false) {
            debugContato = false;
            //console.log(message.sender.pushname, ' - ATIVOU: DEBUG Visitante.');
         } else {
            /* A cada mensagem recebida com as palavras 'chave', há uma alternância entre ATIVAR e DESATIVAR o DEBUG. */
            if (message.body.indexOf("[debugGeral]") > -1) {
               debugGeral = !debugGeral;

               if (debugGeral) {
                  console.log(message.sender.name, " - ATIVOU: DEBUG Geral.");
               } else {
                  console.log(message.sender.name, " - DESATIVOU: DEBUG Geral.");
               }
            } else {
               if (message.body.indexOf("[debugContato]") > -1) {
                  debugContato = !debugContato;
               
                  if (debugContato) {
                     console.log(message.sender.name, ' - ATIVOU: DEBUG Contato.');
                  } else {
                     console.log(message.sender.name, ' - DESATIVOU: DEBUG Contato.');
                  }
               }
            }
         }
      }

      /* Qualquer uma das variáveis que seja 'true', ATIVA o DEBUG. */
      debugAtivo = (debugGeral || debugContato);
      
      if (debugAtivo) {
         console.log( "message: \n", message);
      }

      /* Condições para ativar o MENU. 
         Um contato deve enviar uma mensagem que na sua primeira linha, comece com uma das palavras abaixo:
         [menuGeral] = Ativa a exibição do MENU para TODOS os contatos.
         [menuContato] = Ativa a exibição do MENU SOMENTE para o contato que enviar o comando. 
                         Essa opção também ativa os itens de MENU que esteja em TESTE.
         Aqui também é testado se a mensagem é TEXTO, ou seja, NÃO seja IMAGEM ou ÁUDIO e se
         é de um dos meus contatos. */
      if (message.isMedia === false && message.isMMS === false && ID_GRUPO_IA.length > 0 && message.sender.isMyContact == true) {
         /* A cada mensagem recebida com as palavras 'chave', há uma alternância entre ATIVA e DESATIVAR o DEBUG. */
         if (message.body.indexOf("[menuGeral]") > -1) {
            menuGeral = !menuGeral;

            if (menuGeral) {
               console.log(message.sender.name, ' - ATIVOU: MENU Geral.');
            } else {
               console.log(message.sender.name, ' - DESATIVOU: MENU Geral.');
            }
         }
         if (message.body.indexOf("[menuContato]") > -1) {
            menuContato = !menuContato;

            if (menuContato) {
               console.log(message.sender.name, ' - ATIVOU: MENU Contato.');
            } else {
               console.log(message.sender.name, ' - DESATIVOU: MENU Contato.');
            }
         }
      }

      menuAtivo = (menuGeral || menuContato);

      if (debugAtivo) {
         console.log("contatosDoGrupoIA:", message.from, contatosDoGrupoIA.indexOf(message.from), contatosDoGrupoIA);
      }

      /* Condições para ENCAMINHAR a mensagem:
         1. O processao tenha sido ativado pelo coordenador. Ele deve enviar uma mensagem no Grupo IA.
         2. A mensagem deve ser de um contato (NÃO seja de um GRUPO).
         3. NÃO for de um contato do 'GRUPO_IA', pois as mensagens dos contatos desse grupo são tratadas no 'else' desse 'if'. */
      if (ID_GRUPO_IA.length > 0 && message.isGroupMsg === false && contatosDoGrupoIA.indexOf(message.from) < 0 && 
          message.from.substring(0,16) != "status@broadcast") {
         dataHora = new Date();  // Obtém a data/hora atual.
         horaAtual = dataHora.getHours();  // 0-23.
         //minutoAtual = dataHora.getMinutes();  // 0-59.
         //diaSemana = dataHora.getDay();  // 0-6 (zero=domingo).

         switch (true) {
            case (horaAtual < 6):
               saudacao = ", boa madrugada!";
               break;
            case (horaAtual < 12):
               saudacao = ", bom dia!";
               break;
            case (horaAtual < 18):
               saudacao = ", boa tarde!";
               break;
            case (horaAtual < 24):
               saudacao = ", boa noite!";
               break;
         }

         ehCliente = false;
         
         /* Se o contato NÃO tiver o seu nome cadastrado no celular dele, será pego o número do celular. */
         if (message.sender.pushname == undefined || message.sender.pushname == "Unnamed") {
            nomeContato = "("+message.from.substring(2,4)+")9"+message.from.substring(4,8)+"-"+message.from.substring(8,12);
         } else {
            nomeContato = message.sender.pushname;
         }

         if (debugAtivo) {
            console.log("SIGLA_EMPRESA:", TAMANHO_SIGLA, SIGLA_EMPRESA+"<-");
         }

         /* Todos os clientes da empresa, tem que ter seu cadastro nos 'meus contatos' e começarem com 
            a palavra da constante 'SIGLA_EMPRESA'. */
         if (message.sender.name.substring(0, TAMANHO_SIGLA) == SIGLA_EMPRESA) {  
            ehCliente = true;
            nomeContato = message.sender.name.substring(TAMANHO_SIGLA);
            nomeContato = nomeContato.replace(". ", ".")+" ,";
            let complementoNome = nomeContato.substring(nomeContato.indexOf(" "), nomeContato.indexOf(" ,"));

            nomeContato = nomeContato.substring(0, nomeContato.indexOf(" "));
            nomeContato = nomeContato.replace(".", " ");

            if (message.sender.pushname != undefined) {
               let parentesco = "esposo,esposa,filho,filha,marido,mulher,pai,mae,mãe,irmão,irmao,irmã,irma,";
               nomeContato = message.sender.pushname;

               if (complementoNome.length > 2 && parentesco.indexOf(complementoNome) > -1) {
                  complementoNome = complementoNome.charAt(0).toUpperCase() + complementoNome.slice(1);
                  nomeContato += " ("+complementoNome+" "+nomeContato+")";
               }
            }
         } 

         if (debugAtivo) {
            console.log("nomeContato (linha: 323):", nomeContato, );
         }

         /* Verifica se o contato já enviou alguma mensagem antes, também inclue o contato ou 
            atualiza a hora da última mensagem na 'listaDeContatos'. */
         let mostraSaudacao = verificaContatoNaListaDeContatos(message.from, nomeContato, ehCliente, dataHora, nivelMenu, opcaoMenu, debugContato, menuContato);

         if (mostraSaudacao) {  //Mostra a saudação
            if (ehCliente) {  //Se for cliente, a saudação é mostrada com o nome da empresa.
               saudacao = "*"+NOME_EMPRESA+":* \n"+nomeContato+saudacao+"\n\nUm momento que iremos lhe atender.";
            } else {
               saudacao = "*"+nomeContato+"*"+saudacao+"\n\nUm momento que falo já com você.";
            }

            console.log('saudacao:', saudacao);
            client.sendText(message.from, saudacao);
         } 

         /* Após executar a função 'verificaContatoNaListaDeContatos', o contato passa a fazer parte na 'listaDeContatos' e 
            suas configurações estarão atualizadas. */
         debugAtivo = (debugGeral || debugContato);

         if (debugAtivo) {
            console.log("DEBUG (linha: 346):\n", message);
         } else {
            console.log('nomeContato (linha: 348):', nomeContato, ehCliente, '\n---------------------------------------------------------------');
         }

         let enviarPara = ID_COORDENADOR;

         if (ehCliente) {
            enviarPara = ID_GRUPO_IA; 
         }

         if (message.isMedia === false && message.isMMS === false) {
            client.sendText(enviarPara, message.from.replace("@c.us", "")+" - *"+message.sender.name+"* \n"+message.body);

            if (ehCliente && menuAtivo) {
               nivelMenu = verificaResposta(message.from.replace("@c.us", ""), message.body, nivelMenu, opcaoMenu);
            }
         } else {
            client.forwardMessages(enviarPara, [message.id.toString()], true);
            client.sendText(enviarPara, message.from.replace("@c.us", "")+" - *"+message.sender.name+"*");
         }
      } else {  /* MENSAGENS DE RETONO ***************************************************************/

         if (ID_GRUPO_IA.length > 0 && (message.from == ID_GRUPO_IA || message.from == ID_COORDENADOR)) {
            idContato = "";
            let mensagem = "";

            /* Se a mensagem veio como uma RESPOSTA a uma mensagem do cliente.*/
            if (message.quotedMsgObj != null) {
               idContato = message.quotedMsgObj.body.substring(0, 20);
               idContato = idContato.replace(/[^0-9\.]+/g, '')+" ";
               idContato = idContato.substring(0, 13).trim();

               if (message.isMedia === false && message.isMMS === false) {
                  mensagem = message.body;
               } else {
                  mensagem = "";
               }
            } else {
               /* Se a mesangem é uma IMAGEM ou ÁUDIO e o idContato veio no campo 'Adicionar uma legenda'. */
               if (message.caption) {  
                  idContato = message.caption;
                  mensagem = message.caption;
               } else {  //Senão pega o idContato no corpo da mensagem.
                  idContato = message.body;
                  mensagem = message.body;
               }

               /* BLOCO PARA FORMATAR O idContato. ------------------------------------------- */
               idContato += ",,, ,,,,,,,,,,,,,,,,,,\n";

               if (idContato.indexOf("\n") < 19) {
                  idContato = idContato.substring(0, idContato.indexOf("\n"));
               } else {
                  idContato = idContato.substring(0, idContato.indexOf(",,, "));
               }

               /* Retira o idContato que vem na mensagem e é usado para saber para quem retornar ou enviar a mensagem. */
               mensagem = mensagem.replace(idContato, "").trim();
            
               idContato = idContato.replace(/\.| |\(|\)|\-|\,/g, "");  //Retira todos caracteres: pontos, espaços, paraenteses e virgulas.

               /*if (idContato.length == 13) {
                  idContato = idContato.substring(0,4)+idContato.substring(5,13);
               }*/
            }

            if (idContato.length == 11) { 
               //idContato = "55"+idContato;  
               idContato = "55"+idContato.substring(0,2)+idContato.substring(3,11);  //índice e quantidade.
            }

            if (idContato.length == 10) {
               idContato = "55"+idContato;  
            }


            /* FIM DO BLOCO -------------------------------------------------------------------- */
         
            idContato = idContato.replace(/[^0-9\.]+/g, '')+"@c.us";  //Deixa só números.
            let contatoValido = false;

            if (idContato.length == 17 || idContato.length == 18) {
               contatoValido = true;
            }

            if (debugAtivo) {
               console.log("RETORNO: ", idContato, idContato.length, mensagem);
            }

            /* Condições para enviar a mesangem ao contato:
               'idContato' esteja no formato e tamanho corretos. */
            if (contatoValido) {  
               ehCliente = pegarDadosDaListaDeContatos(idContato, EH_CLIENTE, false);
               /* Se a mensagem VAI para contatos que não seja de nenhum membro do 'GRUPO_IA'. */
               if ( contatosDoGrupoIA.indexOf(idContato) == -1 ) {  
                  /* Se a mensagems não for IMAGEM ou ÁUDIO. Provavelmente será TEXTO. */
                  if (message.isMedia === false && message.isMMS === false) {
                     /* A imagem sendo TEXTO, ela NÃO pode ser VAZIA, tem que ter algo. */
                     if (mensagem.length > 0) {
                        /* Se a mensagem VEIO de algum contato do grupo 'GRUPO_IA'. 
                           adiciona o nome dele ao inicio da mensagem. */
                        if (ehCliente) {  
                           mensagem = "*"+message.sender.name+":* \n"+mensagem;
                        }

                        if (debugAtivo) {
                           console.log("contatosDoGrupoIA:", contatosDoGrupoIA, message.from);
                        }

                        client.sendText(idContato, mensagem)
                           .then((result) => {  //Objeto retornou que o envio foi com sucesso.
                              let nomeContato = result.to.formattedName;
                              let ehCliente = (result.to.formattedName.substring(0, TAMANHO_SIGLA) == SIGLA_EMPRESA);
                              let mostraSaudacao = verificaContatoNaListaDeContatos(idContato, nomeContato, ehCliente);
                              if (debugAtivo) {
                                 //console.log('Result: ', result);  
                              }
                           })
                           .catch((erro) => {  //Objeto retornou que ocorreu ERRO no envio da mensagem.
                              console.error('Erro ao enviar mensagem de retorno: ', erro);  
                           }
                        );
                     } else {
                        if (message.isGroupMsg) {
                           if (message.isMedia === false && message.isMMS === false ) {
                              client.sendText(message.from, "*ERRO-Faltou a mensagem:* \n"+message.body);
                           } else {
                              client.sendText(message.from, "*ERRO-Faltou a mensagem:* \n<arquivo de mídia>");
                           }
                        } else {
                           client.sendText(message.from, "*Atenção:* \nMensagem *NÃO* foi entregue a nenhum cliente.");
                        }
                     }
                  } else {
                     client.forwardMessages(idContato, [message.id.toString()], true);
                     client.sendText(idContato, "*"+message.sender.name+":*")
                        .then((result) => {  //Objeto retornou que o envio foi com sucesso.
                           let nomeContato = result.to.formattedName;
                           let ehCliente = (result.to.formattedName.substring(0, TAMANHO_SIGLA) == SIGLA_EMPRESA);
                           let mostraSaudacao = verificaContatoNaListaDeContatos(idContato, nomeContato, ehCliente);
                           if (debugAtivo) {
                              //console.log('Result: ', result);  
                           }
                        })
                        .catch((erro) => {  //Objeto retornou que ocorreu ERRO no envio da mensagem.
                           console.error('Erro ao enviar mensagem de retorno: ', erro);  
                        }
                     );
                  }
                  
               }
            } else {
               if (idContato.length == 17 || idContato.length == 18) {
                  if (message.isGroupMsg) {
                     if (message.isMedia === false && message.isMMS === false ) {
                        client.sendText(message.from, "*ERRO-Contato NÃO é válido:* \n"+message.body);
                     } else {
                        client.sendText(message.from, "*ERRO-Contato NÃO é válido:* \n<arquivo de mídia>");
                     }
                  } else {
                     client.sendText(message.from, "*Atenção:* \nMensagem *NÃO* foi entregue a nenhum cliente.");
                  }
               } else {
                  if (message.isGroupMsg) {
                     if (message.isMedia === false && message.isMMS === false ) {
                        client.sendText(message.from, "*ERRO-Faltou número do cliente:* \n"+message.body);
                     } else {
                        client.sendText(message.from, "*ERRO-Faltou número do cliente:* \n<arquivo de mídia>");
                     }
                  } else {
                     client.sendText(message.from, "*Atenção:* \nMensagem *NÃO* foi entregue a nenhum cliente.");
                  }
               }
            }
         }
      }  /* FIM MENSAGENS DE RETONO *****************************************************************/
   });


   /* Função para pegar os IDs dos contatos que estão no 'Grupo IA'. */
   async function pegarIdsContatosDoGrupoIA(ID_GRUPO_IA) {
      let retorno = await client.getGroupMembersIds(ID_GRUPO_IA);
      return retorno;
   } 


   /* Função para testar se contato já passou alguma mensagem nos últimos 'TEMPO_OCIOSO' minutos. */
   function verificaContatoNaListaDeContatos(idContato, nomeContato, ehCliente = false, dataHora = new Date(), nivelMenu = -1, opcaoMenu = 0, debugContato = false, menuContato = false) {
      if (debugAtivo) {
         console.log("verificaContatoNaListaDeContatos:", idContato, nomeContato, ehCliente, dataHora, nivelMenu, opcaoMenu, debugContato, menuContato );
      }
      mostraSaudacao = true;
      achou = false;

      for (let i = 1; i < listaDeContatos.length; i ++) { //Loop para andar em todo o array de contatos.
         if (listaDeContatos[i][ID_CONTATO] == idContato) {  //Se achou o contato.
            //Se faz mais de 20 minutos que não envia mensagem, atualiza a hora.
            if (Math.floor(((dataHora-listaDeContatos[i][DATA_ATUAL])/1000)/60) > TEMPO_OCIOSO) {  
               listaDeContatos[i][DATA_ATUAL] = dataHora;  //3-dataAtual, 0-idContato, 1-nome, 2-ehCliente, 4-nivel, 5-opcaoMenu, 6-debugContato, 7-menuContato.
               listaDeContatos[i][NIVEL_MENU] = 0;  //4-nivel, 0-idContato, 1-nome, 2-ehCliente, 3-dataAtual, 5-opcaoMenu, 6-debugContato, 7-menuContato.
               listaDeContatos[i][OPCAO_MENU] = 0;  //5-opcaoMenu, 0-idContato, 1-nome, 2-ehCliente, 3-dataAtual, 4-nivel, 6-debugContato, 7-menuContato.
               listaDeContatos[i][DEBUG_CONTATO] = debugContato;  //6-debugContato, 0-idContato, 1-nome, 2-ehCliente, 3-dataAtual, 4-nivel, 5-opcaoMenu, 7-menuContato.
               listaDeContatos[i][MENU_CONTATO] = menuContato;  //7-menuContato, 0-idContato, 1-nome, 2-ehCliente, 3-dataAtual, 4-nivel, 5-opcaoMenu, 6-debugContato.
            } else {  //Se já está atualiza.
               mostraSaudacao = false;  //Não mostrar a saudação.
            }

            achou = true;
            break;
         }
      }

      if (!achou) {  //Se não achou, inclue contato.
         listaDeContatos.push([idContato, nomeContato, ehCliente, dataHora, nivelMenu, opcaoMenu, debugContato, menuContato]);
      }
      
      debugAtivo = (debugGeral || debugContato);
      menuAtivo = (menuGeral || menuContato);

      if (debugAtivo) {
         console.log("listaDeContatos: ", listaDeContatos);
      }

      return mostraSaudacao;
   }  /* Fim da função verificaContatoNaListaDeContatos. */


   /* Função de pesquisa o cliente e pega seu nível do menu que se encontra. */
   function pegarDadosDaListaDeContatos(idContato, campo, valorPadrao = false) {
      /* Os valores para o campo são:
         0-idContato, 1-nomeContato, 2-ehCliente, 3-dataAtual, 4-nivelMenu, 5-opcaoMenu, 6-debugContato, 7-menuContato. */

      let retorno = valorPadrao;

      for (let i = 1; i < listaDeContatos.length; i ++) { //Loop para andar em todo o array de contatos.
         if (listaDeContatos[i][ID_CONTATO] == idContato) {  //Se achou. 
            retorno = listaDeContatos[i][campo];  //0-idContato, 1-nome, 2-ehCliente, 3-dataAtual, 4-nivelMenu, ...
            break;
         }
      }

      return retorno;
   }


   /* Função de pesquisa o cliente e atualiza seu n[ivel do menu] */
   function atualizaListaDeContatos(idContato, campo, valor) {
      /* Os valores para o campo são:
         0-idContato, 1-nomeContato, 2-ehCliente, 3-dataAtual, 4-nivelMenu, 5-opcaoMenu, 6-debugContato, 7-menuContato. */
      for (let i = 1; i < listaDeContatos.length; i ++) { //Loop para andar em todo o array de contatos.
         if (listaDeContatos[i][ID_CONTATO] == idContato) {  //Se achou o contato. 
            listaDeContatos[i][campo] = valor;  
            break;
         }
      }
   }

   /* Função para aguardar um tempo. */
   function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }

   /* Função para testar a resposta, enviar mensagem de erro da resposta, mostra menu e acrescentar o nínel do menu. */
   function verificaResposta(idContato, mensagem, nivelMenu, opcaoMenu) {
      const NIVEL_MENU_ = 0;
      const OPCAO_MENU_ = 1;
      const DESCRICAO_OPCAO_E_MSG = 2;
      const PALAVRAS_ACEITAS_E_ERRO = 3;
      let menuCliente = [];  //0-Nível, 1-Opção, 2-Descrição opção, 3-Palavras aceitas na resposta.
      menuCliente.push([0, 0, "Digite o número correspondente a opção para qual deseja atendimento:", "Você *NÃO* digitou uma opção válida."]);
      menuCliente.push([0, 1, "*1*. Login e/ou Senha", "1~ 1.~ login~ senha~"]);
      menuCliente.push([0, 2, "*2*. link do sistema", "2~ 2.~ link~ sistema~"]);
      menuCliente.push([0, 3, "*3*. Falar com consultor", "3~ 3.~ falar~ com~ consultor~"]);
      menuCliente.push([0, 4, "*0*. Encerrar atedimento", "0~ 0.~ encerrar~ atedimento~"]);

      menuCliente.push([1, 0, "Seu *login* é *"+nomeContato.replace(" ", ".").toLowerCase()+"*, já sua *senha* não tem como sabermos, mas podemos alterá-la para *1234*, Deseja que façamos a alteração?", "Você *NÃO* digitou uma opção válida."]);
      menuCliente.push([1, 1, "*S*. SIM", "s~ s.~ sim~"]);
      menuCliente.push([1, 2, "*N*. NÃO", "n~ n.~ nao~ não~"]);

      menuCliente.push([2, 0, "Clique nesse link: https://rastrear.lacerbo.com ou digite-o em seu navegador.", "Você *NÃO* digitou uma opção válida."]);
      menuCliente.push([2, 1, "*Digite qualquer letra para retornar ao menu anterior*", ""]);

      let retorno = opcaoMenu + 1;
      let respostaMenu = "";
      let respostaCliente = mensagem.replace(/^\s+|\s+$/gm,'')+" ";  //Retira todos os espaços no inicio e no final, depois acrescenta 1 espaço no final.
      let palavraAPesquisar = "";
      let posicaoPesquisa = 0;

      while (posicaoPesquisa < respostaCliente.length) {
         palavraAPesquisar = " "+respostaCliente.substring(posicaoPesquisa, respostaCliente.indexOf(" ", posicaoPesquisa))+"~";
         posicaoPesquisa = respostaCliente.indexOf(" ", posicaoPesquisa);

         for ( let i=1; i < menuCliente.length; i++) {
            if (menuCliente[i][NIVEL_MENU_] == nivelMenu && menuCliente[i][DESCRICAO_OPCAO_E_MSG] > 0) {
               respostaMenu = menuCliente[i][PALAVRAS_ACEITAS_E_ERRO];  //2-Palavras aceitas na resposta.
               if (respostaMenu.indexOf(palavraAPesquisar.toLowerCase()) > -1) {
                  retorno = menuCliente[i][OPCAO_MENU_];
                  break;
               }

            }
         }
      }

      let mensagemEnviar = "*"+NOME_EMPRESA+":* \n\n";

      if (retorno != nivelMenu) {
         atualizaListaDeContatos(idContato, NIVEL_MENU, retorno);
         mensagemEnviar += "Digite o número correspondente a opção para qual deseja atendimento:\n\n";
      } else {
         mensagemEnviar += "Você *NÃO* digitou uma opção válida.\n"; 
         mensagemEnviar += "Digite o número correspondente a opção para qual deseja atendimento:\n\n";
      }

      for( let i=0; i < menuCliente.length; i++) {
         if (menuCliente[i][0] == nivelMenu) {
            mensagemEnviar += menuCliente[i][1]+"\n";
         }
      }

      client.sendText(idContato, mensagemEnviar);

      return retorno;
   }   
}

/* FIM */