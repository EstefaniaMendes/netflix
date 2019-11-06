function handleSearch () {
	if (document.querySelector('.searchInput').style.disple =='nome') {
	document.querySelector('.searchInput').style.display ='flex';
	document.querySelector('.serchBox').style.border = '0.5px solid #FFF';
} else {
	document.querySelector('.searchInput').style.display = 'nome';
	document.querySelector('.serchBox').style.border = 'nome';
}