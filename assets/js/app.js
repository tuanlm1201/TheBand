var buyBtns = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.js-modal');
var closeModal = document.querySelector('.js-close');
var modalContainer=document.querySelector('.modal-container');

//Hàm hiện thị modal
function showBuyTicket(){
    modal.classList.add('open')
}
//Hàm ẩn modal
function hideBuyTicket(){
    modal.classList.remove('open')
}
//Lọc qua cái button và lắng nghe click
for (const item of buyBtns) {
    item.addEventListener('click',showBuyTicket)
}
//lắng nghe click close
closeModal.addEventListener('click',hideBuyTicket);
//lắng nghe khi click ra bên ngoài modal container
modal.addEventListener('click',hideBuyTicket);

modalContainer.addEventListener('click',function(e) {
    e.stopPropagation();
});
