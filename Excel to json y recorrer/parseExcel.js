const XLSX = require('xlsx');
var workbook = XLSX.readFile('excel_to_json.xlsx');
var sheetNames = workbook.SheetNames;
var sheetIndex = 1;

var df = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);
//console.log(df);
for (let nro of df){
    console.log(nro.NroFactura);
}