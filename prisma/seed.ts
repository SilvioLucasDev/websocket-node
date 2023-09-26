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
        name: 'Camila de Dados',
        points: 70,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '2f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Renato de Dados',
        points: 122,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '3f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Fabiano de Dados',
        points: 58,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '4f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Lais de Tecnologia',
        points: 111,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '5f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Fernanda de Tecnologia',
        points: 149,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '6f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Enoque de Tecnologia',
        points: 110,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '7f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Joaquim de Produto',
        points: 43,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      }, {
        id: '8f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Pedro de Produto',
        points: 133,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      }, {
        id: '9f879d78-46ae-11ee-be56-0242ac120002',
        name: 'Pietra de Produto',
        points: 88,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      },{
        id: '1f879d78-46ae-11ee-be56-0242ac120001',
        name: 'Maria de Dados',
        points: 200,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '2f879d78-46ae-11ee-be56-0242ac120022',
        name: 'João de Dados',
        points: 166,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '3f879d78-46ae-11ee-be56-0242ac120003',
        name: 'Carlos de Dados',
        points: 156,
        school_id: '52e52322-244f-4050-90f7-92e242419cb1'
      }, {
        id: '4f879d78-46ae-11ee-be56-0242ac120004',
        name: 'Felipe de Tecnologia',
        points: 186,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '5f879d78-46ae-11ee-be56-0242ac120005',
        name: 'Julia de Tecnologia',
        points: 166,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '6f879d78-46ae-11ee-be56-0242ac120006',
        name: 'Romeu de Tecnologia',
        points: 156,
        school_id: '028baac4-46ae-11ee-be56-0242ac120002'
      }, {
        id: '7f879d78-46ae-11ee-be56-0242ac120007',
        name: 'José de Produto',
        points: 176,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      }, {
        id: '8f879d78-46ae-11ee-be56-0242ac120008',
        name: 'Marcia de Produto',
        points: 166,
        school_id: '09fb0336-46ae-11ee-be56-0242ac120002'
      }, {
        id: '9f879d78-46ae-11ee-be56-0242ac120009',
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
        student_id: '1f879d78-46ae-11ee-be56-0242ac120001'
      }, {
        id: '2289511a-46ae-11ee-be56-0242ac120002',
        note: 10,
        points: 100,
        student_id: '1f879d78-46ae-11ee-be56-0242ac120001'
      }, {
        id: '3289511a-46ae-11ee-be56-0242ac120002',
        note: 9,
        points: 90,
        student_id: '2f879d78-46ae-11ee-be56-0242ac120022'
      }, {
        id: '4289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '2f879d78-46ae-11ee-be56-0242ac120022'
      }, {
        id: '5289511a-46ae-11ee-be56-0242ac120002',
        note: 80,
        points: 80,
        student_id: '3f879d78-46ae-11ee-be56-0242ac120003'
      }, {
        id: '6289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '3f879d78-46ae-11ee-be56-0242ac120003'
      }, {
        id: '7289511a-46ae-11ee-be56-0242ac120002',
        note: 10,
        points: 100,
        student_id: '4f879d78-46ae-11ee-be56-0242ac120004'
      }, {
        id: '8289511a-46ae-11ee-be56-0242ac120002',
        note: 8.6,
        points: 86,
        student_id: '4f879d78-46ae-11ee-be56-0242ac120004'
      }, {
        id: '9289511a-46ae-11ee-be56-0242ac120002',
        note: 9,
        points: 90,
        student_id: '5f879d78-46ae-11ee-be56-0242ac120005'
      }, {
        id: '10289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '5f879d78-46ae-11ee-be56-0242ac120005'
      }, {
        id: '11289511a-46ae-11ee-be56-0242ac120002',
        note: 80,
        points: 80,
        student_id: '6f879d78-46ae-11ee-be56-0242ac120006'
      }, {
        id: '12289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '6f879d78-46ae-11ee-be56-0242ac120006'
      }, {
        id: '13289511a-46ae-11ee-be56-0242ac120002',
        note: 10,
        points: 100,
        student_id: '7f879d78-46ae-11ee-be56-0242ac120007'
      }, {
        id: '14289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '7f879d78-46ae-11ee-be56-0242ac120007'
      }, {
        id: '15289511a-46ae-11ee-be56-0242ac120002',
        note: 9,
        points: 90,
        student_id: '8f879d78-46ae-11ee-be56-0242ac120008'
      }, {
        id: '16289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '8f879d78-46ae-11ee-be56-0242ac120008'
      }, {
        id: '17289511a-46ae-11ee-be56-0242ac120002',
        note: 80,
        points: 80,
        student_id: '9f879d78-46ae-11ee-be56-0242ac120009'
      }, {
        id: '18289511a-46ae-11ee-be56-0242ac120002',
        note: 7.6,
        points: 76,
        student_id: '9f879d78-46ae-11ee-be56-0242ac120009'
      }, {
        id: '1289511a-46ae-11ee-be56-0242ac120001',
        note: 5,
        points: 50,
        student_id: '1f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '2289511a-46ae-11ee-be56-0242ac120022',
        note: 2,
        points: 20,
        student_id: '1f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '3289511a-46ae-11ee-be56-0242ac120003',
        note: 9,
        points: 90,
        student_id: '2f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '4289511a-46ae-11ee-be56-0242ac120004',
        note: 3.2,
        points: 32,
        student_id: '2f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '5289511a-46ae-11ee-be56-0242ac120005',
        note: 2.2,
        points: 22,
        student_id: '3f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '6289511a-46ae-11ee-be56-0242ac120006',
        note: 3.6,
        points: 36,
        student_id: '3f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '7289511a-46ae-11ee-be56-0242ac120007',
        note: 2.4,
        points: 24,
        student_id: '4f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '8289511a-46ae-11ee-be56-0242ac120008',
        note: 8.7,
        points: 87,
        student_id: '4f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '9289511a-46ae-11ee-be56-0242ac120009',
        note: 10,
        points: 100,
        student_id: '5f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '10289511a-46ae-11ee-be56-0242ac120010',
        note: 4.9,
        points: 49,
        student_id: '5f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '11289511a-46ae-11ee-be56-0242ac120011',
        note: 3.4,
        points: 34,
        student_id: '6f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '12289511a-46ae-11ee-be56-0242ac120012',
        note: 7.6,
        points: 76,
        student_id: '6f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '13289511a-46ae-11ee-be56-0242ac120013',
        note: 1.5,
        points: 15,
        student_id: '7f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '14289511a-46ae-11ee-be56-0242ac120014',
        note: 2.8,
        points: 28,
        student_id: '7f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '15289511a-46ae-11ee-be56-0242ac120015',
        note: 9,
        points: 90,
        student_id: '8f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '16289511a-46ae-11ee-be56-0242ac120016',
        note: 4.3,
        points: 43,
        student_id: '8f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '17289511a-46ae-11ee-be56-0242ac120017',
        note: 1.2,
        points: 12,
        student_id: '9f879d78-46ae-11ee-be56-0242ac120002'
      }, {
        id: '18289511a-46ae-11ee-be56-0242ac120018',
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
