const BASE_URL = "https://dkyc.bigul.app/ekycapi";

async function requestData(url, method, params = {}) {
  let tokenNumber = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1NjllNjVlOGU2N2VhYWIwZDVjMDlhNzA4ZjI0OTJjNzk5MGU3ZTIxNWE4ZTQxNGNjNTRlMGZjMjE4MDdiZjY3YjI2NGRiMTgzODdhODg4In0.eyJhdWQiOiI1IiwianRpIjoiNTU2OWU2NWU4ZTY3ZWFhYjBkNWMwOWE3MDhmMjQ5MmM3OTkwZTdlMjE1YThlNDE0Y2M1NGUwZmMyMTgwN2JmNjdiMjY0ZGIxODM4N2E4ODgiLCJpYXQiOjE2NzI4MjQyNjAsIm5iZiI6MTY3MjgyNDI2MCwiZXhwIjoxNzA0MzYwMjYwLCJzdWIiOiIxNSIsInNjb3BlcyI6W119.EEN7u0HuNEgYO8Aa4YIFPPVQV1-1SQ1-U6e5aO1KbzIwhhm4HF4FJHVxduTIJ0w5RswioCK7tn9ZaT1kcaYXuPV7Q_PTtNZB-hBpBdcXKfCaSx7i1lk665ht0GLnvDM7d5GV2xRWYNiPpNa_8Ek3tMHyVEKqd0vUT4_knxF25ii-NTrQgG0dgYRrUrN8-7SR2nNtzJ_JpRBm1GLDJ_GKl0_-PT2KqppvQk7rj_BDAQbM_5sy2Z8WcZlpA5JoMLXsFxTzVMNH63BcYtaFbIT-b9kZaHVOusY7JGaSQoDque5kDg_SD38OOyETS8EKvxs8sW0rfoDJWFVuvqeCMbI2YHaVo_AUdk06My4ftWu-dRGjGzzTcSmk_01R8lGXSq8C-6gnnGm8jEpUCLh_YTYJGMFc2RChQUo8mIMEgM_vfRUNjZD6zvE50LJWJwn9vXA7dccpe62Qys8lznIEGo4hk0zsvO0kPENH2cwrUvW5GO_ZqdJSZypvvrhxR1pEG064XJnqgPD8J5JJ81wDOS70XLtOTBevgwUWCJ_hbTU0KmaUUxvGz2tw8XR_CDQTSi97NIsR1rOboi4v96FuQFziOeYpabQtYljdI89PCRu5g0qt86xl3D1rBPhowHlDEyIpMYM2OyINHiG-PdF_RpXum7VaHz9Q2VfKjWMtveFV3XE"
    let token = 'Bearer ' + tokenNumber;
    console.log("token",token);
    // let user = reactLocalStorage.getObject("userData");
    // if (user && user != null && Object.keys(user).length > 0) {
    //   token = user.token;
    // }
    let apiUrl = BASE_URL + url;
    var myHeaders = new Headers();
    // if (token != "") {
    //   myHeaders.append("authorization", token);
    // }
    // myHeaders.append("userType", "User");
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", token);
    // myHeaders.append("Access-Control-Allow-Origin", "https://admin.astrophy.com");
    var raw = JSON.stringify(params);
  
    var requestOptions = {};
    if (method == "POST") {
      requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
    } else if (method == "PUT") {
      requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
    } else {
      requestOptions = {
        method: method,
        headers: myHeaders,
        // body: raw,
        redirect: "follow",
      };
    }
  
    // console.log("requestOptions",requestOptions);
  
    return await fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((error) => console.log("error", error));
  }

  async function fileUplode(
    url,
    method,
    file,
    object_get = {},
    tokenCustom = null
  ) {
    let tokenNumber = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU1NjllNjVlOGU2N2VhYWIwZDVjMDlhNzA4ZjI0OTJjNzk5MGU3ZTIxNWE4ZTQxNGNjNTRlMGZjMjE4MDdiZjY3YjI2NGRiMTgzODdhODg4In0.eyJhdWQiOiI1IiwianRpIjoiNTU2OWU2NWU4ZTY3ZWFhYjBkNWMwOWE3MDhmMjQ5MmM3OTkwZTdlMjE1YThlNDE0Y2M1NGUwZmMyMTgwN2JmNjdiMjY0ZGIxODM4N2E4ODgiLCJpYXQiOjE2NzI4MjQyNjAsIm5iZiI6MTY3MjgyNDI2MCwiZXhwIjoxNzA0MzYwMjYwLCJzdWIiOiIxNSIsInNjb3BlcyI6W119.EEN7u0HuNEgYO8Aa4YIFPPVQV1-1SQ1-U6e5aO1KbzIwhhm4HF4FJHVxduTIJ0w5RswioCK7tn9ZaT1kcaYXuPV7Q_PTtNZB-hBpBdcXKfCaSx7i1lk665ht0GLnvDM7d5GV2xRWYNiPpNa_8Ek3tMHyVEKqd0vUT4_knxF25ii-NTrQgG0dgYRrUrN8-7SR2nNtzJ_JpRBm1GLDJ_GKl0_-PT2KqppvQk7rj_BDAQbM_5sy2Z8WcZlpA5JoMLXsFxTzVMNH63BcYtaFbIT-b9kZaHVOusY7JGaSQoDque5kDg_SD38OOyETS8EKvxs8sW0rfoDJWFVuvqeCMbI2YHaVo_AUdk06My4ftWu-dRGjGzzTcSmk_01R8lGXSq8C-6gnnGm8jEpUCLh_YTYJGMFc2RChQUo8mIMEgM_vfRUNjZD6zvE50LJWJwn9vXA7dccpe62Qys8lznIEGo4hk0zsvO0kPENH2cwrUvW5GO_ZqdJSZypvvrhxR1pEG064XJnqgPD8J5JJ81wDOS70XLtOTBevgwUWCJ_hbTU0KmaUUxvGz2tw8XR_CDQTSi97NIsR1rOboi4v96FuQFziOeYpabQtYljdI89PCRu5g0qt86xl3D1rBPhowHlDEyIpMYM2OyINHiG-PdF_RpXum7VaHz9Q2VfKjWMtveFV3XE"
    let token = 'Bearer ' + tokenNumber;
    let apiUrl = BASE_URL + url;
    let headers = {
      // 'Accept': 'application/json',
      // "Content-Type": "multipart/form-data",
      // "Access-Control-Allow-Origin": "https://admin.blitzcode.online",
      Authorization: token,
      // "Content-Type": "application/json",
      // userType: "User",
      // 'Authorization': 'Bearer ' + login_status,
    };
    // console.log("headers",headers);
  
    // Display the key/value pairs
    for (var pair of file.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  
    return await fetch(apiUrl, {
      method: method,
      body: file,
      redirect: "follow",
      headers: headers,
    })
      .then((response) => {
        // console.log("responseee", response, headers);
        return response.json();
      })
      .then(
        (result) => {
          // console.log(result);
          return result;
        },
        (error) => {
          return error;
        }
      );
  }
  

  export default {
    requestData,
    fileUplode,
  };