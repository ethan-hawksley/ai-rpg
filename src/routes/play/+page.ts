import type {PageLoad} from './$types';

export const load: PageLoad = ({url}) => {
    const param = url.searchParams.get('settings')
    let settings = {};
    if (param) {
        try {
            settings = JSON.parse(param);
        } catch {
            settings = {storyteller: 'serious', scenario: 'medieval'}
        }
    }
    return {settings}
}