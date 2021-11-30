const loadAstroNlg = (callback) => {  
    const existingScript = document.getElementById('astroNlg');  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'compiled_en_US.js';    
    script.id = 'astroNlg';
    document.body.appendChild(script);    
    script.onload = () => { 
      if (callback) callback();
    };
  }  
  if (existingScript && callback) callback();
};

const loadRosaeNlg = (callback) => {  
    const existingScript = document.getElementById('rosaeNlg');  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'rosaenlg_tiny_en_US_3.0.2.js';    
    script.id = 'rosaeNlg';
    document.body.appendChild(script);    
    script.onload = () => { 
      if (callback) callback();
    };
  }  
  if (existingScript && callback) callback();
};

var renderHouseDetail = function (inputData) {
    var rendered = window.template({
        util: new window.rosaenlg_en_US.NlgLib({language: 'en_US'}),
        inputData: inputData
    });
    return rendered;
}

export {
    loadAstroNlg,
    loadRosaeNlg,
    renderHouseDetail,
}