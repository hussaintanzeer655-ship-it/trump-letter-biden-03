document.addEventListener('DOMContentLoaded',()=>{
  const cards=['Streamlined','Annotated','Brief','Public-Policy','Concise'];
  const wrap=document.getElementById('cards')||document.body.appendChild(document.createElement('div'));
  wrap.id='cards';
  const build=(t)=>`<div class=\"card\"><h3>${escape(t)}</h3><p>Sample card</p></div>`;
  function escape(s){return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m]))}
  document.getElementById('cards')?.innerHTML=cards.map(build).join('');
});