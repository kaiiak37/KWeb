import { Component, OnInit } from '@angular/core';
import { DxfService } from '../../core/dxf.service';
import { WasmLoaderService } from '../../core/wasm.loader.service';

@Component({
  selector: 'app-dxf',
  imports: [],
  templateUrl: './dxf.html',
  styleUrl: './dxf.less',
})
export class Dxf implements OnInit {

  selectedFile: File | null = null;
  fileContent: string = '';
  statusMessage = '';

  constructor(private dxfService: DxfService, private wasmLoader: WasmLoaderService) {
    document.title = 'DXF';

  };


  isLoaded = false;
  async ngOnInit() {
    try {
      await this.wasmLoader.load();
      this.isLoaded = true;
    } catch (e) {
      console.error(e);
    }
  }


  // 1. 选择文件
  onFileSelected(event: any) {

    var log = this.wasmLoader.greet("sdfsfd");
    console.log(this.wasmLoader.add(456,165))
    return;
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.statusMessage = `已选择文件: ${file.name}`;
    }
  }


  // 2. 处理文件
  processDxf() {
    // if (!this.selectedFile) return;
    // this.dxfService.parseDxfFile(this.selectedFile);
  }



  aa() {

  }
}
