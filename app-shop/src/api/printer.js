import request from '@/utils/request'

let PrinterApi = {
  /*列表*/
  printerlist(data, errorback) {
    return request._post('/shop/printer.printer/index', data, errorback);
  },
  printeradd(data, errorback) {
    return request._post('/shop/printer.printer/add', data, errorback);
  },
  deletePrinter(data, errorback) {
    return request._post('/shop/printer.printer/delete', data, errorback);
  },
  detailPrinter(data,errorback){
    return request._get('/shop/printer.printer/getEditData',data,errorback);
  },
  printeredit(data, errorback) {
    return request._post('/shop/printer.printer/edit', data, errorback);
  }
  
}

export default PrinterApi;