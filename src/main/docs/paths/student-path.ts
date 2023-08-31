export const studentPath = {
  post: {
    tags: ['Student'],
    summary: 'Rota para cadastrar notas de alunos',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/registerGradeParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Sucesso'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
