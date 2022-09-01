import { faker } from '@faker-js/faker';

async function generate_data() {
  let web_presence = [];
  let n = Math.floor(Math.random() * 4);
  for (let i = 0; i < n; i++) {
    web_presence.push(faker.internet.url());
  }

  let skills = [];
  n = Math.floor(Math.random() * 4);
  for (let i = 0; i < n; i++) {
    web_presence.push(faker.internet.url());
  }

  let organisation = {
    name: faker.company.name(),
    job: faker.name.jobType(),
    pos: faker.name.jobTitle(),
    address: faker.name.jobArea(),
  };

  let age = faker.datatype.number({ min: 25, max: 60 });

  return {
    name: faker.name.fullName(),
    age,
    web_presence,
    skills,
    organisation,
    years: age * 0.3 < 5 ? 5 : age * 0.3,
    url: "",
    meeting: {
      at: faker.date.recent(),
      street: faker.address.streetAddress(),
      city: faker.address.city(),
    },
    impression: "",
    gender: faker.name.sex(),
    contact_number: faker.phone.number(),
    contact_email: {
      home: faker.internet.email(),
      work: faker.internet.email(),
    },
    related: []
  }
}

console.log(await generate_data());
