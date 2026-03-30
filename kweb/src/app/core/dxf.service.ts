import { Injectable } from "@angular/core";
import DxfParser from 'dxf-parser';
import {DxfWriter} from '@tarikjabiri/dxf'


@Injectable({ providedIn: 'root' })
export class DxfService {



    parseDxfFile(file: File) {
        const reader = new FileReader();

        reader.onload = function (e: any) {
            const fileContent = e.target.result;
            const parser = new DxfParser();

            try {
                const dxf = parser.parseSync(fileContent);
                if(dxf==null)
                    throw new Error('DXF 解析失败');
                console.log('DXF 解析成功:', dxf);

                // 遍历所有实体
                if (dxf.entities) {
                    dxf.entities.forEach(entity => {
                        console.log('实体类型:', entity.type);
                        console.log('实体数据:', entity);
                        // 在这里处理具体的线条、圆、文字等
                    });
                }

            } catch (err) {
                console.error('DXF 解析失败:', err);
            }
        };

        reader.readAsText(file);
      }


    //   create()
    //   {
    //     const writer = new DxfWriter();


    //     writer.addDiameterDimension(10, 20, 30, 40, { text: 'Diameter' });
    //     writer.(0, 0, 0);
    //     writer.addLine(0, 0, 0, 10, 0, 0);
    //     writer.addCircle(5, 5, 5);
    //     writer.addText('Hello, world!', 10, 10, { height: 2.5 });
    //     const dxfData = writer.writeSync();
    //     console.log(dxfData);
    //   }
}