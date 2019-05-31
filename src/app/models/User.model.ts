export class User {
    constructor(
        //Ce modèle pourra donc être utilisé dans le reste de l'application 
        //en l'important dans les components où vous en avez besoin
        //Cette synthaxe permet l'utilisation du mot-clé "new"
        // ex: const user = new User('James', 'Smith', 'james@james.com', 'jus d\'orange', ['football', 'lecture'])
      public firstName: string,
      public lastName: string,
      public email: string,
      public drinkPreference: string,
      public hobbies?: string[]
    ) {}
  }