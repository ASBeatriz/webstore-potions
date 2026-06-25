function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    const horizontal = document.querySelector('.horizontal-bar')
    horizontal.style.display = 'none'    
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    const horizontal = document.querySelector('.horizontal-bar')
    horizontal.style.display = 'flex'
}

