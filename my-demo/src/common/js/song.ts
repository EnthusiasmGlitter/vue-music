export interface SongCreator {
  new(image: string, name: string): songInterface;
}

 export interface songInterface {
}

export function createRecommendSong(ctor: SongCreator, image: string, name: string): songInterface {
  return new ctor(image, name);
}

export class Song implements songInterface {
  constructor(image: string, name: string) {
  }
}


