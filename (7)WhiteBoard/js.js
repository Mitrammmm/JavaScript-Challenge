document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('whiteboard');
  const ctx = canvas.getContext('2d');
  const colorPicker = document.getElementById('colorPicker');
  const eraseButton = document.getElementById('eraseButton');
  const clearButton = document.getElementById('clearButton');

  //  canvas size
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 100;

  let isDrawing = false;
  let isErasing = false;
  let markerColor = colorPicker.value;

  let messages = [];

  colorPicker.addEventListener('input', changeMarkerColor);
  eraseButton.addEventListener('click', toggleErasing);
  clearButton.addEventListener('click', clearCanvas);

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', handleDrawing);
  canvas.addEventListener('contextmenu', handleErase);

  function startDrawing(e) {
    isDrawing = true;
    handleDrawing(e);
  }

  function stopDrawing() {
  if (isDrawing) {
      isDrawing = false;
      ctx.closePath(); 
      ctx.beginPath(); 
  }
}

    

  function handleDrawing(e) {
    if (!isDrawing) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = markerColor;

    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;

    if (isErasing) {
      const eraseData = {
        action: 'erase',
        x,
        y,
      };
      erase(eraseData);
      messages.push(eraseData);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();

      const drawData = {
        action: 'draw',
        x,
        y,
        color: markerColor,
      };
      messages.push(drawData);
    }
  }

  function handleErase(e) {
    e.preventDefault(); 
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;

    const eraseData = {
        action: 'erase',
        x,
        y,
    };

    erase(eraseData);
    messages.push(eraseData);
}


  

  function erase(data) {
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(data.x, data.y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      ctx.restore(); 
    }
    

  function toggleErasing() {
    isErasing = !isErasing;
    eraseButton.classList.toggle('active', isErasing);

    eraseButton.style.backgroundColor = isErasing ? 'blue' : '';
  }

  

  function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath(); 
    
      const clearData = {
        action: 'clear',
      };
      messages.push(clearData);
    }
    

  function changeMarkerColor() {
    markerColor = colorPicker.value;
  }

  setInterval(() => {
    while (messages.length > 0) {
      const data = messages.shift();

      if (data.action === 'draw') {
        draw(data);
      } else if (data.action === 'erase') {
        erase(data);
      } else if (data.action === 'clear') {
        clearCanvas();
      }
    }
  }, 100);
});

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveCanvas);

function saveCanvas() {
    const dataUrl = canvas.toDataURL(); 

    
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'whiteboard_image.png'; 

    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    a.dispatchEvent(clickEvent);
}




