export default class UserService{
    constructor(loggerService){
        this.users = []
<<<<<<< HEAD
        this.loggerService = loggerService
=======
        this.loggerService =loggerService
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u=>u.id ===id)
    }

}