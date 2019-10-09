import * as $ from 'jquery';
import Vue from 'vue';

export async function getRequest(url: string): Promise<any> {

    return await $.ajax({
        type: 'GET',
        url: 'http://localhost:3000' + url,
        dataType: 'json',
        contentType: 'application/json',
    }) as any;
}
