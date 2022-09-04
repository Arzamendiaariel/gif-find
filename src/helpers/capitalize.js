export const Capitalize = (cadena)=>{
    return cadena
          .split(' ')
          .map(element => {
            return (element.charAt(0).toUpperCase() + element.slice(1))
           })
          .join(' ')
  }