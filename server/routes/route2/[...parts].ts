export default defineEventHandler(event => {
    const path = getRequestPath(event)
    const params = getRouterParams(event)
    return {
        file: "server/routes/route2/[...parts].ts",
        path,
        params,
    }
})