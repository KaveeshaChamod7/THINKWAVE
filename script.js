setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    
    document.getElementById('main-content').style.display = 'block';
    
    document.querySelector('.main-text').classList.add('move-up');
  
    setTimeout(() => {
      document.querySelector('.button-container').style.display = 'flex';
    }, 500);
  }, 2000);
  