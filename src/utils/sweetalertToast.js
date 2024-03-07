import Swal from 'sweetalert2'

export function toastSuccess(title) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    toast: true,
    timer: 1500
  })
}

export function toastError(title) {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: title,
    showConfirmButton: false,
    toast: true,
    timer: 1500
  })
}