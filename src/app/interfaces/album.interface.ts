import { Photo } from "./photo.interface";

export interface Album {
  id: string;            // ID único del álbum
  title: string;         // Título del álbum
  photos: Photo[];       // Lista de fotos dentro del álbum
  createdAt: Date;       // Fecha de creación del álbum
}
