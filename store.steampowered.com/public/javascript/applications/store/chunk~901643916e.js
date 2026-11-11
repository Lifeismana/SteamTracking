/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

var e = `%1$s ชั่วโมง`,
  t = `%1$s นาที`,
  n = `เมื่อเร็ว ๆ นี้ได้เล่นไป %1$s`,
  r = `เวลาที่เล่นไปรวมทั้งหมด %1$s`,
  i = {
    Playtime_Hours: e,
    Playtime_Minutes: t,
    Playtime_Recently: n,
    Playtime_Total: r,
  };
export {
  e as Playtime_Hours,
  t as Playtime_Minutes,
  n as Playtime_Recently,
  r as Playtime_Total,
  i as default,
};
