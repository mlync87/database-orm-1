const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here
  const createdContact = await prisma.contact.create({
    data: {
      phone: "02844616113",
      email: "ImSickOfErrors@email.com",
      customer: {
        connect: {
          id: createdCustomer.id,
        },
      },
    },
  });

  const createCustomerWithContact = await prisma.customer.create({
    data: {
      name: "Brett Hart",
      contact: {
        create: {
          phone: "02890333333",
          email: "thebesttherewas@gmail.com",
        },
      },
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Aliens",
      runtimeMins: 120,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: 1830,
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
