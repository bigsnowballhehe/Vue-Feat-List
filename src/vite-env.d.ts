/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
declare module '*.vue' {
    import { type DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}


interface ImportMetaEnv {
    //readonly VITE_BASE_URL: 'http://localhost:3001' | ''
    
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}
