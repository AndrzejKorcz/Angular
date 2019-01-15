import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToCharacter'
})
export class ConvertToCharacterPipe implements PipeTransform {
 transform(value: string, oldChar: string, newChar: string): string {
  return value.replace(new RegExp(oldChar, 'g'), newChar);
 }
}
