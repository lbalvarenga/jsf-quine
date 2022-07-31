// JS with []()\/+

const one = "+!![]"
const zro = "+![]"

const number = (n) => {
  const dgt = (d) => (
    (d === 0) ? zro : Array.from({length:d},()=>one).join("+ ")
  )
  let sign = "+"
  if (n <  0) {n = n.toString().substr(1); sign = "-"}
  return `(${sign}(${n.toString().split("").map(d=>`(${dgt(d)}+[])`).join("+")}))`
}

const string = s => {
  return `(${s.split("").map(c=>{
    if (!(c in map)) {
      return `([]+[])[${c("constructor")}][${c("fromCharCode")}](${number(c.charCodeAt(0))})`
    }
    return map[c]
  }).join("+")})`
}

// fromChadSingcup \

const map = {
  a:    `(![]+[])[${number(1)}]`,
  b:    `({}+[])[${number(2)}]`,
  c:    `({}+[])[${number(5)}]`,
  d:    `([][+![]]+[])[${number(2)}]`,
  e:    `(![]+[])[${number(4)}]`,
  f:    `(![]+[])[${number(0)}]`,
  // g:
  // h:
  i:    `([][+![]]+[])[${number(5)}]`,
  j:    `({}+[])[${number(3)}]`,
  // k:
  l:    `(![]+[])[${number(2)}]`,
  // m:
  n:    `([][+![]]+[])[${number(1)}]`,
  o:    `({}+[])[${number(1)}]`,
  // p:
  r:    `(!![]+[])[${number(1)}]`,
  s:    `(![]+[])[${number(3)}]`,
  t:    `(!![]+[])[${number(0)}]`,
  u:    `(!![]+[])[${number(2)}]`,
  // x:
  " ":  `({}+[])[${number(7)}]`,
  "\\": `(/\\\\/+[])[${number(1)}]`
}

map.S = `(([]+[])[${string("constructor")}]+[])[${number(9)}]`
map.g = `(([]+[])[${string("constructor")}]+[])[${number(14)}]`
map.h = `(${number(17)})[${string("toString")}](${number(18)})`
map.k = `(${number(20)})[${string("toString")}](${number(21)})`
map.m = `((+![])[${string("constructor")}]+[])[${number(11)}]`
map.x = `(/-/[${string("constructor")}]+[])[${number(13)}]`
map.p = `(/-/[${string("constructor")}]+[])[${number(14)}]`
map.C = `(()=>{})[${string("constructor")}](${string("return escape")})()(${string("\\")})[${number(2)}]`

const code = s => `(()=>{})[${string("constructor")}](${string(s)})()`

// console.log(code("console.log('Hello, World!')"))
debugger;