export const PROTECTED_ROUTES = ['/admin-panel']
export const AUTH_ROUTES = ['/login']


export const isRoutePrivate = function (route:string) {
    const len = PROTECTED_ROUTES.length
    for (let i = 0; i < len; i++) {
        if (route.includes(PROTECTED_ROUTES[i])) {
            return true
        }
    }
    return false
}