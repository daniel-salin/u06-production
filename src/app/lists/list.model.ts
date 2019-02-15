import { Recipes } from './../recipes/recipe.model'

export class Lists {
    constructor(
        public id: string, 
        public title: string, 
        public recipes: Recipes[]
    ) {}
}