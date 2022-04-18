# EZOOM PROJETO TESTE - IONIC

## Sistema

Instale a [apk - android](https://drive.google.com/file/d/1Wfx9or4jClpKQFnKPVxfK0y4-i6YO74a/view?usp=sharing) no seu celular ou faça download deste repositório e rode com Ionic Serve (se faz necessário instalar os pacotes NPM com o comando npm i).

O app está configurado para utilizar a url https://apiezoomtest.herokuapp.com, caso esta seja alterada se faz necessário alterar no app, através do seguinte caminho
Src/Environments/environment.ts/baseUrl

O mesmo serve para as rotas das controllers, caso sejam alteradas se faz necessário alterar no app. As rotas de controllers podem ser encontradas no mesmo arquivo descrito acima.

Controllers:
- users
- movies
- newss
- games

Methods

- Show/{id} [POST]
- Create/{body} [POST]
- Update/{id}{body} [POST]
- Delete/{id} [POST]

Observação: O metodo de ler todos é feito através da chamada da controller, exemplo: 
https://apiezoomtest.herokuapp.com/users

## API

A api está rodando via Heroku, através do link https://apiezoomtest.herokuapp.com.
Caso necessário, o repositório da API pode ser encontrado [aqui](https://github.com/mkwitko/ezoom-test-CodeIgniterAPI), se fazendo necessário instalar os pacotes do composer, com o comando composer install.

## Autenticação

O app conta com um sistema de autenticação, onde é possível entrar com uma conta criada, cadastrar uma nova e utilizar um sistema de esqueci minha senha.
Os usuários cadastrados podem ser classificados como 'user' ou 'admin', sendo este sistema feito de forma artificial no cadastro (Em um ambiente de produção este sistema seria diferente. Foi feito dessa forma apenas para fins deste teste).

Para fins de teste, criei duas contas para facilitar o processo, sendo elas:

Usuário - user@user.com.br

Administrador - admin@admin.com.br

Para ambas as contas a senha é 'ezoomtest'.

Caso necessário, se faz possível criar contas novas. Para utilizar - e testar - o sistema de 'esqueci minha senha', é necessário ter uma conta cadastrada com um e-mail que se tenha acesso, uma vez que o sistema de criação de senha nova é enviado por e-mail.

## Aplicação - Usuário

Ao entrar como usuário, será apresentado as três categorias ('Filmes', 'Jogos', 'Notícias') em formatos de cards. 
Ao clicar em qualquer card, o usuário é redirecioanado para uma página onde mostra todos elementos daquela categoria, permitindo que o usuário clique nos cards e acesse mais informações sobre os mesmos.

- Ao entrar em um card de Filme, o usuário poderá ver um vídeo referente àquele filme.
- Ao entrar em um card de Notícia, o usuário poderá acessar a notícia completa (link) através de um botão de 'Ler Mais!' localizado no Rodapé da página.
- O card de Jogos não conta com nenhuma interação especial.

Caso o usuário acesse esta página de 'detalhes' sem ter passado pela página anterior, o mesmo será redirecionado de volta. Esse sistema previne bugs, como o usuário acessar a página sem ter sido feito o carregamento dos dados da API.

## Aplicação - Administrador

Ao entrar como administrador, será apresentado as mesmas três categorias em formatos de cards.

Ao clicar em qualquer card, o administrador é redirecionado para uma nova página de Crud, onde poderá adicionar um elemento referente à categoria selecionada.

Para poder enviar um elemento se faz necessário preencher todos os campos do formulário.

Verificações especiais

- Imagem -> Recomenda-se prover links para imagens .jpg
- Filme -> Se faz necessário preencher o campo 'Link' com um link Embed do Youtube, [por exemplo](https://support.google.com/youtube/answer/171780?hl=pt-BR).

Importante salientar: O campo solicita que seja adicionado somente o link embed, não todo o código html que o youtube fornece.

Exemplo: 

  Link original - https://www.youtube.com/watch?v=188E-bt4Wy4
  
  Link a ser adicionado - https://www.youtube.com/embed/188E-bt4Wy4

Além deste acesso via Página Inicial, pode-se acessar a lista completa de elementos enviados através do menu lateral. 
Ao acessar o mesmo, o administrador é apresentado à todos elementos da categoria selecionada, podendo acessar o elemento afim de atualizar ou deletar o mesmo.
Além disso, o administrador pode acessar a criação de um novo elemento através de um Fab Button localizado no canto inferior direito da página.

## Atualizações

- Adicionado funcionalidade de Screen Lock, obrigando o APP a permanecer como Portrait
- Adicionado Fab Button de Refresh nas páginas de Home de cada categoria (Filmes, Jogos, Notícias), na aplicação do usuário. Isso permite alterações em 'tempo real'. 

Sugestão de teste: Abrir duas instâncias do APP e adicionar, atualizar ou deletar um elemento como administrador. Utilizar o botão de refresh para verificar a alteração do mesmo como usuário.






