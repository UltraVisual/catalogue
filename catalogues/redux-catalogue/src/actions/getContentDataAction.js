import ContentService from '../services/ContentService';

export function getData () {
    const payload =  ContentService.getData();

    return {
        type: 'DATA_ACTION',
        payload
    }
}

export function getSingleData (link) {
    const payload = ContentService.getSingleData(link);

    return {
        type: 'SINGLE_DATA_ACTION',
        payload
    }
}
