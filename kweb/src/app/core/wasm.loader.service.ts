import { Injectable } from '@angular/core';
// import {add} from '../../assets/kwasm/krust'

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
        const instance = await module.default('/assets/kwasm/krust_bg.wasm');

        this.rustModule = module;
    }

    greet(name: string): string {
        return this.rustModule.greet(name);
    }

    add(a: number, b: number): number {
        return this.rustModule.add(a, b);
    }

}