export class ErrorHelper{

  static getMessage(exception: any): string{    
    if (exception.name == "DataConnectOperationError"){
      const errors = exception.response?.errors;
      if (errors && Array.isArray(errors)){
        const error = errors.map(x => x.message).join("\n");
        return error;
      }
    }
    return "Error: \n" + JSON.stringify(exception);
  }
}