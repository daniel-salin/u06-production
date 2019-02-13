export class Recipes {
    constructor(
        public id: string, 
        public title: string, 
        public image: string, 
        public url: string,
        public healthLabels: string,
        public dietLabels: string,
        public ingredientLines: Array<string>,
        public calories: number,
        public display: string
    ) {}

}