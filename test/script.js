// Dados para buscar
const dados = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
    // Adicione mais itens aqui
  ];
  
  // Função para realizar a busca
  function buscar(termo) {
    // Limpar resultados anteriores
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    // Filtrar dados com base no termo de busca
    const resultados = dados.filter(item => item.nome.includes(termo));
  
    // Exibir resultados
    resultados.forEach(item => {
      const resultadoDiv = document.createElement('div');
      resultadoDiv.textContent = item.nome;
      searchResults.appendChild(resultadoDiv);
    });
  }
  
  // Lidar com a entrada do usuário
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const termoBusca = searchInput.value;
    buscar(termoBusca);
  });
  