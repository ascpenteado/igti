### Objetivos

Exercitar os seguintes conceitos trabalhados no Módulo:

-   Implementação de aplicações com JavaScript e React
-   Criação de Class Components
-   Utilização de class components, functional components ou hooks.

### Enunciado

Criar uma aplicação com React, realizar cálculo de valorização/depreciação com base em um montante, taxa de juros mensal e quantidade de parcelas mensal, utilizando o conceito de juros compostos.

### Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. . Criar o projeto com o pacote create-react-app ou utilizar o projeto \_react-projetobase já disponibilizado pelo professor no fórum do módulo. Essa última é a forma recomendada pelo professor.

2. Definir os elementos que farão parte do estado da aplicação. O estado da aplicação deve ser composto do valor inicial, a taxa de juros mensal e o período. A taxa de juros pode ser tanto positiva (investimento) quanto negativa (depreciação). A implementação da manipulação do estado da aplicação pode ser feita tanto com class components quanto hooks, ficando a escolha a critério do aluno. Entretanto, as questões do desafio serão elaboradas com base em conceitos e implementação referentes somente aos React Hooks.

3. O aluno deve pesquisar/investigar como deve ser feito o cálculo das prestações com base nas imagens abaixo e com base no vídeo de apresentação do professor. Há várias formas de se implementar esse cálculo.

4. A interface fica a critério do aluno. O foco da avaliação serão os cálculos e conceitos relacionados ao React Hooks.

#### Dicas

1. Faça com que os três inputs do estado da aplicação sejam do tipo number para conseguir manipular os dados com as setas “para cima” e “para baixo” do teclado.
2. Será cobrado nas questões apenas o valor do montante até 100.000 reais, taxa de juros entre -12% e 12% ao mês e parcelas de 1 a 36.
3. Além dos três inputs, crie mais uma variável de estado que será responsável por controlar as “parcelas”.
4. Faça a implementação do cálculo das parcelas com useEffect, utilizando como deps as variáveis de estado referentes aos três inputs. Nesta implementação, eu (Raphael Gomide) não reaproveitei o valor atual das parcelas.
5. Quebre a aplicação em quatro componentes: <App />, <Form /> (com os três inputs), <Installments /> e <Installment /> (parcelas/parcela, em inglês).
6. Não deixem de assistir o vídeo de apresentação deste desafio, onde demonstro a aplicação em funcionamento e dou mais algumas dicas.
