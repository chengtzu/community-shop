import request from '@/utils/request'

let PrinterApi = {
  /*保存交易设置*/
  printerlist(data, errorback) {
    return request._post('/shop/printer.printer/index', data, errorback);
  },
}

export default PrinterApi;