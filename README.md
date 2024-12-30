# age-calculator
O objeto do projeto é aprender a usar pacotes externos com npm. Assim, será criado um Datepicker em JavaScript que calcula a idade exata do usuário.

Link para o [Projeto Age Calculator](https://roadmap.sh/projects/age-calculator)

![Exemplo para o projeto](https://assets.roadmap.sh/guest/age-calculator-do1un.png)

## Ferramentas utilizadas no desenvolvimento

- HTML
- CSS
- JavaScript
- NPM (versão - 10.9.0 no Windows)
    - Bibliotecas:
        - [Js-Datepick](https://www.npmjs.com/package/js-datepicker)
        - [Luxon](https://www.npmjs.com/package/luxon)
- VS Code Studio
    - Extensão: Live Server

## Observação
Como é possível observar no index.html, os códigos dos módulos foram extraídos diretamente dos seus respectivos locais em node_modules. Considerando que não foi utilizado nenhum empacotador de módulo JavaScript (JS module bundler), foram obtidos o datepicker.min.js, o datepicker.min.css e o luxon.min.js diretamente de suas respectivas pastas.

```html
<head>
    <!-- Demais tags acima -->
     <link rel="stylesheet" href=".\node_modules\js-datepicker\dist\datepicker.min.css">
    <script src=".\node_modules\js-datepicker\dist\datepicker.min.js"></script>
    <script src=".\node_modules\luxon\build\global\luxon.min.js"></script>
    <!-- Demais tags abaixo -->
</head>
```