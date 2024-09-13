export interface Comment {
  id: string;            // ID único del comentario
  userId: string;        // ID del usuario que hizo el comentario
  userName: string;      // Nombre del usuario que hizo el comentario
  content: string;       // Contenido del comentario
  createdAt: Date;       // Fecha en que se hizo el comentario
}
