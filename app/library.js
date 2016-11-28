module.exports = {

dataTypes: function(data) {
  type = Object.prototype.toString.call(data).slice(8, -1);
  if(type == 'String'){
    return data.length;
  }else if (type == 'Null' || type == 'Undefined'){
    return 'no value';
  }else if(type == 'Boolean'){
    return data;
  }else if(type == 'Number'){
    if (data < 100){
      return 'less than 100';
    }else if (data === 100){
      return 'equal to 100';
    }else{
      return 'more than 100';
    }
  }else if(type == 'Array'){
    if (data.length >= 3){
      return data[2];
    }else{
      return undefined;
   }
  }else if (type === 'Function'){
    return data(true);
  }
}
}