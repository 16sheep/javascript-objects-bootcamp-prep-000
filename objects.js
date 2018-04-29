let playlist = {deftones:'Minerva'};

function updatePlaylist (obj, key, value) {
   let obj2 = {[key]:value}
   console.log(obj)
  
}


function removeFromPlaylist (obj, key) {
  delete obj[key];
  return obj;
}