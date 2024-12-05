import { __turbopack_module_id__ as id } from "../components/hello" with {
    "turbopack-transition": "next-dynamic"
};
import { __turbopack_module_id__ as id1 } from "../components/hello" with {
    "turbopack-transition": "next-dynamic"
};
import { __turbopack_module_id__ as id2 } from "../components/hello" with {
    "turbopack-transition": "next-dynamic"
};
import dynamic from 'next/dynamic';
const DynamicComponentWithCustomLoading = dynamic(()=>import('../components/hello'), {
    loadableGenerated: {
        modules: [
            id
        ]
    },
    loading: ()=><p>...</p>
});
const DynamicClientOnlyComponent = dynamic(()=>import('../components/hello'), {
    loadableGenerated: {
        modules: [
            id1
        ]
    },
    ssr: false
});
const DynamicClientOnlyComponentWithSuspense = dynamic(()=>import('../components/hello'), {
    loadableGenerated: {
        modules: [
            id2
        ]
    },
    ssr: false,
    suspense: true
});
