describe('Post request', () => {
  xit('create project - Post request', () => {

    cy.request({

      method:'POST',
      url:'https://api.qase.io/v1/project',
      headers: {
        Token: 'd5a326ab345e15b9f2755dc9e751f63d01c1295d954bb9a414505156b78ab78d',
        accept: 'application/json',
        "content-type": 'application/json',
      },

      body: {
        title: 'ProjectAPI',
        code: 'APITEST'
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.code).eq("APITEST")
    })
  })

  xit('create suite - Post request', () => {

    cy.request({

      method:'POST',
      url:'https://api.qase.io/v1/suite/APITEST',
      headers: {
        Token: 'd5a326ab345e15b9f2755dc9e751f63d01c1295d954bb9a414505156b78ab78d',
        accept: 'application/json',
        "content-type": 'application/json',
      },

      body: {
        title: 'ProjectAPI',
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.id).eq(1)
    })
  })

  xit('create test case - Post request', () => {

    cy.request({

      method:'POST',
      url:'https://api.qase.io/v1/case/APITEST',
      headers: {
        Token: 'd5a326ab345e15b9f2755dc9e751f63d01c1295d954bb9a414505156b78ab78d',
        accept: 'application/json',
        "content-type": 'application/json',
      },

      body: {
        title: 'TestCase2',
        suite_id:'2',
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      // expect(response.body.result.id).eq(2)
    })
  })
  
})