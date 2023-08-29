import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  await prisma.school.createMany({
    data: [
      {
        id: '52e52322-244f-4050-90f7-92e242419cb1',
        name: 'Dados',
      },

      {
        id: '028baac4-46ae-11ee-be56-0242ac120002',
        name: 'Tecnologia',
      },
      {
        id: '09fb0336-46ae-11ee-be56-0242ac120002',
        name: 'Produto',
      }
    ]
  })

  await prisma.student.create({
    data: {
      id: '0f879d78-46ae-11ee-be56-0242ac120002',
      name: 'Aluno de Tecnologia',
      id_school: '028baac4-46ae-11ee-be56-0242ac120002',
    }
  })

  await prisma.grade.create({
    data: {
      id: '1289511a-46ae-11ee-be56-0242ac120002',
      note: 7.6,
      points: 76,
      id_student: '0f879d78-46ae-11ee-be56-0242ac120002'
    }
  })
}

main()
  .then(async () => {
    console.log('Seed created')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log('Error created seed')
    await prisma.$disconnect()
    process.exit(1)
  })
