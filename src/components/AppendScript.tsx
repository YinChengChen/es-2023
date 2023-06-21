interface ScriptToAppend{
    src: string,
    async: boolean,
}


export const AppendScript = (scriptProp: ScriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptProp.src;
    script.async = scriptProp.async;
    script.type = "text/jsx";
    document.body.appendChild(script);
}