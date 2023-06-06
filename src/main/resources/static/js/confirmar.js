function confirmarExclusao() {
  swal({
    title: "Tem certeza?",
    text: "O usuário será excluído permanentemente",
    icon: "warning",
    buttons: ["Cancelar", "Excluir"],
    dangerMode: true,
  }).then ((confirmacao) => {
    if (confirmacao) {
      //Usuario opta por excluir
      swal ("Usuario excluído!", {
        icon: "success",
      });
    } else {
      swal ("Operação cancelada", {
        icon : "info",
      })
    }
  })

}