server_url = 'http://192.168.43.125:3004/api/'
function sedang_proses(){
  $.blockUI({ 
    message: "Sedang Diproses", 
    css: { 
    border: 'none', 
    padding: '15px', 
    backgroundColor: '#000', 
    '-webkit-border-radius': '10px', 
    '-moz-border-radius': '10px', 
    opacity: .5, 
    color: '#fff' 
  } });
}