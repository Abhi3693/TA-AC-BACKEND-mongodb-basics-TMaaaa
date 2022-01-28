// 1. Create a database named `blog`.

// 2. Create a collection called 'articles'.
// 3. Insert multiple documents(at least 3) into articles. It should have fields

// - title as string
// - createdAt as date
// - details as String
// - author as nested object
//   - author should have
//     - name
//     - email
//     - age
//     - example author: {name: 'abc', email: 'abc@gmail', age: 25}
// - tags : Array of strings like ['html', 'css']

let all = [
  {
    title: 'Abhijeet',
    created: 28 / 06 / 2000,
    detailes: 'This about abhijeet',
    author: {
      name: 'XYZ',
      email: 'xzy@gmail.com',
      age: 20,
    },
    tags: ['html', 'css'],
  },
  {
    title: 'sanmit',
    created: 12 / 03 / 1990,
    detailes: 'This about sanmit',
    author: {
      name: 'SDF',
      email: 'sdf@gmail.com',
      age: 25,
    },
    tags: ['js', 'sdf'],
  },
  {
    title: 'Datta',
    created: 15 / 01 / 1999,
    detailes: 'This about datta',
    author: {
      name: 'BNM',
      email: 'bnm@gmail.com',
      age: 30,
    },
    tags: ['scss', 'index.md'],
  },
];
