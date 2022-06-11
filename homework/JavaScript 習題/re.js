let text = "name:ccj age:19 weight:80"
undefined

let re1 = /[0-9]+/g
undefined

text.match(re1)
(2) ['19', '80']

let re2 = /[a-z]+/g
undefined

text.match(re2)
(4) ['name', 'ccj', 'age', 'weight']

let re3 = /:[0-9a-zA-Z]+/g
undefined

text.match(re3)
(3) [':ccj', ':19', ':80']

let re31 = /:([0-9a-zA-Z])+/
undefined
text.match(re31)
(2) [':ccj', 'j', index: 4, input: 'name:ccj age:19 weight:80', groups: undefined]

let re32 = /:([0-9a-zA-Z]+)/
undefined

text.match(re32)
(2) [':ccj', 'ccj', index: 4, input: 'name:ccj age:19 weight:80', groups: undefined]

let re4 = /:\w+/
undefined

text.match(re4)
[':ccj', index: 4, input: 'name:ccj age:19 weight:80', groups: undefined]

let re5 = /:\d+/
undefined

text.match(re5)
[':19', index: 12, input: 'name:ccj age:19 weight:80', groups: undefined]

let re51 = /:\d+/g
undefined

text.match(re51)
(2) [':19', ':80']

let re52 = /:\D+/g
undefined

text.match(re52)
[':ccj age:']

let text1 = 'hello world , ccj , your email is s111010501@student.nqu.edu.tw , how are you !'
undefined

let re6 = /\w+@[\w\.]+/g
undefined

text1.match(re6)
['s111010501@student.nqu.edu.tw']
