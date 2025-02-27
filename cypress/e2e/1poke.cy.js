describe('E2E авторизация + покупка автара', function () {
    

    it('E2E авторизация + покупка автара', function () {
         //const randomIndex = Math.floor(Math.random() * 12) + 1; // Случайное число от 1 до 12
        // cy.wrap('7').as('randomIndex');
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('LOGIN');
         cy.get('#password').type('PASS');
         cy.get('.auth__button').click();
         cy.wait(1000);
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.wait(1000);
         cy.get('.shop__item.available') // Выбираем только доступные элементы
           .then(($items) => {
             const itemCount = $items.length; // Количество доступных товаров
             const randomIndex = Math.floor(Math.random() * itemCount); // Генерация случайного индекса

             // Получаем конкретный элемент по индексу
             const selectedItem = $items.eq(randomIndex);

             // Проверяем, есть ли в нем кнопка и она доступна
             cy.wrap(selectedItem).within(() => {
               cy.get('.shop__button')
                 .should('be.visible')
                 .should('be.enabled')
                 .click();
             });
           });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.k_input_name').type('ASH ASH'); 
         cy.wait(1000);
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');
         cy.wait(3000);
         cy.get('.payment__adv').click();

 
     })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 