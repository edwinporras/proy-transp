let slide_data = [
    {
      'src':'http://www.diswifarma.com/wp-content/uploads/2021/03/IMG_5171.jpg',
      'title':'Slide 1',
      'copy':'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
    },
    {
      'src':'https://thumbs.dreamstime.com/b/cami%C3%B3n-blanco-de-las-furgonetas-entrega-en-el-estacionamiento-frente-la-entrada-un-almac%C3%A9n-furgoneta-distribuci%C3%B3n-113053568.jpg', 
      'title':'Slide 2',
      'copy':'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
    },
    
    
  ];
  let slides = [],
    captions = [];
  
  let autoplay = setInterval(function(){
    nextSlide();
  },5000);
  let containerSlide = document.getElementById('containerSlide');
  let leftSlider = document.getElementById('left-col');
  // console.log(leftSlider);
  let down_button = document.getElementById('down_button');
  let pre_button = document.getElementById('pre_button');
  let caption = document.getElementById('slider-caption');
  // let caption_heading = caption.querySelector('caption-heading');
  
  down_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });
  pre_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
  });
  
  for (let i = 0; i< slide_data.length; i++){
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');
      
    slide.classList.add('slide');
    slide.setAttribute('style','background:url('+slide_data[i].src+')');
    caption.classList.add('captionSlide');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';
    
    switch(i){
      case 0:
          slide.classList.add('current');
          caption.classList.add('current-caption');
          break;
      case 1:
          slide.classList.add('next');
          caption.classList.add('next-caption');
          break;
      case slide_data.length -1:
        slide.classList.add('previous');
        caption.classList.add('previous-caption');
        break;
      default:
         break;       
    }
    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>');
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    containerSlide.appendChild(caption);
  }
  // console.log(slides);
  
  function nextSlide(){
    // caption.classList.add('offscreen');
    
    slides[0].classList.remove('current');
    slides[0].classList.add('previous','change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    // slides[2].classList.add('next');
    let last = slides.length -1;
    slides[last].classList.remove('previous');
    
    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption','change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    // captions[2].classList.add('next-caption');
    let last_caption = captions.length -1;
    
    // console.log(last);
    captions[last].classList.remove('previous-caption');
    
    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder); 
    captions.push(captions_placeholder);
  }
  
  let heading = document.querySelector('.caption-heading');
  
  
  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");
  
    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }
  
  var transitionEvent = whichTransitionEvent()
  caption.addEventListener(transitionEvent, customFunction);
  
  function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
    console.log('animation ended');
  
    // Do something when the transition ends
  }
  
  
  