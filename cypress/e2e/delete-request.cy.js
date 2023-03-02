describe('Delete request', () => {
  it('delete project - Post request', () => {

    cy.request({

      method:'DELETE',
      url:'https://api.qase.io/v1/project/APITEST',
      headers: {
        Token: 'd5a326ab345e15b9f2755dc9e751f63d01c1295d954bb9a414505156b78ab78d',
      },
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
    })
  })  
})