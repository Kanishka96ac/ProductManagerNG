import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(val: string, character: string): string {
        return val.replace(character, ' ');       
    }
}