// const jsonFilePath =
import * as fs from 'fs';
import * as path from 'path';
export const creatJson = (jsonFilePath: string, payload: any) => {
  const filePath = path.join(__dirname, `./${jsonFilePath}`);
  fs.writeFile(filePath, JSON.stringify(payload), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      jsonFilePath;
      console.log(
        'Data has been written to file on path =============',
        jsonFilePath,
      );
    }
  });
};
