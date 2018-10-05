import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({ name: 'filterProducts', pure: false })
export class FilterProducts implements PipeTransform {
  transform(data: any[], tags: any[]) {  // replace the any with your interface for data.
    let ret:any = [];
    if(tags.length == 0){ return ret; }

    data.forEach(element => {
        let nomatch: boolean = true;
        let numMatches: number = 0;

        element.tags.forEach(element => {
            tags.forEach(tag=>{
                if(element == tag){
                    numMatches++;
                }
            })
        });
         if(numMatches == tags.length){
            let np: Product = new Product();
                np.product = element.product;
                np.tags = element.tags;
                np.sortOrder = element.sortOrder;
                ret.push(np);
         }
        // let tempElement = element.tags.sort().join();
        // let tempTags = tags.sort().join();
        //  console.log(tempElement);
        //  console.log(tempTags);
        // if( tempElement.indexOf(tempTags) > -1){
        //     let np: Product = new Product();
        //     np.product = element.product;
        //     np.tags = element.tags;
        //     np.sortOrder = element.sortOrder;
        //     ret.push(np);
        // }

        // var result = element.tags.filter(function(item){ return tags.indexOf(item) > -1});
        // if(result.length > 0){
        //     let np: Product = new Product();
        //     np.product = element.product;
        //     np.tags = element.tags;
        //     np.sortOrder = element.sortOrder;
        //     ret.push(np);
        // }
    });
   //return data.filter(item => tags.some(f => f == item.tags)); //change the condition as you need
    //return data.filter(item => item.tags)
    return ret;
}
}

