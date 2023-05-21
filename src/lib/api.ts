interface FetcherProps {
    url: string
    method?: string
    body?: object
    json?: boolean
}

const fetcher = async ({url, method = 'GET', body, json = true}: FetcherProps) => {
    const res = await fetch(url, {
        method,
        ...(body && {body: JSON.stringify(body)}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        return {
            error: true,
            status: res.status,
            message: (await res.json()).message
        }
    }

    return json ? res.json() : res.text()
}

export const login = ({login, password}: { login: string, password: string }) => {
    return fetcher({url: '/api/login', method: 'POST', body: {login, password}})
}

export const getProjects = () => {
    return fetcher({url: '/api/project', method: 'GET'})
}