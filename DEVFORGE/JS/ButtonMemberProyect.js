function ButtonMemberProyect(memberId) {

  const selectedMember = document.getElementById('member1'); 
  const etiqueta = document.querySelectorAll('.Proyect-label'); 
  
  etiqueta.forEach(etiqueta => {
    etiqueta.classList.remove('enable');
    etiqueta.classList.add('disable');
    console.log("xd")
  });
  selectedMember.classList.add('enable');
  
//   if (selectedMember) {
//     selectedMember.classList.add('enable');
//   }
  
//   if (selectedMember) {
//     etiqueta.classList.add('enable');
//   }

}

