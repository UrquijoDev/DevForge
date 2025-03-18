function ButtonMember(memberId) {
   
    const infoSections = document.querySelectorAll('.Services-Info');
    
   
    infoSections.forEach(infoSection => {
      infoSection.classList.remove('on'); // Quita la clase "on"
      infoSection.classList.add('off');  // Añade la clase "off"
    });
  
    
    const selectedInfo = document.getElementById(memberId);
    if (selectedInfo) {
      selectedInfo.classList.remove('off'); // Quita la clase "off"
      selectedInfo.classList.add('on');    // Añade la clase "on"
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los miembros
    const members = document.querySelectorAll('.Services-Container-Members > div');
  
    // Asignar un evento onclick a cada miembro
    members.forEach((member, index) => {
      const memberId = `member${index + 1}`; 
      member.onclick = () => ButtonMember(memberId);
    });
  });