let playlist = {deftones:'Minerva'};

/*function updatePlaylist (obj, key, value) {
   let obj2 = Object.assign({},obj, { [key]: value });
   return obj2
  
}*/


function updatePlaylist (obj, key, value) {
   let obj2 = Object.assign({},obj, { [key]: value });
   console.log(obj)
  console.log(obj2)
   return obj2
  
}

function removeFromPlaylist (obj, key) {
  delete obj[key];
  return obj;
}