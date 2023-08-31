import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  await prisma.school.createMany({
    data: [
      {
        id: '52e52322-244f-4050-90f7-92e242419cb1',
        name: 'Dados',
      }, {
        id: '028baac4-46ae-11ee-be56-0242ac120002',
        name: 'Tecnologia',
      }, {
        id: '09fb0336-46ae-11ee-be56-0242ac120002',
        name: 'Produto',
      }
    ]
  })

  await prisma.student.createMany({
    data: [
      {
        id: '1f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Maria de Dados',
        points: 176,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '2f879d78-46ae-11ee-be56-0242ac120002',
        name: 'João de Dados',
        points: 166,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '3f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Carlos de Dados',
        points: 156,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '4f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Felipe de Tecnologia',
        points: 176,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '5f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Julia de Tecnologia',
        points: 166,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '6f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Romeu de Tecnologia',
        points: 156,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '7f879d78-46ae-11ee-be56-0242ac120002',
        name: 'José de Produto',
        points: 176,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      }, {
        id: '8f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Marcia de Produto',
        points: 166,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      }, {
        id: '9f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Nair de Produto',
        points: 156,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      },
    ]
  })

  await prisma.grade.createMany({
    data: [
      {
        id: '1289511a-46ae-11ee-be56-0242ac120002',
        note: 10,
        points: 100,
        student_id: '1f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '2289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '1f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '3289511a-46ae-11ee-be56-0242ac120002',
        note: 9,
        points: 90,
        student_id: '2f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '4289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '2f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '5289511a-46ae-11ee-be56-0242ac120002',
        note: 80,
        points: 80,
        student_id: '3f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '6289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '3f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '7289511a-46ae-11ee-be56-0242ac120002',
        note: 10,
        points: 100,
        student_id: '4f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '8289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '4f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '9289511a-46ae-11ee-be56-0242ac120002',
        note: 9,
        points: 90,
        student_id: '5f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '10289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '5f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '11289511a-46ae-11ee-be56-0242ac120002',
        note: 80,
        points: 80,
        student_id: '6f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '12289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '6f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '13289511a-46ae-11ee-be56-0242ac120002',
        note: 10,
        points: 100,
        student_id: '7f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '14289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '7f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '15289511a-46ae-11ee-be56-0242ac120002',
        note: 9,
        points: 90,
        student_id: '8f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '16289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '8f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '17289511a-46ae-11ee-be56-0242ac120002',
        note: 80,
        points: 80,
        student_id: '9f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '18289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '9f879d78-46ae-11ee-be56-0242ac120002'
      }
    ]
  })
}

main()
  .then(async () => {
    console.log('Seed created')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(`Error created seed: ${e}`)
    await prisma.$disconnect()
    process.exit(1)
  })
