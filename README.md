# Timer

Countdown Timer em Angular 18

Desenvolvi um aplicativo de contagem regressiva simples para estudar métodos de implementação e a manipulação de datas no JavaScript. Este projeto foi desenvolvido com Angular 18 e exibe na tela os dias, horas, minutos e segundos restantes para uma data alvo, configurada como o Ano Novo.

Principais características e melhorias implementadas:

A contagem regressiva foi otimizada para atualizar os segundos a cada segundo, os minutos a cada minuto, as horas a cada hora e os dias a cada dia, eliminando a necessidade de atualizações desnecessárias.
Utilizei expressões matemáticas e lógica para realizar os cálculos precisos do tempo restante.
A lógica principal está estruturada para ser modular e eficiente, atualizando apenas os elementos que mudaram, utilizando o método updateCountdown() em conjunto com ViewChild para manipular dinamicamente os valores exibidos na interface.
Design alinhado às boas práticas de componentização com uso de standalone components e métodos do ciclo de vida Angular, como ngAfterViewInit.
Código principal (resumo da lógica):
O código calcula a diferença entre a data atual e a data alvo em milissegundos e converte este valor em dias, horas, minutos e segundos. Apenas os elementos que tiveram mudanças são atualizados no DOM, utilizando a referência direta aos elementos HTML por meio de @ViewChild.

Esse projeto foi uma oportunidade para explorar o comportamento de manipulação de dados temporais no JavaScript, consolidar o uso de Angular e aprofundar meu entendimento em otimizações de desempenho para aplicativos que utilizam atualização contínua de estado.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
