import axios from 'axios';

// URL API и авторизация (здесь используйте свои данные)
const amoCRMUrl = 'https://tollroad.amocrm.ru/api/v4/leads';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmMThkMDFiYTc4ZDRlNmM2YzM1ZjdhOGM0ZDI5YmE4NTdjZjNjNjBhZDlkYmY0NDI0YzY4MWE1NzBlN2MxNmQzZDQ1YWI4N2IyZWVjOTBkIn0.eyJhdWQiOiJlZDhiY2E0Mi03NTA5LTQ2MDctOTk0Zi1jNjRhOTM4NjAxY2UiLCJqdGkiOiI0ZjE4ZDAxYmE3OGQ0ZTZjNmMzNWY3YThjNGQyOWJhODU3Y2YzYzYwYWQ5ZGJmNDQyNGM2ODFhNTcwZTdjMTZkM2Q0NWFiODdiMmVlYzkwZCIsImlhdCI6MTc0MjgzOTczNSwibmJmIjoxNzQyODM5NzM1LCJleHAiOjE3NDMyMDY0MDAsInN1YiI6IjE3NTMwOTgiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MTY0NTc3OTYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSIsImZpbGVzIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyIsInB1c2hfbm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIwZjZjMDgwZC1mZTk0LTQ0NTktYjE5Ni0wNmUxMjFmOTZlNjEiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.Qvjqt6j_JR1kuRDXbZxaNMEEZNfYrZASd9oPatYkeprZttypnRLlet1uxXkVnkIBfsGYoOeqof30AKoLs-Bl5o6Y3Jt96DoiK-71I27MKZxH_1v4N81m_wta7fAOaTRvsp7OpjNfVlDpmEzeILmpKRi1_yUUjn2o6c0ANva8Q_V6AU9m7IiYp-1tChajfRIwsatqy7B9kwxnk4u3aoEi6grKUhGMd2bOlFT0swLlvk83oYFfhZa2Lp9HUfmNuM-fi6cucrxGw6jIqAxwJvoN_TprCAfs_wYUjUXVaWs0PiCkjsiTzfzjvm9R-n6DEShY2gYrvOpsMG10msvpCfRG8w';

