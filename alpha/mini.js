var r="constructor",
a=f=>f==0?'+![]':Array.from({length:f},()=>'+!![]').join("+ "),
c=f=>(`(${f.split("").map(o=>(!(o in map)?`([]+[])[${string(r)}][${string("fromCharCode")}](${number(o.charCodeAt(0))})`:map[o])).join("+")})`),
s=f=>`(()=>{})[${string(r)}](${string(f)})()`,
map={
  a:`(![]+[])[${number(1)}]`,
  c:`({}+[])[${number(5)}]`,
  d:`([][+![]]+[])[${number(2)}]`,
  e:`(![]+[])[${number(4)}]`,
  f:`(![]+[])[${number(0)}]`,
  i:`([][+![]]+[])[${number(5)}]`,
  n:`([][+![]]+[])[${number(1)}]`,
  o:`({}+[])[${number(1)}]`,
  r:`(!![]+[])[${number(1)}]`,
  s:`(![]+[])[${number(3)}]`,
  t:`(!![]+[])[${number(0)}]`,
  u:`(!![]+[])[${number(2)}]`,
  " ":`({}+[])[${number(7)}]`,
  "\\":`(/\\\\/+[])[${number(1)}]`
}
map.S=`(([]+[])[${string(r)}]+[])[${number(9)}]`
map.g=`(([]+[])[${string(r)}]+[])[${number(14)}]`
map.h=`(${number(17)})[${string("toString")}](${number(18)})`
map.m=`((+![])[${string(r)}]+[])[${number(11)}]`
map.p=`(/-/[${string(r)}]+[])[${number(14)}]`
map.C=`(()=>{})[${string(r)}](${string("return escape")})()(${string("\\")})[${number(2)}]`

debugger;
