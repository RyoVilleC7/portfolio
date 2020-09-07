import store from '../store/store';
import { firstLoad, windowResize, deviceDirection, browserDirection, orientationDirection } from '../store/actionCreater';

export const uaDirection = ()=>{

  const ua = navigator.userAgent;
  const ua_b = ua.toLowerCase();

  if( ua.indexOf('iPhone') > 0 ) {
    store.dispatch(deviceDirection('iPhone'));
  } else if( ua.indexOf('iPod') > 0 ) {
    store.dispatch(deviceDirection('iPod touch'));
  } else if( ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 ) {
    store.dispatch(deviceDirection('Android'));
  } else if( ua.indexOf('windows') > 0 && ua.indexOf('phone') > 0 ) {
    store.dispatch(deviceDirection('windows Phone'));
  } else if( ua.indexOf('firefox') > 0 && ua.indexOf('mobile') > 0 ) {
    store.dispatch(deviceDirection('Firefox OS'));
  } else if( ua.indexOf('iPad') > 0 ) {
    store.dispatch(deviceDirection('iPad'));
  } else if( ua.indexOf('Android') > 0 ) {
    store.dispatch(deviceDirection('Android Tablet'));
  } else if( ua.indexOf('windows') > 0 && ua.indexOf('touch') > 0 ) {
    store.dispatch(deviceDirection('Windows Tablet'));
  } else if( ua.indexOf('firefox') > 0 && ua.indexOf('tablet') > 0 ) {
    store.dispatch(deviceDirection('Firefox Tablet'));
  } else {
    store.dispatch(deviceDirection('pc'));
  }

  if(ua_b.indexOf('msie') != -1 || ua_b.indexOf('trident') != -1) {
    store.dispatch(browserDirection('ie'));
  } else if(ua_b.indexOf('edge') != -1) {
    store.dispatch(browserDirection('edge'));
  } else if(ua_b.indexOf('chrome') != -1) {
    store.dispatch(browserDirection('chrome'));
  } else if(ua_b.indexOf('safari') != -1) {
    store.dispatch(browserDirection('safari'));
  } else if(ua_b.indexOf('firefox') != -1) {
    store.dispatch(browserDirection('firefox'));
  } else if(ua_b.indexOf('opera') != -1) {
    store.dispatch(browserDirection('opera'));
  } else {
    store.dispatch(browserDirection('ex_browser'));
  }

}

export const orientationDir = (device)=>{
  if(device === 'iPhone' || 
     device === 'iPod touch' || 
     device === 'Android' || 
     device === 'windows Phone' || 
     device === 'Firefox OS'
     ){
       if(window.orientation === 90 || window.orientation === -90){
        store.dispatch(orientationDirection(false));
        alert('デバイスを縦向きに持ちかえてください');
      }else if(window.orientation === 0 || window.orientation === 180){
        store.dispatch(orientationDirection(true));
      }
     }
}

export const beforeMove = ()=>{
    const content = document.getElementsByClassName('_content')[0];
    content.classList.remove('js-page-change-animation');
    content.classList.add('js-page-change-animation-out');
};

export const afterMove = ()=>{
    const content = document.getElementsByClassName('_content')[0];
    content.classList.remove('js-page-change-animation-out');
    content.classList.add('js-page-change-animation');
};

export const cv_in = ()=>{
    const cv = document.getElementById('WebGL-output');
    cv.classList.remove('cv_out');
    cv.classList.add('cv_in');
    setTimeout(()=>{
        cv.classList.remove('cv_in');
    },300)
}

export const cv_out = ()=>{
    setTimeout(()=>{
        const cv = document.getElementById('WebGL-output');
        cv.classList.remove('cv_in');
        cv.classList.add('cv_out');
    },200)
}

export const getTitle = ()=>{
    const firstLine_text = "ImFront";
    const secondLine_text = "Developer.";

    const firstLine_textSplit = firstLine_text.split('');
    const secondLine_textSplit = secondLine_text.split('');

    const firstLine_textWrap = document.getElementById('textWrap');
    const secondLine_textWrap2 = document.getElementById('textWrap2');

    for (let i = 0; i < firstLine_textSplit.length; i++) {
        let cl = document.createElement('span');
        cl.innerText = firstLine_textSplit[i];
        cl.style.animationDelay = `${i}0ms`;
        cl.classList.add('textFadeIn');
        firstLine_textWrap.appendChild(cl);
    }

    for (let i = 0; i < secondLine_textSplit.length; i++) {
        let cl = document.createElement('span');
        cl.innerText = secondLine_textSplit[i];
        cl.style.animationDelay = `${i}0ms`;
        cl.classList.add('textFadeIn');
        secondLine_textWrap2.appendChild(cl);
    }

    const btnWrapper = document.getElementById('btnWrapper');
    btnWrapper.classList.add('btnWrapper_fadeIn');
}

