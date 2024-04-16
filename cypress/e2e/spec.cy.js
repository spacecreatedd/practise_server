describe('template spec', () => {
  // it('Базовая авторизация', () => {
  //   cy.fixture('cypressTest').then(data =>{
  //     cy.log('Переход на страницу авторизации')
  //     cy.visit(data.login_url)

  //     cy.log('Ввод логина')
  //     cy.get('.form-input--text').type(data.login)

  //     cy.log('Ввод пароля')
  //     cy.get('.form-input--password').type(data.password)

  //     cy.log('Нажатие на кнопку "Войти"')
  //     cy.get(':nth-child(3) > .button').click()
  //   });
  // });


  //   it('Базовая авторизация негатив', () => {
  //     cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод некорректного логина');
  //       cy.get('.form-input--text').type('qwerty123');

  //       cy.log('Ввод некорректного пароля');
  //       cy.get('.form-input--password').type('qwerty');

  //       cy.log('Клик по кнопке "Войти"');
  //       cy.get(':nth-child(3) > .button').click();

  //     });
  // });
  
    // it('Авторизация с помощью сетевого города негатив', () => {
    //     cy.fixture('cypressTest').then(data => {
    //         cy.log('Переход на страницу авторизации');
    //         cy.visit(data.login_url);

    //         cy.log('Проверка отображения кнопки "Сетевой город"');
    //         cy.get('.button-login__network-city-desktop')
    //             .click(2000);

    //         cy.log('Ввод некорректного логина');
    //         cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
    //             .type('неверныйлогин');

    //         cy.log('Ввод некорректного пароля');
    //         cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
    //             .type('неверныйпароль');


    //         cy.log('Проверка отображения сетевого города');
    //         cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button')
    //             .click();
    //     });
    // });


  //   it('Просмотр карточки вакансии пользователем', () => {
  //     cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу с вакансиями')
  //         cy.visit(data.vacancies_url)

  //         cy.log('Клик по кнопке подробнее')
  //         cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button').click()
  //     });
  // });

  //   it('Отклик на вакансию студентм', () => {
  //     cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу с вакансиями')
  //         cy.visit(data.vacancies_url)

  //         cy.log('Клик по кнопке откликнуться')
  //         cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper').click()
  //     });
  // });

  //     it('Поиск и фильтрация карточек вакансий пользователем', () => {
  //       cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу с вакансиями')
  //         cy.visit(data.vacancies_url)

  //         cy.log('Поиск вакансии')
  //         cy.get('.form-input--text').type('пипи пупу')

  //         cy.log('Фильтрация')
  //         cy.get(':nth-child(2) > .radio-component__input').click()

  //         cy.log('Фильтрация 2')
  //         cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
  //         cy.get('.form-select__items > :nth-child(3)').click()

  //         cy.log('Клик по кнопке поиска')
  //         cy.get('div.search-input__field > .button').click()
  //     });
  // });


  //     it('Поиск и фильтрация карточек вакансий пользователем негатив', () => {
  //       cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу с вакансиями')
  //         cy.visit(data.vacancies_url)

  //         cy.log('Поиск вакансии')
  //         cy.get('.form-input--text').type('ффффффффффффф')

  //         cy.log('Фильтрация')
  //         cy.get(':nth-child(2) > .radio-component__input').click()

  //         cy.log('Фильтрация 2')
  //         cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
  //         cy.get('.form-select__items > :nth-child(3)').click()

  //         cy.log('Клик по кнопке поиска')
  //         cy.wait(4000)
  //         cy.get('div.search-input__field > .button').click()
  //     });
  // });

    //   it('Отклик на потребность студентом', () => {
    //     cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу потребностей')
    //       cy.visit('https://dev.profteam.su/needs')

    //       cy.log('Поиск потребностей')
    //       cy.get('.form-input--text').type('q')

    //       cy.log('Фильтрация потребностей')
    //       cy.get(':nth-child(2) > .radio-component__input').click()

    //       cy.log('Фильтрация потребностей 2')
    //       cy.get('.form-select__selected').click()
    //       cy.get('.form-select__items > :nth-child(4)').click()

    //       cy.log('Нажатие на кнопку')
    //       cy.get('div.search-input__field > .button').click()
    //     });
    // });

  //   it('Просмотр откликов студента', () => {
  //     cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации')
  //       cy.visit(data.login_url)

  //       cy.log('Ввод логина')
  //       cy.get('.form-input--text').type(data.testerEmployer)

  //       cy.log('Ввод пароля')
  //       cy.get('.form-input--password').type(data.password)

  //       cy.log('Нажатие на кнопку "Войти"')
  //       cy.get(':nth-child(3) > .button').click(2000)

  //       cy.get(':nth-child(5) > .menu-item__item-name').click()
  //     });
  // });

    //   it('Ответ на отклик по вакансии', () => {
    //     cy.fixture('cypressTest').then(data => {
    //       cy.log('Переход на страницу авторизации')
    //       cy.visit(data.login_url)

    //       cy.log('Ввод логина')
    //       cy.get('.form-input--text').type(data.testerEmployer)

    //       cy.log('Ввод пароля')
    //       cy.get('.form-input--password').type(data.password)

    //       cy.log('Нажатие на кнопку "Войти"')
    //       cy.get(':nth-child(3) > .button').click(2000)

    //       cy.get(':nth-child(5) > .menu-item__item-name').click()
    //       cy.get(':nth-child(2) > .responses-list-item__actions > :nth-child(1)').click()
    //     });
    // });

  //   it('Личный кабинет работодателя', () => {
  //     cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу авторизации')
  //         cy.visit(data.login_url)

  //         cy.log('Ввод логина')
  //         cy.get('.form-input--text').type(data.testerEmployer)

  //         cy.log('Ввод пароля')
  //         cy.get('.form-input--password').type(data.password)

  //         cy.log('Нажатие на кнопку "Войти"')
  //         cy.get(':nth-child(3) > .button').click(2000)

  //         cy.get('.router-link-active > .base-icon > svg > path').click()
  //     });
  // });

  //   it('Поиск и фильтрация карточек стажировки пользователем', () => {
  //     cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу авторизации');
  //         cy.visit(data.login_url);

  //         cy.log('Ввод логина');
  //         cy.get('.form-input--text').type(data.testerEmployer);

  //         cy.log('Ввод пароля');
  //         cy.get('.form-input--password').type(data.password);

  //         cy.log('Нажатие на кнопку "Войти"');
  //         cy.get(':nth-child(3) > .button').click(2000);

  //         cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click()
  //         cy.get(':nth-child(2) > .radio-component__input').click()
  //         cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
  //         cy.get('.form-select__items > :nth-child(2)').click()
          

  //         cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()
  //         cy.get('.form-select__items > :nth-child(2)').click()
  //         cy.get('div.search-input__field > .button').click()
  //     });
  // });


  //   it('Поиск и фильтрация карточек стажировки пользователем негатив', () => {
  //     cy.fixture('cypressTest').then(data => {
  //         cy.log('Переход на страницу авторизации');
  //         cy.visit(data.login_url);

  //         cy.log('Ввод логина');
  //         cy.get('.form-input--text').type(data.testerEmployer);

  //         cy.log('Ввод пароля');
  //         cy.get('.form-input--password').type(data.password);

  //         cy.log('Нажатие на кнопку "Войти"');
  //         cy.get(':nth-child(3) > .button').click(2000);

  //         cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click()
  //         cy.get(':nth-child(2) > .radio-component__input').click()
  //         cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
  //         cy.get('.form-select__items > :nth-child(2)').click()

  //         cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()
  //         cy.get('.form-select__items > :nth-child(4)').click()
  //         cy.get('div.search-input__field > .button').click()
  //     });
  // });


  // it('Поиск и фильтрация карточек потребности пользователем', () => {
  //   cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод логина');
  //       cy.get('.form-input--text').type(data.testerEmployer);

  //       cy.log('Ввод пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Нажатие на кнопку "Войти"');
  //       cy.get(':nth-child(3) > .button').click(2000);

  //       cy.get(':nth-child(6) > .menu-item__item-name').click()
  //       cy.get('.needs-block__filters-wrapper > .form-select > :nth-child(2) > .form-select__selected').click()
  //       cy.wait(4000)
  //       cy.get('.form-select__items > :nth-child(3)').click()
  //   });
  // });


  //   it('Поиск и фильтрация карточек потребности пользователем негатив', () => {
  //   cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод логина');
  //       cy.get('.form-input--text').type(data.testerEmployer);

  //       cy.log('Ввод пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Нажатие на кнопку "Войти"');
  //       cy.get(':nth-child(3) > .button').click(2000);

  //       cy.get(':nth-child(6) > .menu-item__item-name').click()
  //       cy.get('.needs-block__filters-wrapper > .form-select > :nth-child(2) > .form-select__selected').click()
  //       cy.wait(4000)
  //       cy.get('.form-select__items > :nth-child(4)')
  //   });
  // });


  // it('Смена пароля негатив', () => {
  //   cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод логина');
  //       cy.get('.form-input--text').type(data.testerEmployer);

  //       cy.log('Ввод пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Нажатие на кнопку "Войти"');
  //       cy.get(':nth-child(3) > .button').click(2000);

  //       cy.get(':nth-child(1) > .menu-item__item-name').click()
  //       cy.get(':nth-child(1) > .form-input--password').type('тест')
  //       cy.get(':nth-child(3) > .form-input--password').type('тест')
  //       cy.wait(2000)
  //       cy.get(':nth-child(3) > .form-input--password').click()
  //   });
  // });

  // it('Смена аватара негатив', () => {
  //   cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод логина');
  //       cy.get('.form-input--text').type(data.testerEmployer);

  //       cy.log('Ввод пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Нажатие на кнопку "Войти"');
  //       cy.get(':nth-child(3) > .button').click(2000);

  //       cy.get(':nth-child(2) > .menu-item__item-name').click()
  //       cy.wait(2000)
  //       cy.get('.base-card > .button').click()
  //   });
  // });


  // it('Смена почты негатив', () => {
  //   cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод логина');
  //       cy.get('.form-input--text').type(data.login_admin);

  //       cy.log('Ввод пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Нажатие на кнопку "Войти"');
  //       cy.get(':nth-child(3) > .button').click(2000);

  //       cy.get(':nth-child(2) > .menu-item__item-name').click()
  //       cy.get('.form-input--email').click().clear().type('аааа')
  //   });
  // });



    // it('Верификация студента негатив',() =>{
    //     cy.fixture('cypressTest').then(data =>{
    //         cy.log('Переход на страницу авторизации')
    //         cy.visit(data.login_url)

    //         cy.log('Ввод логина');
    //         cy.get('.form-input--text').type(data.login);

    //         cy.log('Ввод пароля');
    //         cy.get('.form-input--password').type(data.password);

    //         cy.log('Клик по кнопке "Войти"')
    //         cy.get(':nth-child(3) > .button').click()

    //         cy.log('верификация')
    //         cy.get('.message-student > .button').click()
            
    //         cy.log('Выбор учреждения');
    //         cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text').type('ттит').wait(2000)
            
    //         cy.get('.search-input__item').click()

    //         cy.log('Выбор специальности');
    //         cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text').type('11.02.08 Средства связи с подвижными объектами').wait(2000);

    //         cy.get('.search-input__item').first().click();
                
            
    //         cy.log('квалификация')
    //         cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text').type('про')

    //         cy.log('курс обучение')
    //         cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(5)').click()

    //         cy.log('Выбор года обучения от');
    //         cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').click();
    //         cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').type('2022');
            
    //         cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').click();
    //         cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').type('2030');
    //         cy.get('.desktop-modal__content > .student-form > .button').click()
    //     })
    // })


  //   it('Смена имени негатив', () => {
  //     cy.fixture('cypressTest').then(data => {
  //       cy.log('Переход на страницу авторизации');
  //       cy.visit(data.login_url);

  //       cy.log('Ввод логина');
  //       cy.get('.form-input--text').type(data.login);

  //       cy.log('Ввод пароля');
  //       cy.get('.form-input--password').type(data.password);

  //       cy.log('Нажатие на кнопку "Войти"');
  //       cy.get(':nth-child(3) > .button').click(2000);

  //       cy.get(':nth-child(2) > .menu-item__item-name').click()
  //       cy.get(':nth-child(2) > .form-control--max > .form-input--text').clear().type('123')
  //       cy.get('.profile-forms > .form > .form__buttons > .button').click()

  //   });
  // });
});