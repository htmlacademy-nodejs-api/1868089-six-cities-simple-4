import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map((
        [
          title,
          description,
          postDate,
          city,
          previewImg,
          photos,
          isPremium,
          rating,
          housingType,
          rooms,
          guests,
          price,
          facilities,
          user,
          commentCount,
          coordinates,
        ]
      ) => {
        const [longtitude, latitude] = coordinates.split(';');
        return {
          title,
          description,
          postDate,
          city,
          previewImg,
          photos: photos.split(';'),
          isPremium: !!isPremium,
          rating: Number(rating),
          housingType,
          rooms: Number(rooms),
          guests: Number(guests),
          price: Number(price),
          facilities: facilities.split(';'),
          user: Number(user),
          commentCount: Number(commentCount),
          coordinates: {
            longtitude,
            latitude
          }};
      });
  }
}
