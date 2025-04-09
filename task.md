  

Тестовое задание для JS разработчика
====================================

Необходимо сверстать и "оживить" интерефейс, макет которого расположен тут: [https://www.figma.com/design/IGQeCdz8lHMRz5m5xteLCr/AFS---Test-Assignment](https://www.figma.com/design/IGQeCdz8lHMRz5m5xteLCr/AFS---Test-Assignment)

В процессе выполнения тестового задания нужно использовать тестовый API, описание работы с которым см. ниже.

Требования
==========

*   Интерфейс должен быть сверстан в полном соответствии макету
*   Внешний вид интерфейса при редактировании должен оформляться с учетом предложенного дизайна компонентов UI
*   Там, где верстка не предусмотрена дизайном макета, нужно принять самостоятельное решение по внешнему виду элементов
*   Для реализации интерфейса необходимо использовать ReactJS, в том числе технологии и методологии указанные требованиях к вакансии
*   Интерфейс должен уметь:
    *   отображать данные, полученные из API
    *   отправлять к API запрос на редактирование данных карточки
    *   отображать обновленные данные после успешного редактирования
    *   загружать/удалять приложенные картинки
    *   отправлять запрос на удаление карточки
*   Результат выполнения задания должен быть выложен в любой открытый репозиторий

API
===

Особенности
-----------

API возвращает информацию по _одной_ организации `GET /companies/12` и _одному_ контакту организации `GET /contacts/16`.

API не выполняет реальных действий сохранения данных.

API временно сохраняет загруженные изображения.

Адрес
-----

[https://test-task-api.allfuneral.com/](https://test-task-api.allfuneral.com/)

Доступ
------

Работа с API возможна после получения [авторизационного токена](https://test-task-api.allfuneral.com/#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F)

Методы API
----------

*   [`GET /auth`](https://test-task-api.allfuneral.com/#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F)
*   [`GET /companies/ID`](https://test-task-api.allfuneral.com/#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B8%D0%B5-%D0%B8%D0%BD%D1%84%D0%BE-%D0%BE%D0%B1-%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8)
*   [`PATCH /companies/ID`](https://test-task-api.allfuneral.com/#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8)
*   [`DELETE /companies/ID`](https://test-task-api.allfuneral.com/#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8)
*   [`POST /companies/ID/image`](https://test-task-api.allfuneral.com/#%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F)
*   [`DELETE /companies/ID/image/IMAGE_NAME`](https://test-task-api.allfuneral.com/#%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F)
*   [`GET /contacts/ID`](https://test-task-api.allfuneral.com/#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B0)
*   [`PATCH /contacts/ID`](https://test-task-api.allfuneral.com/#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B0)

### Авторизация

`GET /auth`

Параметры запроса

    user=USERNAME
    

Ответ:

    HTTP 200 OK
    Authorization: Bearer _token_
    

Пример:

    $ curl -v -X GET https://test-task-api.allfuneral.com/auth?user=USERNAME
    

### Получениие инфо об организации

`GET /companies/ID`

Ответ:

    HTTP 200 OK
    
    {
       "id": "12",
       "contactId": "16",
       "name": "Eternal Rest Funeral Home",
       "shortName": "ERFH",
       "businessEntity": "Partnership",
       "contract": {
          "no": "1624/2-24",
          "issue_date": "2024-03-12T00:00:00Z"
       },
       "type":  ["funeral_home", "logistics_services", "burial_care_contractor"],
       "status": "active",
       "photos": [
          {
             "name":"0b8fc462dcabf7610a91.jpg",
             "filepath": "https://test-task-api.allfuneral.com/0b8fc462dcabf7610a91.jpg",
             "thumbpath": "https://test-task-api.allfuneral.com/0b8fc462dcabf7610a91_thumb.jpg",
             "createdAt": "2024-12-17T08:00:00Z",
          }
       ],
       "createdAt": "2020-11-21T08:03:00Z",
       "updatedAt": "2020-11-23T09:30:00Z"
    }
    

Пример:

    $ curl -X GET https://test-task-api.allfuneral.com/companies/12  -H "Content-Type: application/json"  -H "Authorization: Bearer _token_"
    

### Обновление данных организации

`PATCH /companies/ID`

Параметры запроса

    Content-Type: application/json
    Authorization: Bearer _token_
    
    {
        "name": _UPDATED_NAME_STR_,
        "shortName": _UPDATED_SHORTNAME_STR_,
        "businessEntity": _UPDATED_BUSINESS_ENTITY_STR_,
        "contract": {
            no: _UPDATED_CONTRACT_NO_STR_,
            issue_date: _UPDATED_CONTRACT_ISSUE_DATE_DATE_,
        },
        type: _UPDATED_TYPES_ARRAY_
    }
    

Пример:

    $ curl -X PATCH https://test-task-api.allfuneral.com/companies/12  -H "Content-Type: application/json"  -H "Authorization: Bearer _token_" -d '{"name":"Eternal Sun Funeral Home»", "shortName":"ESFH"}'
    

### Удаление организации

`DELETE /companies/ID`

Ответ:

    HTTP 200 OK
    

### Добавление изображения

`POST /companies/ID/image`

Параметры запроса

    Content-Type: multipart/form-data
    Authorization: Bearer _token_
    
    file=FILE
    

Ответ:

    HTTP 200 OK
    
    {
       "name": "24a7b93b9adc015fdb06.jpg",
       "filepath": "https://test-task-api.allfuneral.com/images/24a7b93b9adc015fdb06.jpg",
       "thumbpath": "https://test-task-api.allfuneral.com/images/24a7b93b9adc015fdb06_thumb.jpg",
       "createdAt": "2020-11-21T08:03:26.589Z"
    }
    

Пример:

     curl -v -X POST https://test-task-api.allfuneral.com/companies/12/image  -H "Content-Type: multipart/form-data"  -H "Authorization: Bearer _token_" -F "file=@/path/to/file.jpg"
    

### Удаление изображения

`DELETE /companies/ID/image/IMAGE_NAME`

Ответ:

    HTTP 200 OK
    

Пример:

     curl -v -X DELETE https://test-task-api.allfuneral.com/companies/12/image/6387dd7ab672f0acedc9.jpg -H "Authorization: Bearer _token_"
    

### Получение контакта организации

`GET /contacts/ID`

Ответ:

    HTTP 200 OK
    
    {
       "id":"16",
       "lastname": "Rosenberg",
       "firstname": "David",
       "phone": "17025552345",
       "email": "david_rosenberg88@gmail.com",
       "createdAt": "2020-11-21T08:03:26.589Z",
       "updatedAt": "2020-11-23T09:30:00Z"
    }
    

Пример:

    curl -v -X GET https://test-task-api.allfuneral.com/contacts/16  -H "Content-Type: application/json"  -H "Authorization: Bearer _token_"
    

### Обновление контакта организации

`PATCH /contacts/ID`

Параметры запроса

    Content-Type: application/json
    Authorization: Bearer _token_
    
    {
       "lastname": _UPDATED_LASTNAME_STR_,
       "firstname": _UPDATED_FIRSTNAME_STR_,
       "phone": _UPDATED_PHONE_STR_,
       "email": _UPDATED_EMAIL_STR_,
    }
    

Пример:

    curl -v -X PATCH https://test-task-api.allfuneral.com/contacts/16  -H "Content-Type: application/json"  -H "Authorization: Bearer _token" -d '{"phone":"17025552346"}'