// Array com os dados dos produtos
const products = [
    {
      name: "Weverton",
      description: "Goleiro.",
      imageUrl:"../img/Weverton.png"
    },
    {
      name: "Mayke",
      description: "Lateral Direito.",
      imageUrl:"../img/Mayke.png"
    },
    {
      name: "Piquerez",
      description: "Lateral Esquerdo.",
      imageUrl:"../img/Piquerez.png"
    },
    {
      name: "Gustavo Gomez",
      description: "Zagueiro.",
      imageUrl:"../img/Gustavo Gomez.png"
    },
    {
      name: "Murilo",
      description: "Zagueiro.",
      imageUrl:"../img/Murilo.png"
    },
    {
      name: "Anibal Moreno",
      description: "Volante.",
      imageUrl:"../img/Anibal_Moreno.png"
    },
    {
      name: "Zé Rafael",
      description: "Volante.",
      imageUrl:"../img/Ze_Rafael.png"
    },
    {
      name: "Rafael Veiga",
      description: "Meia Campista.",
      imageUrl:"../img/Rafael_Veiga.png"
    },
    {
      name: "Estevão",
      description: "Ponta Direita.",
      imageUrl:"../img/Estevao.png"
    },
    {
      name: "Felipe Anderson",
      description: "Ponta Esquerda.",
      imageUrl:"../img/Felipe_Anderson.png"
    },
    {
      name: "Flaco Lopez",
      description: "Atacante.",
      imageUrl:"../img/Flaco_Lopez.png"
    },
    {
      name: "Abel Ferreira",
      description: "Tecnico.",
      imageUrl:"../img/Abel_Ferreira.png"
    },

  ];

  // Seleciona o template e o container onde os produtos serão inseridos
  const template = document.getElementById('product-template');
  const productsContainer = document.getElementById('products-container');

  // Função para criar e inserir os cards de produto
  products.forEach(product => {
    // Clona o conteúdo do template
    const productElement = document.importNode(template.content, true);

    // Preenche o conteúdo do card com os dados do produto
    productElement.querySelector('.product-name').textContent = product.name;
    productElement.querySelector('.product-description').textContent = product.description;
    productElement.querySelector('.product-image').src = product.imageUrl;

    // Adiciona o card preenchido no container
    productsContainer.appendChild(productElement);
  });

