
// main.js - lightweight carousel and dynamic load
document.addEventListener('DOMContentLoaded', function(){
  // simple horizontal scroll arrows for carousels
  document.querySelectorAll('.carousel').forEach(function(car){
    const left = car.parentElement.querySelector('.scr-left');
    const right = car.parentElement.querySelector('.scr-right');
    if(left) left.addEventListener('click', ()=> car.scrollBy({left:-260, behavior:'smooth'}));
    if(right) right.addEventListener('click', ()=> car.scrollBy({left:260, behavior:'smooth'}));
  });

  // load churches data
  fetch('assets/data_igrejas.json').then(r=>r.json()).then(data=>{
    const list = document.getElementById('igrejas-list');
    if(!list) return;
    data.forEach(i=>{
      const div = document.createElement('div');
      div.className='card igreja';
      const img = document.createElement('img');
      img.src = 'assets/img/' + i.photo;
      img.alt = i.name;
      const meta = document.createElement('div');
      meta.innerHTML = `<strong>${i.name}</strong><div class="small">${i.leader}</div><div style="margin-top:8px"><a href="${i.instagram}" target="_blank" class="btn btn-ghost">Instagram</a></div>`;
      div.appendChild(img); div.appendChild(meta); list.appendChild(div);
    });
  }).catch(e=>{ console.warn('Could not load igrejas data', e) });
});