export const getWindowSize = ()=>{
    store.dispatch(windowResize());
}

export const loading = ()=>{
    setTimeout(()=>{
        store.dispatch(firstLoad());
    },1000)
}

class MomentumScroll {
    constructor(selector) {
      this.container = document.querySelector(selector)
      this.img = document.getElementById('aboutCanvas')
      this.text = document.getElementById('aboutText')
      this.scrollY = 0
      this.translateY = 0
      this.speed = 0.1
      this.rafId = null
      this.isActive = false
  
      this.scrollHandler = this.scroll.bind(this)
      this.resizeHandler = this.resize.bind(this)
  
      this.run()
    }
  
    run() {
      if (this.isActive) {
        return
      }
  
      this.isActive = true
  
      this.on()
      this.setStyles()
    }
  
    destroy() {
      if (!this.isActive) {
        return
      }
  
      this.isActive = false
  
      this.off()
      this.clearStyles()
  
      if (this.rafId) {
        cancelAnimationFrame(this.rafId)
      }
  
      this.rafId = null
    }
  
    resize() {
      document.body.style.height = `${this.container.clientHeight}px`
    }
  
    scroll() {
      this.scrollY = window.scrollY || window.pageYOffset
  
      if (!this.rafId) {
        this.container.style.willChange = 'transform'
        this.rafId = requestAnimationFrame(() => this.render())
      }
    }
  
    on() {
      this.resize()
      this.scroll()
      window.addEventListener('scroll', this.scrollHandler, { passive: true })
      window.addEventListener('resize', this.resizeHandler)
      window.addEventListener('load', this.resizeHandler)
    }
  
    off() {
      window.removeEventListener('scroll', this.scrollHandler)
      window.removeEventListener('resize', this.resizeHandler)
      window.removeEventListener('load', this.resizeHandler)
    }
  
    setStyles() {
      this.container.style.position = 'fixed'
      this.container.style.width = '100%'
      this.container.style.top = 0
      this.container.style.left = 0
    }
  
    clearStyles() {
      document.body.style.height = ''
      this.container.style.position = ''
      this.container.style.width = ''
      this.container.style.top = ''
      this.container.style.left = ''
      this.container.style.transform = ''
      this.container.style.willChange = ''
    }
  
    render() {
      const nextY = this.translateY + (this.scrollY - this.translateY) * this.speed    
      const isNear = Math.abs(this.scrollY - nextY) <= 0.1
  
      this.translateY = isNear ? this.scrollY : nextY
  
      const roundedY = Math.round(this.translateY * 100) / 100
      const roundedY_Text = Math.round(this.translateY * 100) / 80
  
      this.container.style.transform = `translate3d(0, -${roundedY}px, 0)`

      setTimeout(()=>{
        this.text.style.transform = `translate3d(0, -${roundedY_Text}px, 0)`
      },15)

      if(window.innerWidth > 1600){
        setTimeout(()=>{
          this.img.style.transform = `translate3d(-20%, -${roundedY}px, 0) rotate(5deg) scale(1.3)`
        },5)
      }else {
        setTimeout(()=>{
        this.img.style.transform = `translate3d(0, -${roundedY}px, 0) rotate(5deg)`
      },5)}

      

      
  
      if (isNear) {
        this.rafId = null
        this.container.style.willChange = ''
      } else {
        this.rafId = requestAnimationFrame(() => this.render())
      }
    }
  }
  
export const scrollGo = () => {
    const momentumScroll = new MomentumScroll('#container');
}

export const elementOut = (elem, dir)=>{
    switch(dir){

        case 'left':
            elem.classList.add('elemOut_left');
        break;

        case 'right':
            elem.classList.add('elemOut_right');
        break;
    }
    setTimeout(()=>{
        elem.style.display = 'none';
    },300);
}

import musicFile from '../assets/music/futta-dream.mp3';

export const music = new Audio(musicFile);

export const animationTime = 500;
export const fadeOut_DelayTime = 200;
export const fadeOutTime = 500;
export const screen_totalAnimationTime = fadeOut_DelayTime + fadeOutTime;