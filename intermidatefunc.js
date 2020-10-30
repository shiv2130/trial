function getUserRole(name, role){
      switch (role) {
               case "admin":
                        return `YaY!! you  have all access now ${name}!`
                        break;//this is not necessary
               case "subadmin":
                        return `You  have  access create and delete code ${name}!`
                        break;         
                 
               default:
                        return `you are a new ${name}`
                        break;
      }
}
console.log(getUserRole("Shivanshu", "admin"))