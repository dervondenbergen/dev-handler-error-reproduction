export default defineEventHandler(event => {
    const path = getRequestPath(event)
    const params = getRouterParams(event)
    return {
        file: "server/routes/route1/defined.ts",
        path,
        params,
    }
})