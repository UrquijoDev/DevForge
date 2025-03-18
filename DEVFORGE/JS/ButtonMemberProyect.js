function ButtonMemberProyect(memberId) {
  // Obtener TODAS las etiquetas de proyecto
  const etiquetas = document.querySelectorAll('.Proyect-label');
  
  // Desactivar todas las etiquetas primero
  etiquetas.forEach(etiqueta => {
    etiqueta.classList.remove('enable');
    etiqueta.classList.add('disable');
  });

  // Activar solo la etiqueta correspondiente al miembro seleccionado
  const selectedMember = document.getElementById(memberId);
  if (selectedMember) {
    selectedMember.classList.remove('disable');
    selectedMember.classList.add('enable');
  }
}

