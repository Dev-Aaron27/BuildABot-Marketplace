import { v2 } from '@google-cloud/translate';
import config from '../../../config.js';
import { error } from '../../../utils/logger.js';
const { Translate } = v2;
const translate = new Translate({ key: config.googleTranslateKey });
export async function quickTranslate(text, target) {
    const [translation] = await translate.translate(text, target);
    if (translation) {
        return translation;
    }
    else {
        error('Translation failed');
        return null;
    }
}
export async function getLanguages() {
    try {
        const [languages] = await translate.getLanguages();
        return languages;
    }
    catch (err) {
        error('Failed to fetch languages ' + err);
        return [];
    }
}
