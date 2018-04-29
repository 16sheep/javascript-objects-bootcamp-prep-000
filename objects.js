let playlist = {deftones:'Minerva'};

function updatePlaylist (obj, key, value) {
   let obj2 = Object.assign({}, { [key]: value }, obj);
   return obj2
  
}


function removeFromPlaylist (obj, key) {
  delete obj[key];
  return obj;
}