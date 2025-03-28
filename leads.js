

const axios = require('axios');

class Leads {

    static accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmMThkMDFiYTc4ZDRlNmM2YzM1ZjdhOGM0ZDI5YmE4NTdjZjNjNjBhZDlkYmY0NDI0YzY4MWE1NzBlN2MxNmQzZDQ1YWI4N2IyZWVjOTBkIn0.eyJhdWQiOiJlZDhiY2E0Mi03NTA5LTQ2MDctOTk0Zi1jNjRhOTM4NjAxY2UiLCJqdGkiOiI0ZjE4ZDAxYmE3OGQ0ZTZjNmMzNWY3YThjNGQyOWJhODU3Y2YzYzYwYWQ5ZGJmNDQyNGM2ODFhNTcwZTdjMTZkM2Q0NWFiODdiMmVlYzkwZCIsImlhdCI6MTc0MjgzOTczNSwibmJmIjoxNzQyODM5NzM1LCJleHAiOjE3NDMyMDY0MDAsInN1YiI6IjE3NTMwOTgiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MTY0NTc3OTYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSIsImZpbGVzIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyIsInB1c2hfbm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIwZjZjMDgwZC1mZTk0LTQ0NTktYjE5Ni0wNmUxMjFmOTZlNjEiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.Qvjqt6j_JR1kuRDXbZxaNMEEZNfYrZASd9oPatYkeprZttypnRLlet1uxXkVnkIBfsGYoOeqof30AKoLs-Bl5o6Y3Jt96DoiK-71I27MKZxH_1v4N81m_wta7fAOaTRvsp7OpjNfVlDpmEzeILmpKRi1_yUUjn2o6c0ANva8Q_V6AU9m7IiYp-1tChajfRIwsatqy7B9kwxnk4u3aoEi6grKUhGMd2bOlFT0swLlvk83oYFfhZa2Lp9HUfmNuM-fi6cucrxGw6jIqAxwJvoN_TprCAfs_wYUjUXVaWs0PiCkjsiTzfzjvm9R-n6DEShY2gYrvOpsMG10msvpCfRG8w';

    static async addLead(name, price) {
        try {

            const addUrlLead = 'https://tollroad.amocrm.ru/api/v4/leads';

            const data = [{
                name: name,
                created_by: 0
            }]

            const response = await axios.post(addUrlLead, data, {
                headers: {
                    'Authorization': `Bearer ${Leads.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {

                return { status: true, data: response.data };
            }

            return { status: false, data: null };
        }
        catch (e) {
            console.log(e)
            return { status: false }
        }
    }

    static async addNoteLead(id_lead, data) {
        try {

            const url_notes = `https://tollroad.amocrm.ru/api/v4/leads/${id_lead}/notes`;

            const noteData = {
                note_type: 'common', 
                text: data,
            };

            const response = await axios.post(url_notes, [noteData], {
                headers: {
                    'Authorization': `Bearer ${Leads.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {

                return { status: true, data: response.data };
            }

            return { status: false, data: null };
        }
        catch (e) {
            return { status: false, data: null };
        }
    }

    static async updateNoteLead(text, note_id, lead_id) {
        try {

            const url_notes = `https://tollroad.amocrm.ru/api/v4/leads/${lead_id}/notes/${note_id}`;

            const data = {
                note_type: 'common',
                text: text
            } 

            const response = await axios.patch(url_notes, data, {
                headers: {
                    'Authorization': `Bearer ${Leads.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {

                return { status: true, data: response.data };
            }

            return { status: false, data: null };
        }
        catch (e) {
            console.log(e)
            return { status: false};
        }
    }


}


const addUrlLead = 'https://tollroad.amocrm.ru/api/v4/leads';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRmMThkMDFiYTc4ZDRlNmM2YzM1ZjdhOGM0ZDI5YmE4NTdjZjNjNjBhZDlkYmY0NDI0YzY4MWE1NzBlN2MxNmQzZDQ1YWI4N2IyZWVjOTBkIn0.eyJhdWQiOiJlZDhiY2E0Mi03NTA5LTQ2MDctOTk0Zi1jNjRhOTM4NjAxY2UiLCJqdGkiOiI0ZjE4ZDAxYmE3OGQ0ZTZjNmMzNWY3YThjNGQyOWJhODU3Y2YzYzYwYWQ5ZGJmNDQyNGM2ODFhNTcwZTdjMTZkM2Q0NWFiODdiMmVlYzkwZCIsImlhdCI6MTc0MjgzOTczNSwibmJmIjoxNzQyODM5NzM1LCJleHAiOjE3NDMyMDY0MDAsInN1YiI6IjE3NTMwOTgiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MTY0NTc3OTYsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSIsImZpbGVzIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyIsInB1c2hfbm90aWZpY2F0aW9ucyJdLCJoYXNoX3V1aWQiOiIwZjZjMDgwZC1mZTk0LTQ0NTktYjE5Ni0wNmUxMjFmOTZlNjEiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.Qvjqt6j_JR1kuRDXbZxaNMEEZNfYrZASd9oPatYkeprZttypnRLlet1uxXkVnkIBfsGYoOeqof30AKoLs-Bl5o6Y3Jt96DoiK-71I27MKZxH_1v4N81m_wta7fAOaTRvsp7OpjNfVlDpmEzeILmpKRi1_yUUjn2o6c0ANva8Q_V6AU9m7IiYp-1tChajfRIwsatqy7B9kwxnk4u3aoEi6grKUhGMd2bOlFT0swLlvk83oYFfhZa2Lp9HUfmNuM-fi6cucrxGw6jIqAxwJvoN_TprCAfs_wYUjUXVaWs0PiCkjsiTzfzjvm9R-n6DEShY2gYrvOpsMG10msvpCfRG8w';


const response = await axios.get(addUrlLead, {
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    },
});



const st = response.data._embedded.leads;

// console.log(st)

// console.log(st)


for (let i = 0; i < st.length; i++) {
    console.log(st[i].id)
    console.log(st[i].name)
    console.log(st[i].status_id)
    console.log('******************************')
}




// const data = await Leads.addLead('tset 1111');

// const lead_id = data.data._embedded.leads[0].id;

// const note = await Leads.addNoteLead(lead_id, 'some note data');

// const create_status = await Leads.addNoteLead(lead_id, 'STATUS: in progress');

// const note_id = create_status.data._embedded.notes[0].id;

// console.log(note_id);





export default Leads;

// console.log(await Leads.addLead('testr',));

// const data = await Leads.addNoteLead('31465409', 'qwqwwqwwwqwwqwqwq');
// console.log(data.data._embedded);

// console.log(await Leads.updateNoteLead('some some', 395536115, 31465409))



