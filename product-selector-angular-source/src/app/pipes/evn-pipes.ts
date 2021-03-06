import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'filterProducts', pure: false })
export class FilterProducts implements PipeTransform {
  transform(data: any[], tags: any[]) {  // replace the any with your interface for data.
    let ret:any = [];
    if(tags.length < 2 ){ return ret; } // If the selected products array is empty or only has the country tag in it, return empty array.

    data.forEach(element => {
        let nomatch: boolean = true;
       // let match: boolean = false;
      //  let numMatches: number = 0;
       // let count: number = 0;
        var test: any = tags.every(val => element.tags.includes(val)); 
        //console.log("test: " + test);

        // element.tags.forEach(element => {
        //     tags.forEach(tag=>{
        //         if(element == tag){
        //            // numMatches++;
        //         }
        //     })

        //     count++;
        // });
         if(test){
            let np: Product = new Product();
                np.product = element.product;
                np.tags = element.tags;
                np.class = element.class;
                np.sortOrder = element.sortOrder;
                np.bullets = element.bullets;
                np.image = element.image;
                ret.push(np);
         }
       
    });
   //return data.filter(item => tags.some(f => f == item.tags)); //change the condition as you need
    //return data.filter(item => item.tags)
    return ret;
}
}

@Pipe({
    name: 'safe'
  })
  export class SafePipe implements PipeTransform {
  
    constructor(protected sanitizer: DomSanitizer) {}
   
   public transform(value: any, type: string): SafeHtml | SafeStyle | SafeUrl | SafeResourceUrl {
      switch (type) {
              case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
              case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
              //case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
              case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
              case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
              default: throw new Error(`Invalid safe type specified: ${type}`);
          }
    }
  }

