describe('Get request', () => {
  it('Get request', () => {
    //Primer 1:
    // cy.request('https://api.qase.io/v1/project')

    //Primer2:
    cy.request({
      method: 'GET',
      url: 'https://api.qase.io/v1/project',
      headers: {
        Token: 'd5a326ab345e15b9f2755dc9e751f63d01c1295d954bb9a414505156b78ab78d',
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.entities[0].title).eq("P1")
      expect(response.body.result.entities[0].code).eq("P1")
      
    })
  })
})