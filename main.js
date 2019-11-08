function handleSearch () {
	if (document.querySelector('#pesquisar-block').style.display ==='flex') {
	document.querySelector('#pesquisar-block').style.display ='none';
	document.querySelector('.serchBox').style.border = '0.5px solid #FFF';
} else {
	document.querySelector('#pesquisar-block').style.display = 'flex';
	document.querySelector('.serchBox').style.border = 'nome';
}
}