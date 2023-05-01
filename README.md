# Esquenta para o Projeto StarWars #

## Projeto Harry Potter Personagens list ##


# Orientações # 
1 - Clone o repositório do exercício
- Use o comando: 
`
 git clone git@github.com:caren1994/harrypotter-esquenta-turma29.git
`

2 - Instale as dependências
- `npm install`

2.1 - Caso queira utilizar o Docker faça a instalação do docker em sua máquina utilizando o conteúdo do course backend "Dia 01-Utilizando containers Docker" 

2.2 - Após a instalação em seu terminal utilize o comando
- 'docker-compose up -d'
2.3 - verifique o id do container com o comando:
-  docker ps -a
2.4 - logo após abra o terminal iterativo do docker com o comando:
- docker exec -it <numero-do-container> bash
2.5 - já dentro do container utilize  o comando
- 'npm start'


3 - Nesse Projeto existem 2 branchs a branch Main e a branch gabarito
- Depois de clonar e instalar as dependências, crie sua branch e bons estudos!

# Requisitos #

## 1. Faça o setup inicial do Context API:
 -  Com os nomes AppContext e AppProvider
 -  o fetch construído na page Form deve estar no  AppProvider
 -  a constante fields que se encontra na page form deve estar no AppProvider e ser atribuída a um state com o nome columnFilter e utilizado na tag select como defaultValue.
 -  todos os outros states e as funções da page Form devem ser feitas no AppProvider.
 
 ## 2. Deve ser renderizado no componente Table os campos:
 -  species,gender,house,yearOfBirth,alternate_names e image respectivamente.
 
 ## 3. Deve ser renderizado no componente table o resultado do inputText
 -  Assim que for difitado uma letra no inputText deve aparecer na tela o resultado simultaneamente.
 
 ## 4. Filtrando o resultado de acordo com o campo columnFilter, as options "maior que", "menor que", "igual a " e o number
 -  Ao clicar no button Filtrar deve ser renderizado na tabela o resultado do filtro selecionado.
 
 ## 5. Ordenando em Ascendente e Descendente
 - Após clicar no button ORDENAR deve ser renderizado no table as informações seguindo o filtro selecionado
 
 ## 6. O button EXCLUIR FILTROS deve aparecer assim que existir filtros
 - DICA: Quando for utilizar os filtros coloque em um state 
 
 ## 7. Quando clicar no button EXCLUIR FILTROS 
 -  Deve ser renderizasdo no state as informações sem os filtros
 -  DICA: Guarde o valor da API em um state ex:initialStateApi
 
 ## Bons Estudos!!!

