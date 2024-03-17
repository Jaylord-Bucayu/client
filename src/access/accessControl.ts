import { newModel, StringAdapter  } from "casbin";


export const model = newModel(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new StringAdapter(`
p, admin, sections, 
p, admin, students, 
p, admin, particulars,
p, admin, clearance,

p, admin, sections/add/*/*,
 
p, student, fees, list
p, student, payments, list


p, parent, clearance, list

`);