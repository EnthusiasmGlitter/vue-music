
interface SongCreator {
  new(id: number, singer: string, name: string, album: any, image: string): Song;
}

export function createRecommendSong (ctor: SongCreator, id: number, singer: string, name: string, album: any, image: string):songInterface{
  return new ctor(id, singer, name, album, image);
  
}

export class Song {
   constructor(id: number, singer: string, name: string, album: any, image: string) {
  }
}

