<<<<<<< HEAD
export class BaseLogger {
  log(data) {
        console.log("default logger" + data)
  }
}

export class ElasticLogger extends BaseLogger{
    log(data) {
        console.log("logged to Elastic" + data)
    }
  }

  export class MongoLogger extends BaseLogger{
    log(data) {
        console.log("logged to Mongo" + data)
    }
  } 
=======
export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
