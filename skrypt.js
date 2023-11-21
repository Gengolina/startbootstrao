function openOverlay(text, imageName) {
    var overlayImage = document.getElementById("overlayImage");
    overlayImage.src = imageName;
  
    // Opóźnij ustawienie opacity dla efektu animacji
    setTimeout(function () {
      document.getElementById("overlay").style.opacity = 1;
    }, 10);
  
    document.getElementById("overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
  
    // Ustawienie tekstu w elemencie p w overlay
    document.getElementById("overlayText").innerText = text;
  }
  
  function closeOverlay() {
    document.getElementById("overlay").style.opacity = 0;
  
    // Opóźnij ukrycie overlay po zakończeniu animacji
    setTimeout(function () {
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
    }, 500); // Czas trwania animacji (w milisekundach), musi być taki sam jak w transition
  }
  




  window.onscroll = function() 
  {
    shrinkBanner();
    BannerColor();
  };



  function shrinkBanner() {
    var banner = document.getElementById('baner');

    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      banner.classList.add('shrinked');
    } else {
      banner.classList.remove('shrinked');
    }
  }



  function BannerColor() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
    var div1 = document.getElementById('colordiv');
    var div2 = document.getElementById('colordiv2');
    var div3 = document.getElementById('colordiv3');
  
    if (scrollTop > 500 && scrollTop < 1400) {
      div1.classList.add('bcolor');
      div2.classList.remove('bcolor');
      div3.classList.remove('bcolor');
    } else if (scrollTop >= 1400 && scrollTop < 2000) {
      div1.classList.remove('bcolor');
      div2.classList.add('bcolor');
      div3.classList.remove('bcolor');
    } else if (scrollTop >= 2000) {
      div1.classList.remove('bcolor');
      div2.classList.remove('bcolor');
      div3.classList.add('bcolor');
    } else {
      div1.classList.remove('bcolor');
      div2.classList.remove('bcolor');
      div3.classList.remove('bcolor');
    }
  }
  
  // Dodaj listener do zdarzenia scroll
  window.addEventListener('scroll', BannerColor);
  



/*
  function BannerColor() {
    var banner = document.getElementById('colordiv');

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop < 1600) {
      banner.classList.add('bcolor');
    } else {
      banner.classList.remove('bcolor');
    }
  }





/*


  window.onscroll = function() {
    BannerColor();
  };

  function BannerColor() {
    var banner = document.getElementById('li2');

    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      banner.classList.add('bcolor');
    } else {
      banner.classList.remove('bcolor');
    }
  }
  */