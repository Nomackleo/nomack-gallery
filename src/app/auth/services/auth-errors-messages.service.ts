import { Injectable } from '@angular/core';
import { AuthError } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthErrorsMessagesService {
  // Define un objeto para almacenar los mensajes de error
  private errorMessages: Record<string, string> = {
    // Errores de autenticación de Firebase
    'auth/account-exists-with-different-credential':
      'La cuenta ya existe con un método de autenticación diferente.',
    'auth/anonymous-user-not-allowed':
      'Los usuarios anónimos no están permitidos.',
    'auth/app-deleted': 'La aplicación se ha eliminado.',
    'auth/argument-error': 'Error en el argumento.',
    'auth/auth/cancelled-popup-request':
      'La solicitud de ventana emergente se canceló.',
    'auth/cert-error': 'Error en el certificado.',
    'auth/concurrent-requests': 'Solicitudes concurrentes.',
    'auth/credential-already-in-use': 'La credencial ya está en uso.',
    'auth/credential-mismatch': 'No se pudo verificar la credencial.',
    'auth/custom-token-mismatch': 'El token personalizado no coincide.',
    'auth/email-already-in-use': 'El correo electrónico ya está en uso.',
    'auth/email-exists': 'El correo electrónico ya existe.',
    'auth/expired-action-code': 'El código de acción ha caducado.',
    'auth/expired-id-token': 'El token de identificación ha caducado.',
    'auth/expired-oauth-token': 'El token OAuth ha caducado.',
    'auth/failed-to-create-user': 'No se pudo crear el usuario.',
    'auth/failed-to-delete-user': 'No se pudo eliminar el usuario.',
    'auth/failed-to-send-email-verification':
      'No se pudo enviar el correo electrónico de verificación.',
    'auth/failed-to-send-password-reset-email':
      'No se pudo enviar el correo electrónico de restablecimiento de contraseña.',
    'auth/failed-to-update-user': 'No se pudo actualizar el usuario.',
    'auth/id-token-revoked': 'El token de identificación ha sido revocado.',
    'auth/invalid-action-code': 'El código de acción no es válido.',
    'auth/invalid-api-key': 'La clave de API no es válida.',
    'auth/invalid-cert': 'El certificado no es válido.',
    'auth/invalid-credential': 'La credencial no es válida.',
    'auth/invalid-custom-token': 'El token personalizado no es válido.',
    'auth/invalid-email': 'El correo electrónico no es válido.',
    'auth/invalid-email-verified': 'El correo electrónico no está verificado.',
    'auth/invalid-id-token': 'El token de identificación no es válido.',
    'auth/invalid-password': 'La contraseña no es válida.',
    'auth/invalid-phone-number': 'El número de teléfono no es válido.',
    'auth/invalid-provider-id': 'El ID del proveedor no es válido.',
    'auth/invalid-recipient-email':
      'El correo electrónico del destinatario no es válido.',
    'auth/invalid-session-cookie': 'La cookie de sesión no es válida.',
    'auth/invalid-tenant-id': 'El ID del inquilino no es válido.',
    'auth/invalid-user-token': 'El token de usuario no es válido.',
    'auth/invalid-verification-code': 'El código de verificación no es válido.',
    'auth/invalid-verification-id': 'El ID de verificación no es válido.',
    'auth/operation-not-allowed': 'Esta operación no está permitida.',
    'auth/password-mismatch': 'Las contraseñas no coinciden.',
    'auth/phone-number-already-exists': 'El número de teléfono ya existe.',
    'auth/provider-already-linked': 'El proveedor ya está vinculado.',
  };

  // Método para obtener el mensaje de error correspondiente
  getErrorMessage(error: AuthError | undefined ): string {
    if (!error || !error.code) {
      return 'Ha ocurrido un error desconocido.';
    }

    const message = this.errorMessages[error.code];
    return (
      message ||
      'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.'
    );
  }
}
