function synchronized(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    let inProgress = false;
    descriptor.value = async function(...args: any[]) {
        while (inProgress) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        inProgress = true;
        try {
            return await originalMethod.apply(this, args);
        } finally {
            inProgress = false;
        }
    };
}

class MyClass8 {
    @synchronized
    async fetchData() {
        
    }
}