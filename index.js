const anime = require('animejs')
require('./style.css');
require('animate.css');

class BiuImg {
  constructor(options = {}) {
    this.containerStyle = options.containerStyle;
    this.queue = options.queue;
    this.duration = options.duration;
    this.imgStyle = options.imgStyle;
    this.multi = options.multi || false;
    // 记录最后一个图片，为了解决图片重叠的问题
    this.lastImg = null;
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'biu-img-container';
    Object.assign(this.container.style, this.containerStyle);
    document.body.appendChild(this.container);
  }

  push(key) {
    const item = this.queue.filter(q => q.key == key)[0];
    if (!item || this.lastImg) return;
    const img = document.createElement('img');
    const wrapper = document.createElement('div');

    wrapper.className = 'biu-img2-item';
    
    // // 判断上一个 img 的右边在不在屏幕上
    // let left;
    // if (this.lastImg) {
    //   const bcr = this.lastImg.getBoundingClientRect();
    //   // 保证屏幕上只有一个图      
    //   if(!this.multi && bcr.left > 0){
    //     return;
    //   }
    //   const rightBorderPos = bcr.left + bcr.width;
    //   const windowWidth = window.innerWidth;
    //   if (rightBorderPos > windowWidth) {
    //     left =  (rightBorderPos + 20) + 'px';
    //   }
    // }

    // Object.assign(img.style, this.imgStyle,{left});
    img.src = item.src;
    img.className += ' animated bounceIn';
    wrapper.appendChild(img)
    this.container.appendChild(wrapper);
    this.lastImg = img;
    
    setTimeout(()=>{
      img.className += ' bounceOut';
      this.lastImg = null;
    },3000)

    // use css animation
    // img.className += ' go';
    
   
  }

}

module.exports = BiuImg;