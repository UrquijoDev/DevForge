function showMember(memberId, proyectId) {
  const members = document.querySelectorAll('.team-member');
  const proyects = document.querySelectorAll('.team-member-proyect'); 
  
  members.forEach(member => {
    member.classList.remove('active');
  });

  proyects.forEach(proyect => {
    proyect.classList.remove('active');
  });

  const selectedMember = document.getElementById(memberId);
  const selectedProyect = document.getElementById(proyectId);
  
  if (selectedMember) {
    selectedMember.classList.add('active');
  }
  
  if (selectedProyect) {
    selectedProyect.classList.add('active');
  }
}