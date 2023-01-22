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

  const createdScreen = await prisma.screen.create({
    data: {
      screenNumber: 2,
    },
  });

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: 1830,
      movie: {
        connect: {
          id: createdMovie.id,
        },
      },
      screen: {
        connect: {
          id: createdScreen.id,
        },
      },
    },
  });

  const createMovieWithScreenings = await prisma.movie.create({
    data: {
      title: "The Blair Witch Project",
      runtimeMins: 89,
      screenings: {
        create: [
          {
            startsAt: 1745,
            screen: {
              connect: {
                id: createdScreen.id,
              },
            },
          },
        ],
      },
    },
  });

  const createTicketWithCustomerAndScreeningInfo = await prisma.ticket.create({
    data: {
      customer: {
        connect: {
          id: createdCustomer.id,
        },
      },
      screening: {
        connect: {
          id: createdScreening.id,
        },
      },
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
