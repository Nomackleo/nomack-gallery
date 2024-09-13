import { Album } from "./album.interface";
import { Photo } from "./photo.interface";

export interface User {
  uid: string;           // ID único del usuario generado por Firebase
  displayName: string;   // Nombre que el usuario mostrará en la aplicación
  email: string;         // Correo electrónico del usuario
  photoURL?: string;     // Foto de perfil del usuario (opcional)
  phoneNumber?: string;  // Número de teléfono (opcional)
  albums?: Album[];      // Álbumes de fotos creados por el usuario
  likes?: string[];      // Fotos que el usuario ha dado 'like'
  shares?: string[];     // Fotos que el usuario ha compartido
}
