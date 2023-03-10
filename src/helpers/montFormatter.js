const monthFormatter = (month, lang) => {
    switch(month){
      case('01'):
        if(lang === 'RU') {
          return 'Январь'
        }
        else {
          return 'January'  
        }
      case('02'):
        if(lang === 'RU') {
          return 'Февраль'
        }
        else {
          return 'February'  
        }
      case('03'):
        if(lang === 'RU') {
          return 'Март'
        }
        else {
          return 'March'  
        }
      case('04'):
        if(lang === 'RU') {
          return 'Апрель'
        }
        else {
          return 'April'  
        }
      case('05'):
        if(lang === 'RU') {
          return 'Май'
        }
        else {
          return 'May'  
        }
      case('06'):
        if(lang === 'RU') {
          return 'Июнь'
        }
        else {
          return 'June'  
        }
      case('07'):
        if(lang === 'RU') {
          return 'Июль'
        }
        else {
          return 'July'  
        }
      case('08'):
        if(lang === 'RU') {
          return 'Август'
        }
        else {
          return 'August'  
        }
      case('09'):
        if(lang === 'RU') {
          return 'Сентябрь'
        }
        else {
          return 'September'  
        }
      case('10'):
        if(lang === 'RU') {
          return 'Сентябрь'
        }
        else {
          return 'September'  
        }
      case('11'):
        if(lang === 'RU') {
          return 'Ноябрь'
        }
        else {
          return 'November'  
        }
      case('12'):
        if(lang === 'RU') {
          return 'Декабрь'
        }
        else {
          return 'December'  
        }
    }
  }

export default monthFormatter