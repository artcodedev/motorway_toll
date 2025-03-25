
export class Fetch {

    public static async request( path: string, json: Object = {}, method: string = "POST"): Promise<any> {

        const response: Response = await fetch(`${path}`, {

            method: method,
            mode:'cors',
            body: JSON.stringify(json),
            headers: { "Content-Type": "application/json"},

        });

        return await response.text();

    } 

}