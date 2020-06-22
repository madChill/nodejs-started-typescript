import { Response, Request } from "express";
// import response from "../../util/response";
import { get, map, isEmpty } from "lodash";

const resp = ({ id, success, messCustoms, type }: { id: string, success: number, messCustoms?: string, type?: any }) => {
    const mess: any = ["External User has been created successfully.", "External User has been created failed.",]
    return {
        success: !success ? true : false, //0: true
        "message": messCustoms || mess[success],
        "type": type || "ExternalUser",
        "data": {
            ...id ? { id } : {}
        }
    }
}

const register = async (req: Request, res: Response, next: Function) => {
    // let data2: any = queryString.parse(queryString.stringify(req.query));
    if (!isEmpty(req.body)) {
        res.status(200).json(resp({ id: " ", success: 0, messCustoms: "success" }))
    } else {
        res.status(400).json(resp({ id: " ", success: 1, messCustoms: "User is required" }))
    }
};

export default register;
