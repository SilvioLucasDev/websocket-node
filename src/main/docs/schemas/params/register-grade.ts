export const registerGradeParams = {
  type: 'object',
  properties: {
    note: {
      type: 'number',
      example: 1.2
    },
    studentId: {
      type: 'string',
      example: '3f879d78-46ae-11ee-be56-0242ac120002'
    }
  },
  required: ['note', 'studentId']
}
