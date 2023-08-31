export const RegisterGradeParamsSchema = {
  type: 'object',
  properties: {
    note: {
      type: 'number'
    },
    studentId: {
      type: 'string'
    }
  },
  required: ['note', 'studentId']
}
