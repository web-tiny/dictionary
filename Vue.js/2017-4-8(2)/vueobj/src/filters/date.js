import {fillzero} from './fillzero'

export const date=(input)=>{
  var d=new Date();
  d.setTime(input);
  return `
    ${fillzero(d.getFullYear())}年
    ${fillzero(d.getMonth()+1)}月
    ${fillzero(d.getDate())}日 
    ${fillzero(d.getHours())}:
    ${fillzero(d.getMinutes())}:
    ${fillzero(d.getSeconds())}
    `
};