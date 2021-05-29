## Informações sobre a estrutura das pastas e do redux/redux-saga em si

<!-- Pasta store -->

A pasta **store** é responsável por toda configuração do redux, tudo que tiver
relação com o **redux** estará na pasta **store**.

(podemos pensar na pasta store como o estado global da aplicação)

<!-- Pasta modules -->

A pasta **modules** conterá pastas que terão funcionalidades isoladas da aplicação,
cada pasta dentro da pasta **modules** representa um módulo e um estado global.

---

### Redux saga

**Redux saga** é um middleware/interceptors, onde conseguimos executar uma ação
entre uma **action** e o **reducer**. ex: adicionar uma blusa no carrinho de compras,
ao clicar em adicionar ao carrinho seria disparado uma **action** (ADD_PRODUCT_TO_CART),
o **reducer** ouviria essa **action**, e adicionaria ao carrinho de compra(state).
O **Redux saga** ouviria a **action** e antes do **reducer** adicionar ao carrinho,
ele verificaria se a blusa tem estoque disponível na API por exemplo.
