import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WasmLoaderService {
    private rustModule: any = null;

    async load(): Promise<void> {
        if (this.rustModule) return;

        // 1. 导入胶水代码
        const module = await import('../../assets/kwasm/krust.js');
        // 2. 初始化 (加载 .wasm 文件)
        var wasmPath = environment.baseUrl == null ? '/assets/kwasm/krust_bg.wasm' : `/${environment.baseUrl}/assets/kwasm/krust_bg.wasm`;

        console.log("wasmPath=  "+wasmPath);
        const instance = await module.default(wasmPath);

        this.rustModule = module;
    }

    greet(name: string): string {
        return this.rustModule.greet(name);
    }

    add(a: number, b: number): number {
        return this.rustModule.add(a, b);
    }

}