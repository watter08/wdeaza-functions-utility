//@ts-check
const uuid = require('uuid');


/*************************************************************
 * GET UNIQUE ID OF KEY
 * **********************************************************/

/** 
 * Functions that return a string with a unic key code.
 * @type {string | any}
 */
 const GetUuId = () =>  uuid.v4().toString();


/*************************************************************
 * HAS ERROR AND SHOW ERROR
 * **********************************************************/

  const HasErrorShowError = (errors) => { 
   for(var err in errors) {
     console.log(errors[err])
   }
   return Object.entries(errors).length > 0;
  };




/*************************************************************
 * VALIDAR SI EL INPUT TIENE ERRORES DE VALIDACION
 * **********************************************************/

     const isInvalidInput = (errors, name)   => {  return errors && errors[name] ? true : false };

     const isInvalidInputChild = (errors, name)   => {  
        return Object.entries(errors).length <= 0 ? false :  errors && errors?.Formulario[name.split('.')[1]] ? true : false ;    
    };


/*************************************************************
 * IF VALID PHONE
 * **********************************************************/
  
   function isValidPhone(string = "")   {
    const regEx = /^(\()?\d{3}-?(\))?\d{3}-?\d{4}$/;
    return (string && string.match(regEx)) ? true : false;
  }

  
 /*************************************************************
 * IS HAS ENOUGTH CHARACTER
 * **********************************************************/

   const hasEnoughLength = (string, minimunCount)   => {
    const regEx = /[a-zA-Z\t\h]+|(^$)/;
    return (string?.length >= minimunCount && string.match(regEx) && string?.trim()) ? true : false;
  };



 /*************************************************************
 * IS VALID NUMBER
 * **********************************************************/

   const isNumberValid = (number)   => {
    return typeof number === 'number' && isFinite(number);
  }



 /*************************************************************
 * IS VALID EMAIL
 * **********************************************************/

   const isValidEmail = (string)   => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return (string && string.match(regEx)) ?true : false;
  }


/*************************************************************
 * IS EMPTY ARRAY
 * **********************************************************/

   const isEmptyArray = (array)  => {
    return (array && array.length === 0) ? true : false;
  }
  

/*************************************************************
 * IS EMP TY OBJECT
 * **********************************************************/

   const isEmptyObject = (obj)   => {
    return Object.keys(obj).length === 0;
  }


 /*************************************************************
 * IS VALID DATE
 * **********************************************************/
   const isValidDate = (date)  =>  {
    return date instanceof Date  && Object.prototype.toString.call(date) === '[object Date]';
  }
  


 /*************************************************************
 * IS VALID PASSWORD
 * **********************************************************/

   const isValidPassword = (string)  => {
    const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return (string && string.match(regEx)) ? true : false;
  }


 /*************************************************************
 * IS BOOLEAN
 * **********************************************************/

   const isBooleano = (bool)   => {
    return 'boolean' === typeof bool;
  }


 /*************************************************************
 * IS MATCH STRING
 * **********************************************************/

   const isMatchString = (NewPassword , OldPassword)   => {
    return NewPassword?.toString()?.toLowerCase() === OldPassword?.toString()?.toLowerCase() ? true : false;
}

const isInRange = (Min , Max , Valor) => Number(Valor) >= Number(Min) && Number(Valor) <= Number(Max) ;

module.exports = {
    isMatchString,
    isBooleano,
    isValidPassword,
    isValidDate,
    isEmptyObject,
    isEmptyArray,
    isValidEmail,
    isNumberValid,
    hasEnoughLength,
    isValidPhone,
    isInvalidInputChild,
    isInvalidInput,
    HasErrorShowError,
    GetUuId,
    isInRange
}