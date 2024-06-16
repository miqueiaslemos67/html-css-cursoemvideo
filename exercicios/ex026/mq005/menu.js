// função par o menu seja forçado a aparecer em telas grandes

function mudouTamanho() {
  if (window.innerWidth >= 768) {
    itens.style.display = 'block'
  } else {
    itens.style.display = 'none'
  }
}



// função em JS de sidebar (menu de Hamburguer)
function clickMenu() {
  if(itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}