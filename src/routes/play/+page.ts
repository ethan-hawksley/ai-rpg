import type {PageLoad} from "./$types";

export const load: PageLoad = ({url}) => {
    const param = url.searchParams.get("settings")
    let settings = {};
    let hasSettings = false;
    if (param) {
        try {
            settings = JSON.parse(param);
            hasSettings = true;
        } catch {
        }
    }
    return {settings, hasSettings}
}