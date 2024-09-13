export interface Photo {
  id: string;            // ID único de la foto
  url: string;           // URL de la foto
  description?: string;  // Descripción de la foto
  comments?: Comment[];  // Comentarios en la foto
  likesCount: number;    // Número de 'likes' que ha recibido la foto
  sharesCount: number;   // Número de veces que la foto ha sido compartida
  createdAt: Date;       // Fecha en que la foto fue subida
}
