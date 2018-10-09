const getFetch = async (url, params = {},successCallback,failureCallback) => {

    try {
        let newUrl = `${url}?`

        Object.keys(params).map((key) => {
            newUrl = `${newUrl}${key}=${params[key]}&`
        })

        let response = await fetch(newUrl, {
            method: "GET",
            credentials: "include"
        })

        let json = await response.json()

        successCallback(json)

    } catch (error) {
        failureCallback(error)
    }

}