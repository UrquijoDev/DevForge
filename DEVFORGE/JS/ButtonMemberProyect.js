function ButtonMemberProyect(memberClass) {
  // Obtener TODAS las etiquetas de proyecto
  const etiquetas = document.querySelectorAll('.Proyect-label');
  
  // Desactivar todas las etiquetas primero
  etiquetas.forEach(etiqueta => {
    etiqueta.classList.remove('enable');
    etiqueta.classList.add('disable');
  });

  // Activar solo las etiquetas correspondientes al miembro seleccionado
  const selectedMembers = document.querySelectorAll('.' + memberClass);
  selectedMembers.forEach(member => {
    member.classList.remove('disable');
    member.classList.add('enable');
  });
}
