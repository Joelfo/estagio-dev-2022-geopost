# Projeto estágio dev 2022 Geopost
## O que é?
Projeto feito para a segunda etapa do processo seletivo para vaga de estágio de desenvolvedor do Geopost.
## Como foi feito?
### Tecnologias
O projeto foi realizado utilizando:
- HTML5
- CSS
- JavaScript
- Biblioteca jquery(https://jquery.com/).

Alguns trechos de código foram retirados de fontes abertas como W3Schools e Stack Overflow, esses trechos específicos foram referenciados e contém o link para suas fontes com o auxilio de comentários.

### Estrutura
O projeto foi dividido conforme a seguinte estrutura
- css
    - styles.css
- js
    - compare.js
    - draw.js
    - functions.js
    - jquery-3.6.1.js
    - script.js
- index.html

Especificando:

- **styles.css**: Contém a maior parte da estilização CSS utilizada.

- **draw.js**: Funções utilizadas para preencher dinamicamente o html com alguns dos times e grupos e representá-los na tela.

- **compare.js**: Funções de comparação utilizadas para apoiar a definição de partidas e classificação de equipes.

- **functions.js**: Funções importantes referentes a lógica de simulação da competição.

- **jquery-3.6.1.js**: Biblioteca jquery.

- **script.js**: O corpo de scripts principal responsável por se comunicar com a API da geopost, coordenar a simulação da competição e enviar a resposta solicitada, contendo os dados da final, para a API.

- **index.html**: Página principal contendo os elementos visuais da simulação.
