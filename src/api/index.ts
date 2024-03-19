import axios from "axios";
import { TOKEN } from "../helper";
import { notification } from "antd";

const BACKEND_URL = process.env.BACKEND_URL;

const get = async (path: string) => {
  try {
    const token = TOKEN.get();

    const data = await axios.get(`${BACKEND_URL}${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //todo: handle 401
    // notification.error({
    //     message: "You need to login first",
    //     placement: "bottomRight",
    //   });
    //   history.push("/");
    //   return;
    return data;
  } catch (e) {
    notification.error({
      message: "Something went wrong",
      placement: "bottomRight",
    });
  }
};

export const api = {
  get,
};
