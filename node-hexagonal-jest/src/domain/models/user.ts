export class User {
    id?: number;
    name: string;
    email: string;
  
    constructor(name: string, email: string, id?: number) {
      this.name = name;
      this.email = email;
      if (id) this.id = id;
    }
  }
  