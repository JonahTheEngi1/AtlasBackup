const general = {
    applicationName: "ATLAS Launcher",
    applicationVersion: "1.0.0",
    applicationAuthor: "JonahTheEngi",
    applicationIcon: "../static/logo/512x512.png",
}

function exposedFunctions(namespace: string): any{
    // @ts-ignore
    return global.window[namespace]
}

export { general, exposedFunctions }
