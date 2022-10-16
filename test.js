const tableCss = document.getElementsByClassName("table_CSS")[0]
const tableHtml = document.getElementsByClassName("table_HTML")[0]
const tableJs = document.getElementsByClassName("table_JS")[0]

const cssButton = document.getElementById('css-button')
const htmlButton = document.getElementById('html-button')
const jsButton = document.getElementById('js-button')


function appear(itemToAppear, itemToDisappear1, itemToDisappear2) {
    itemToAppear.style.display = 'table';
    itemToDisappear1.style.display = 'none';
    itemToDisappear2.style.display = 'none';
}

cssButton.onclick = () => appear(tableCss, tableHtml, tableJs)
htmlButton.onclick = () => appear(tableHtml, tableJs, tableCss)
jsButton.onclick = () => appear(tableJs, tableHtml, tableCss)





