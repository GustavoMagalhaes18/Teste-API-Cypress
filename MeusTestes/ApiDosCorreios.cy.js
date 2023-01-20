describe('Buscar um CEP e Validar o Resultado', () => {
    it('Caso Válido', () => {
        cy.request({

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/60411150'

        }).then((response) => {

            expect(response.status).to.equal(200)

            expect(response.body.address).to.equal('Rua Monsenhor Liberato')
            expect(response.body.city).to.equal('Fortaleza')

        })
    });

    it('Caso Inválido', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/'

        }).then((response) => {

            expect(response.status).to.equal(400)

            expect(response.body.message).to.equal('Parâmetro CEP obrigatório')

        })
    });

    it('Caso Inválido(abcde)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/abcde'

        }).then((response) => {

            expect(response.status).to.equal(400)

            expect(response.body.message).to.equal('Requisição mal formatada')

        })
    });

    it('Caso Inválido(!@#$%)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/!@#$%'

        }).then((response) => {

            expect(response.status).to.equal(400)

            expect(response.body.message).to.equal('Requisição mal formatada')

        })
    });

    it('Caso Inválido(00000000)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/00000000'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(60ab!@)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/60ab!@'

        }).then((response) => {

            expect(response.status).to.equal(400)

            expect(response.body.message).to.equal('Requisição mal formatada')

        })
    });

    it('Caso Inválido(99999999)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/99999999'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(Exemplo de CEP Canadense: H3Z 2Y7)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/H3Z 2Y7'

        }).then((response) => {

            expect(response.status).to.equal(400)

            expect(response.body.message).to.equal('Requisição mal formatada')

        })
    });

    it('Caso Inválido(Exemplo de CEP Sul Africano: 2200)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/2200'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(Exemplo de CEP Estadunidense:10036)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/10036'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(CEP de 1 digito: 1)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/1'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(CEP de 2 digitos: 28)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/28'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(CEP de 3 digitos: 495)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/495'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(CEP de 6 digitos: 896331)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/896331'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

    it('Caso Inválido(CEP de 7 digitos: 4987555)', () => {
        cy.request({

            failOnStatusCode: false,

            method: 'GET',

            url: 'https://cep-v2-americanas-npf.b2w.io/cep/4987555'

        }).then((response) => {

            expect(response.status).to.equal(404)

            expect(response.body.message).to.equal('Recurso não encontrado')

        })
    });

});