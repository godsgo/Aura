// ********* AddLayer *********
let numberOfLayer = 1;
let addLayerBtn = document.querySelector('.layer__header-add');
addLayerBtn.addEventListener('click', () => {
  document.querySelector('.layers__item-main').innerHTML +=
    `
      <div class="layer__item-layer">
        <div class="layer__eye">
          <img src="assets/icon/eye.png" style="width: 20px;" alt="">
        </div>
        <div class="layer__name">Layer ${numberOfLayer++}</div>
        <div class="layer__opacity">100%</div>
      </div>
    `
})

// ********* DelLayer *********
let layer = document.querySelector('.layers__item-main');
layer.addEventListener('contextmenu', (e) => {
  numberOfLayer = 1;
  e.preventDefault()
  if (e.target.classList.contains('layer__name')
    || e.target.classList.contains('layer__opacity')
    || e.target.classList.contains('layer__eye')) {

    e.target.parentNode.remove();
  }
})


// ********* InitCanvas *********
let myCanvas = document.getElementById('myCanvas');
let ctx = myCanvas.getContext('2d');

ctx.fillStyle = '#488ee4'
ctx.fillRect(100, 50, 150, 70)


// ********* BurgerMenu ********
let burger = document.querySelector('.hamburger');
burger.addEventListener('click', function (e) {
  this.classList.toggle('is-active')
})