// Функция для добавления лида
async function updateLead() {
  try {
    const leadData = {

      id: 31465049,
      name: 'lead test',
      price: 2222
    };

    const response = await axios.patch(amoCRMUrl, [leadData], {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Лид добавлен успешно', response.data);
  } catch (error) {
    console.error('Ошибка при добавлении лида', error);
  }
}




async function addLead() {
  try {
    // const leadData = {
    //   name: "Название сделки",
    //   price: 3422,
    //   custom_fields_values:[
    //      {
    //         values:[
    //            {
    //               "value":"Поле текст"
    //            }
    //         ]
    //      }
    //   ],
    // }


    const test = [
      {
          name: "121212",
          created_by: 0,
          price: 20000,
        
      }
  ]
  const amoCRMUrl = 'https://tollroad.amocrm.ru/api/v4/leads';

    const response = await axios.post(amoCRMUrl, test, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status == 200) {

      // const response = await axios.post(amoCRMUrl, test, {
      //   headers: {
      //     'Authorization': `Bearer ${accessToken}`,
      //     'Content-Type': 'application/json',
      //   },
      // });

    }

    console.log('Лид добавлен успешно', response.data);
  } catch (error) {
    console.error('Ошибка при добавлении лида', error);
  }
}

// addLead();




const addNodetes = async () => {

  const noteData = {
      note_type: 'common', // Тип примечания
      text: 'Номер авто: 12121212\n Еще что-то: some\n', // Текст примечания
  };

  const url_notes = 'https://tollroad.amocrm.ru/api/v4/leads/31465409/notes'

  const response = await axios.post(url_notes, [noteData], {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  console.log(response.data._embedded)

}

// addNodetes();


async function createLeadWithNote() {
  const domain = 'tollroad'; // Замените на ваш домен amoCRM
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmMThkMDFiYTc4ZDRlNmM2YzM1ZjdhOGM0ZDI5YmE4NTdjZjNjNjBhZDlkYmY0NDI0YzY4MWE1NzBlN2MxNmQzZDQ1YWI4N2IyZWVjOTBkIn0.eyJhdWQiOiJlZDhiY2E0Mi03NTA5LTQ2MDctOTk0Zi1jNjRhOTM4NjAxY2UiLCJqdGkiOiI0ZjE4ZDAxYmE3OGQ0ZTZjNmMzNWY3YThjNGQyOWJhODU3Y2YzYzYwYWQ5ZGJmNDQyNGM2ODFhNTcwZTdjMTZkM2Q0NWFiODdiMmVlYzkwZCIsImlhdCI6MTc0MjgzOTczNSwibmJmIjoxNzQyODM5NzM1LCJleHAiOjE3NDMyMDY0MDAsInN1YiI6IjE3NTMwOTgiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MTY0NTc3OTYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSIsImZpbGVzIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyIsInB1c2hfbm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIwZjZjMDgwZC1mZTk0LTQ0NTktYjE5Ni0wNmUxMjFmOTZlNjEiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.Qvjqt6j_JR1kuRDXbZxaNMEEZNfYrZASd9oPatYkeprZttypnRLlet1uxXkVnkIBfsGYoOeqof30AKoLs-Bl5o6Y3Jt96DoiK-71I27MKZxH_1v4N81m_wta7fAOaTRvsp7OpjNfVlDpmEzeILmpKRi1_yUUjn2o6c0ANva8Q_V6AU9m7IiYp-1tChajfRIwsatqy7B9kwxnk4u3aoEi6grKUhGMd2bOlFT0swLlvk83oYFfhZa2Lp9HUfmNuM-fi6cucrxGw6jIqAxwJvoN_TprCAfs_wYUjUXVaWs0PiCkjsiTzfzjvm9R-n6DEShY2gYrvOpsMG10msvpCfRG8w'; // Замените на ваш токен доступа

  // Создание лида
  const leadData = {
      name: 'Название лида',
      // Замените на ID статуса
      // Другие поля лида
  };

  const leadResponse = await fetch(`https://${domain}.amocrm.ru/api/v4/leads`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
  });

  console.log(leadResponse)

  // if (!leadResponse.ok) {
  //     console.error('Ошибка при создании лида:', leadResponse.statusText);
  //     return;
  // }

  // const lead = await leadResponse.json();
  // console.log('Лид создан:', lead);

  // const noteData = {
  //     note_type: 'common', // Тип примечания
  //     text: 'Это примечание к лиду', // Текст примечания
  // };

  // const noteResponse = await fetch(`https://${domain}.amocrm.ru/api/v4/leads/${lead.id}/notes`, {
  //     method: 'POST',
  //     headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(noteData)
  // });

  // if (!noteResponse.ok) {
  //     console.error('Ошибка при добавлении примечания:', noteResponse.statusText);
  //     return;
  // }

  // const note = await noteResponse.json();
  // console.log('Примечание добавлено:', note);
}




// Вызов функции
// createLeadWithNote();



// Вызов функции
// addLead();


// import { Client } from 'amocrm-js'


// const client = new Client({
//   // логин пользователя в портале, где адрес портала domain.amocrm.ru
//   domain: 'tollroad.amocrm.ru', // может быть указан полный домен вида domain.amocrm.ru, domain.amocrm.com
//   /* 
//     Информация об интеграции (подробности подключения 
//     описаны на https://www.amocrm.ru/developers/content/oauth/step-by-step)
//   */
//   auth: {
//     client_id: 'ed8bca42-7509-4607-994f-c64a938601ce', // ID интеграции
//     client_secret: 'EKSfxHWaj2zsdH6HDPGUcjXmhhhro5wyFetNmM3QUsQNOg9lgtuCpbWCRTdGk1af', // Секретный ключ
//     redirect_uri: 'tollroad.online', // Ссылка для перенаправления
//     bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmMThkMDFiYTc4ZDRlNmM2YzM1ZjdhOGM0ZDI5YmE4NTdjZjNjNjBhZDlkYmY0NDI0YzY4MWE1NzBlN2MxNmQzZDQ1YWI4N2IyZWVjOTBkIn0.eyJhdWQiOiJlZDhiY2E0Mi03NTA5LTQ2MDctOTk0Zi1jNjRhOTM4NjAxY2UiLCJqdGkiOiI0ZjE4ZDAxYmE3OGQ0ZTZjNmMzNWY3YThjNGQyOWJhODU3Y2YzYzYwYWQ5ZGJmNDQyNGM2ODFhNTcwZTdjMTZkM2Q0NWFiODdiMmVlYzkwZCIsImlhdCI6MTc0MjgzOTczNSwibmJmIjoxNzQyODM5NzM1LCJleHAiOjE3NDMyMDY0MDAsInN1YiI6IjE3NTMwOTgiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MTY0NTc3OTYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSIsImZpbGVzIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyIsInB1c2hfbm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIwZjZjMDgwZC1mZTk0LTQ0NTktYjE5Ni0wNmUxMjFmOTZlNjEiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.Qvjqt6j_JR1kuRDXbZxaNMEEZNfYrZASd9oPatYkeprZttypnRLlet1uxXkVnkIBfsGYoOeqof30AKoLs-Bl5o6Y3Jt96DoiK-71I27MKZxH_1v4N81m_wta7fAOaTRvsp7OpjNfVlDpmEzeILmpKRi1_yUUjn2o6c0ANva8Q_V6AU9m7IiYp-1tChajfRIwsatqy7B9kwxnk4u3aoEi6grKUhGMd2bOlFT0swLlvk83oYFfhZa2Lp9HUfmNuM-fi6cucrxGw6jIqAxwJvoN_TprCAfs_wYUjUXVaWs0PiCkjsiTzfzjvm9R-n6DEShY2gYrvOpsMG10msvpCfRG8w', // долгосрочный токен
//   },
// });


// const response = await client.request.patch('/api/v4/leads',[
//   {
//     "id": 54886,
//     "pipeline_id": 47521,
//     "status_id": 143,
//     "date_close": 1589297221,
//     "loss_reason_id": 7323,
//     "updated_by": 0
//   }
// ]
// )

// console.log(response);

import {Fetch} from './src/Utils/Fetch';

(async () => {

  const fetch = await Fetch.request('http://localhost:3003/api/callback', {order_id: "93536522426031009", status: 'Paid' });

  console.log(fetch);

})();
