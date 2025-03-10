function mostrarMenu(index) {
    const allMenus = document.querySelectorAll('.menu-options')
    const allItems = document.querySelectorAll('.produtos-item')

    allMenus.forEach(menu => menu.classList.remove('show'))
    allItems.forEach(item => item.classList.remove('active'))

    document.getElementById(`produto-${index}`).classList.add('show')
    allItems[index].classList.add('active')
}