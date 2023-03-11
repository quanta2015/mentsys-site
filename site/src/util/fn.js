export const isN=(e)=>{
  return  ((e===null)||(e==='')||(e===undefined))?true:false
}

export const isMobile =(width)=>{ 
  return document.querySelector('html').clientWidth<width
}


export const scrollToBottom =(direction)=> {
  setTimeout(() =>{
    const el = document.getElementById("chatContent")
    if(el) {
      el.scrollTop = el.scrollHeight;
    }
  }, 100)
}


// export const formatTime = (dateStr)=> {
//   var publishTime
//   if (dateStr && dateStr.toString().length <= 10) {
//     publishTime = dateStr
//   } else if (dateStr && dateStr.toString().length > 10){
//     publishTime = getDateTimeStamp(dateStr) / 1000
//   }
  
//     var d_seconds,
//     d_minutes,
//     d_hours,
//     d_days,
//     timeNow = parseInt(new Date().getTime() / 1000),
//     d,
//     date = new Date(publishTime * 1000),
//     Y = date.getFullYear().toString().slice(2),
//     M = date.getMonth() + 1,
//     D = date.getDate(),
//     H = date.getHours(),
//     m = date.getMinutes(),
//     s = date.getSeconds();
//   d = timeNow - publishTime;
  
//   if (H < 10) {
//     H = "0" + H;
//   }
//   if (m < 10) {
//     m = "0" + m;
//   }
//   if (s < 10) {
//     s = "0" + s;
//   }
//   d_days = parseInt(d / 86400)
//   d_hours = parseInt(d / 3600);
//   d_minutes = parseInt(d / 60);
//   d_seconds = parseInt(d);
//   if (d_days > 0 && d_days < 3) {
//     if(d_days == 1){
//         return "昨天";
//     }else if(d_days == 2){
//         return "前天";
//     }
//   } else if (d_days <= 0 && d_hours > 0) {
//     // return d_hours + "小时前";
//     if (new Date().getHours() !==  d_hours && new Date().getHours() < d_hours) {
//       return '昨天'
//     } 
//     return  H + ':' + m
//   } else if (d_hours <= 0 && d_minutes > 0) {
//     return d_minutes + "分钟前";
//   } else if (d_seconds < 60) {
//       return '刚刚'
//   } else if (d_days >= 3 && d_days < 30) {
//     return Y + "/" + M + "/" + D ;
//   } else if (d_days >= 30) {
//     return Y + "/" + M + "/" + D;
//   }
// }