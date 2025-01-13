import i18n from 'i18n';
import path from 'path';
import { LANGUAGE } from '../utils/contant';

i18n.configure({
    locales: LANGUAGE.ALLOWED,
    defaultLocale: LANGUAGE.DEFAULT,
    directory: path.join('./src/', 'locales'),
    objectNotation: false,
    autoReload: false,
    syncFiles: true,
});

export default i18n;