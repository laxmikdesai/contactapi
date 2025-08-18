import Swal from 'sweetalert2';
import './CustomAlert.css';

export const showCustomAlert = ({
  title = '',
  text = '',
  icon = 'info',
  showCancelButton = false,
  showConfirmButton = false,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'OK',
  cancelButtonColor = '#808080',
  confirmButtonColor = '#1E88E5', // modern blue
  timer = 2000,
  onConfirm = null,
  onCancel = null,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton,
    showConfirmButton,
    cancelButtonText,
    confirmButtonText,
    cancelButtonColor,
    confirmButtonColor,
    reverseButtons: true,
    customClass: {
      popup: 'custom-swal-popup',
      title: 'custom-swal-title',
      htmlContainer: 'custom-swal-text',
      confirmButton: 'custom-swal-confirm',
      cancelButton: 'custom-swal-cancel',
    },
    timer: !showConfirmButton ? timer : undefined,
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    } else if (result.dismiss === Swal.DismissReason.cancel && onCancel) {
      onCancel();
    }
  });
};
